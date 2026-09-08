# Hearlie's Flower Box — Research-Backed Design & Implementation Plan

> Status: **Implemented as a public concept site.** Current operating details remain intentionally unclaimed until owner confirmation.

## 1. Evidence baseline

| Fact | Confidence | Site treatment |
|---|---:|---|
| Business name: Hearlie's Flower Box | High | Used throughout |
| Founder: Hearlie Mae Donaldson | High | Used in story |
| Began circa 1971 | High | Used as historic context, not a continuous-operation claim |
| Historic address: 323 S Parramore Ave, Orlando, FL 32805 | High | Labeled **historic storefront/location** |
| Current public-directory phone: (689) 220-2574 | Medium | Used only as **call to confirm**, never as proof the storefront is open |
| Historic phone: (407) 841-6333 | High | Documented in older local directories; retained in research notes, not used as the primary CTA |
| Historic funeral/memorial floral work | High | Featured service area with historical qualifier |
| Current operating status | Conflicting | No “open now”, hours, checkout, delivery, or visit-now claim |
| Current hours | Conflicting/unverified | Omitted |
| Same-day delivery | Unverified | Omitted |
| Prices/product catalog | Unverified | Omitted |
| Social accounts | Not clearly verified | Omitted |
| PO Box 551207 | Not independently corroborated | Omitted |

Primary evidence sources:
- Callahan Neighborhood Association — Hearlie's Flower Box / Parramore history: https://callahanassociation.org/parramore/
- City of Orlando — Hankins Building: https://www.orlando.gov/Our-Government/Departments-Offices/Executive-Offices/Office-of-Community-Affairs/The-Fabric-of-Our-Communities-Black-Historical-Sites/The-Hankins-Building/The-Hankins-Building
- Build Black Daily 2024 Orlando directory (address / historic phone): https://buildblackdaily.com/wp-content/uploads/2024/06/BuildBlackDaily_OrlandoBlackBiz2024.pdf
- Gathered & Vowed current directory snapshot (current public phone / listing data): https://gatheredandvowed.com/florists/florida/orlando/
- MerchantCircle public review / historic listing: https://www.merchantcircle.com/hearlies-flower-box1-orlando-fl
- Orlando Shine closure report: https://orlandoshine.com/page/142/?page_id=26
- ClickOrlando 2025 building report / storefront image: https://www.clickorlando.com/news/local/2025/09/10/8-residents-displaced-after-historic-parramore-building-condemned/

## 2. Audience

1. Orlando/Parramore residents who know the Hearlie's name or were referred by family/community.
2. Families seeking respectful memorial or sympathy flowers — the strongest documented service area.
3. Former customers and community members interested in the shop's legacy.
4. Future customers if/when the owner confirms current operation and services.

## 3. Conversion goals

Because current storefront status is conflicting, the conversion hierarchy is intentionally safe:

1. **Call to confirm availability**
2. **Discover the Hearlie story**
3. **View the historic Parramore location**

No commerce action is shown until prices, fulfillment, delivery radius, and current inventory are confirmed.

## 4. Creative direction

**Warm Parramore Heritage / Floral Editorial.**

The supplied references contributed three useful patterns:
- “local florist” reference: obvious phone/location actions and mobile quick-action bar;
- ecommerce reference: strong visual card hierarchy, without copying unverified prices/cart/same-day claims;
- editorial reference: serif-led storytelling, warm paper palette, restrained luxury, generous image-led sections.

The finished design combines all three while remaining specific to Hearlie's via the founder story, Parramore cues, blue storefront color, and historic location.

## 5. Color system

- Parramore blue `#286B87`
- Deep blue `#173F50`
- Night blue `#0F2D38`
- Warm cream `#F6F0E5`
- Paper `#FFFDF9`
- Petal burgundy `#8D4653`
- Garden green `#4F6856`
- Warm coral `#C76044`

These are design colors inspired by the historic storefront and floral imagery, not claimed original brand standards.

## 6. Typography

- **Newsreader** — display / story headings
- **Source Sans 3** — navigation, body, metadata, calls to action

Both are loaded through Google Fonts in this concept. A production handoff can self-host WOFF2 files if desired and appropriately licensed.

## 7. Image strategy

Priority order:
1. owner-controlled current photos;
2. commissioned photography of current floral work and current team;
3. clearly licensed stock floral imagery for temporary concept use;
4. editorial business photography only with explicit replacement/licensing labels.

The site currently uses free Unsplash imagery for floral direction and one ClickOrlando storefront image that is explicitly labeled **editorial reference — replace or license before commercial launch**.

No stock person is presented as Hearlie Mae Donaldson or a Hearlie's employee.

## 8. Information architecture

Single-page launch architecture:
- Hero
- Quick business facts
- Floral work
- Founder / Parramore story
- Historic review
- Inspiration gallery
- Hankins Building / place story
- Contact / verification notice
- Final CTA

This is preferable to a fake ecommerce catalog while data is incomplete.

## 9. Section-by-section layout

### Hero
Large real floral photograph, concise Hearlie-specific story, “Call to confirm” CTA, and a verification note.

### Quick facts
Current directory-listed phone (explicitly call-to-confirm), craft cue, and historic Parramore address. No hours.

### Floral work
Three editorial image cards. Memorial work is clearly documented. Broader occasion work is framed as something to confirm rather than as a guaranteed service.

### Story
Actual Hearlie's storefront image + evidence-backed founder timeline.

### Social proof
One traceable public 2010 review with source link; no fabricated carousel.

### Gallery
Licensed floral inspiration photography with a permanent statement that it is not a current Hearlie's product catalog.

### Place
Hankins Building / Parramore history and map link.

### Contact
Explains the operating-status conflict and provides a safe call-first CTA.

## 10. Three.js / animation plan

Three.js is used only as a **progressive enhancement** in the hero: a handful of low-opacity petal shapes drift slowly over the real floral photograph.

Constraints:
- desktop only;
- low-power renderer;
- capped device pixel ratio;
- no pointer interaction;
- no gameplay behavior;
- hidden for `prefers-reduced-motion`;
- dynamically imported from CDN so failure leaves a complete static page.

Section reveals use IntersectionObserver and are similarly removed for reduced-motion users.

## 11. Responsive behavior

- Mobile-first layout.
- Header collapses into keyboard-accessible menu below 980px.
- Service cards collapse from 3 columns → 2 → 1.
- Story / place / contact become single-column.
- Gallery becomes a compact 2-column mobile grid.
- A fixed mobile quick-action bar exposes **Call / Story / Map**.
- Touch targets are at least 44px where practical.

## 12. Accessibility

Target: WCAG 2.2 AA.

Implemented:
- semantic landmarks;
- one H1;
- skip link;
- visible focus styles;
- keyboard-accessible menu with Escape handling;
- meaningful alt text;
- decorative hero image exposed with empty alt;
- no autoplay audio/video;
- reduced-motion behavior;
- high-contrast fallback adjustment;
- no color-only status communication.

## 13. Performance

- No framework or bundler.
- Static HTML/CSS/JS.
- Responsive Unsplash image URLs.
- Hero uses `fetchpriority="high"`.
- Non-critical images use `loading="lazy"`.
- Fixed image dimensions/aspect ratios reduce layout shift.
- Three.js is loaded only when useful.
- JS failure leaves content and primary actions available.

## 14. SEO / local discovery

Implemented:
- descriptive title and meta description;
- canonical URL;
- Open Graph metadata;
- `Organization` JSON-LD with founder, founding date, and a clearly named historic-location `Place`;
- sitemap and robots file;
- semantic heading structure;
- crawlable phone/location text.

Intentionally omitted from structured data:
- opening hours;
- price range;
- aggregate rating;
- current delivery radius;
- social profiles;
- phone in Schema until ownership is confirmed.

## 15. Rights / licensing notes

See `ASSET_RIGHTS.md`.

Commercial-launch blocker: replace or explicitly license the ClickOrlando / Graham Media storefront image. Owner photography is strongly preferred for the hero/gallery before final business use.

## 16. Implementation sequence

Completed:
1. research baseline;
2. evidence-safe information architecture;
3. responsive visual system;
4. semantic static build;
5. licensed inspiration imagery integration;
6. restrained Three.js enhancement;
7. accessibility/reduced-motion behavior;
8. SEO/JSON-LD;
9. GitHub Pages workflow.

Still required from business owner for a full operational website:
1. confirm active/closed/relaunched status;
2. confirm correct current phone;
3. confirm storefront/customer-facing address;
4. confirm hours;
5. confirm currently offered services;
6. confirm ordering/delivery process;
7. provide official social links;
8. provide owner-controlled product, team, and workspace photography.

## 17. Acceptance criteria

Current concept acceptance:
- [x] Mobile-first and responsive
- [x] Actual photography leads the UI
- [x] Three.js complements rather than replaces photography
- [x] Reduced-motion fallback
- [x] Static fallback if JS/WebGL fails
- [x] Semantic HTML / keyboard navigation / focus states
- [x] SEO metadata and JSON-LD
- [x] No invented prices, hours, delivery promises, or social accounts
- [x] Business-history claims tied to research
- [x] Demo/editorial image rights clearly documented
- [x] GitHub Pages deployment workflow included

Commercial launch acceptance remains blocked until the owner confirms current operating data and replaces/licenses the editorial storefront image.
