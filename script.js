(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = [...document.querySelectorAll('.reveal')];

  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px' });

    reveals.forEach((element) => observer.observe(element));
  }

  const canvasHost = document.getElementById('petal-canvas');
  const canUseWebGL = canvasHost && !reduceMotion && window.innerWidth >= 900;

  if (!canUseWebGL) return;

  // Three.js is intentionally optional: the hero photograph and content remain complete if it fails.
  import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js')
    .then((THREE) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 8;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      canvasHost.appendChild(renderer.domElement);

      const petalShape = new THREE.Shape();
      petalShape.moveTo(0, .54);
      petalShape.bezierCurveTo(.5, .32, .5, -.18, 0, -.58);
      petalShape.bezierCurveTo(-.5, -.18, -.5, .32, 0, .54);
      const geometry = new THREE.ShapeGeometry(petalShape, 18);

      const palette = [0xf2c1b1, 0xf5dfc7, 0xd7b37e, 0xbccfbd];
      const petals = [];
      const group = new THREE.Group();
      scene.add(group);

      for (let i = 0; i < 14; i += 1) {
        const material = new THREE.MeshBasicMaterial({
          color: palette[i % palette.length],
          transparent: true,
          opacity: 0.18 + (i % 3) * 0.035,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        const petal = new THREE.Mesh(geometry, material);
        petal.scale.setScalar(0.12 + Math.random() * 0.11);
        petal.position.set((Math.random() - .5) * 10, (Math.random() - .5) * 6, -1 + Math.random() * 2);
        petal.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
        petal.userData.speed = 0.0007 + Math.random() * 0.0009;
        petal.userData.drift = (Math.random() - .5) * 0.0007;
        group.add(petal);
        petals.push(petal);
      }

      const resize = () => {
        const width = canvasHost.clientWidth;
        const height = canvasHost.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      resize();
      window.addEventListener('resize', resize, { passive: true });

      let last = performance.now();
      let frame;
      const animate = (now) => {
        const delta = Math.min(now - last, 32);
        last = now;
        petals.forEach((petal) => {
          petal.position.y -= petal.userData.speed * delta;
          petal.position.x += petal.userData.drift * delta;
          petal.rotation.z += 0.0006 * delta;
          petal.rotation.y += 0.0003 * delta;
          if (petal.position.y < -3.4) {
            petal.position.y = 3.4;
            petal.position.x = (Math.random() - .5) * 10;
          }
        });
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);

      document.addEventListener('visibilitychange', () => {
        if (document.hidden && frame) cancelAnimationFrame(frame);
        if (!document.hidden) {
          last = performance.now();
          frame = requestAnimationFrame(animate);
        }
      });
    })
    .catch(() => {
      canvasHost.remove();
    });
})();
