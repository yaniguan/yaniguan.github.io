---
layout: plain
permalink: /outside/
title: Outside the lab
eyebrow: Yani Guan
eyebrow_url: /
description: >
  What I do when I am not in front of a terminal: carry a camera, read,
  drive a very long way to somewhere empty, and keep a small model of
  wherever I end up.
nav: false
places: true
outside: true
page_class: outside-page
# Counted for the numbers strip; the drawing in the Cameras section is separate.
gear:
  bodies: [Canon R5, Canon 6D Mark II]
  lenses: [EF 16–35mm f/2.8, EF 24–70mm f/2.8, EF 70–200mm f/2.8]
---

{%- comment -%}
The drawings reuse the landing page's diagram vocabulary (.about-figure plus
the fig-\* classes in \_sass/\_about.scss). Add a row or a shape, not a new layout.

Content lives in \_data/outside/ (photos, reading, trips) and \_data/places.yml;
the interactive parts are assets/js/outside.js and \_sass/\_outside.scss, loaded
by `outside: true` above. Every include sits inside an HTML block so Markdown
leaves its indentation alone.
{%- endcomment -%}

<div class="outside-intro">
  {% include outside/photos.liquid part="hero" %}
  {% include outside/stats.liquid %}
</div>

<nav class="outside-nav" aria-label="Sections on this page">
  <ul>
    <li><a href="#cameras">Cameras</a></li>
    <li><a href="#reading">阅读 / Reading</a></li>
    <li><a href="#road-trips">Road trips</a></li>
    <li><a href="#places">Places</a></li>
  </ul>
</nav>

{% include outside/photos.liquid part="lightbox" %}

<section class="about-section outside-section" id="cameras">
  <h2 class="about-section-title">Cameras</h2>

  <p class="lst-desc">
    Two Canon bodies, three fast EF zooms, and two DJI things for the frames a
    tripod cannot reach. Same instinct as the research, honestly: go look at the
    thing directly instead of reading someone else's summary of it. The footage
    that moves goes up on <a href="https://www.youtube.com/channel/UCw0_ASuCQS4jrs21iHaBhoA">YouTube</a>,
    and the stills go on <a href="https://www.flickr.com/photos/205150673@N08/">Flickr</a>.
  </p>

  <figure class="about-figure">
    <svg viewBox="0 0 900 230" role="img" aria-labelledby="gear-title gear-desc">
      <title id="gear-title">Camera gear</title>
      <desc id="gear-desc">
        Two Canon bodies, an R5 and a 6D Mark II; three EF f/2.8 zooms covering 16 to
        200mm; a DJI Air 3S drone and a DJI Osmo Pocket 3.
      </desc>

      <!-- Panel A: bodies -->
      <text class="fig-h" x="10" y="20">BODIES</text>
      <rect class="fig-panel" x="10" y="30" width="272" height="180" rx="6" />

      <g transform="translate(30,58)">
        <rect class="fig-line" x="0" y="14" width="108" height="66" rx="8" />
        <path class="fig-box" d="M40,14 V5 Q40,2 44,2 H66 Q70,2 70,5 V14 Z" />
        <circle class="fig-box" cx="94" cy="10" r="4" />
        <circle class="fig-line" cx="52" cy="50" r="23" />
        <circle class="fig-line-soft" cx="52" cy="50" r="13" />
        <path class="fig-line-soft" d="M86,20 Q92,40 86,74" />
      </g>
      <text class="fig-t" x="30" y="172">Canon R5</text>
      <text class="fig-s" x="30" y="186">mirrorless · main body</text>

      <g transform="translate(156,54)">
        <rect class="fig-line" x="0" y="18" width="112" height="66" rx="8" />
        <path class="fig-box" d="M40,18 L49,3 H67 L76,18 Z" />
        <circle class="fig-box" cx="98" cy="14" r="4" />
        <circle class="fig-line" cx="54" cy="54" r="24" />
        <circle class="fig-line-soft" cx="54" cy="54" r="14" />
        <path class="fig-line-soft" d="M90,24 Q96,44 90,78" />
      </g>
      <text class="fig-t" x="156" y="172">Canon 6D Mark II</text>
      <text class="fig-s" x="156" y="186">native EF mount</text>

      <!-- Panel B: the f/2.8 trinity -->
      <text class="fig-h" x="296" y="20">EF f/2.8 TRINITY</text>
      <rect class="fig-panel" x="296" y="30" width="340" height="180" rx="6" />

      <g transform="translate(0,52)">
        <rect class="fig-line" x="316" y="7" width="6" height="22" rx="1" />
        <rect class="fig-line" x="322" y="0" width="76" height="36" rx="5" />
        <path class="fig-line-soft" d="M348,3 V33 M370,3 V33" />
        <ellipse class="fig-box" cx="398" cy="18" rx="5" ry="18" />
        <text class="fig-t" x="478" y="16">EF 16–35mm f/2.8</text>
        <text class="fig-s" x="478" y="30">wide · landscape</text>
      </g>

      <g transform="translate(0,106)">
        <rect class="fig-line" x="316" y="7" width="6" height="22" rx="1" />
        <rect class="fig-line" x="322" y="0" width="94" height="36" rx="5" />
        <path class="fig-line-soft" d="M354,3 V33 M381,3 V33" />
        <ellipse class="fig-box" cx="416" cy="18" rx="5" ry="18" />
        <text class="fig-t" x="478" y="16">EF 24–70mm f/2.8</text>
        <text class="fig-s" x="478" y="30">the one that lives on the body</text>
      </g>

      <g transform="translate(0,160)">
        <rect class="fig-line" x="316" y="7" width="6" height="22" rx="1" />
        <rect class="fig-line" x="322" y="0" width="132" height="36" rx="5" />
        <path class="fig-line-soft" d="M367,3 V33 M405,3 V33" />
        <ellipse class="fig-box" cx="454" cy="18" rx="5" ry="18" />
        <text class="fig-t" x="478" y="16">EF 70–200mm f/2.8</text>
        <text class="fig-s" x="478" y="30">long · compression</text>
      </g>

      <!-- Panel C: DJI -->
      <text class="fig-h" x="652" y="20">DJI</text>
      <rect class="fig-panel" x="652" y="30" width="238" height="180" rx="6" />

      <g transform="translate(664,44)">
        <circle class="fig-line-soft" cx="18" cy="18" r="17" />
        <circle class="fig-line-soft" cx="102" cy="18" r="17" />
        <circle class="fig-line-soft" cx="18" cy="78" r="17" />
        <circle class="fig-line-soft" cx="102" cy="78" r="17" />
        <path class="fig-line" d="M40,36 L18,18 M80,36 L102,18 M40,60 L18,78 M80,60 L102,78" />
        <circle class="fig-line" cx="18" cy="18" r="4" />
        <circle class="fig-line" cx="102" cy="18" r="4" />
        <circle class="fig-line" cx="18" cy="78" r="4" />
        <circle class="fig-line" cx="102" cy="78" r="4" />
        <rect class="fig-box" x="36" y="30" width="48" height="36" rx="9" />
        <rect class="fig-box" x="52" y="64" width="16" height="14" rx="3" />
        <circle class="fig-line" cx="60" cy="71" r="3.5" />
      </g>

      <g transform="translate(800,42)">
        <path class="fig-line" d="M14,26 V34 M28,26 V34" />
        <rect class="fig-line" x="8" y="34" width="26" height="62" rx="6" />
        <rect class="fig-line-soft" x="12" y="42" width="18" height="24" rx="2" />
        <rect class="fig-box" x="9" y="2" width="24" height="24" rx="7" />
        <circle class="fig-line" cx="21" cy="14" r="7" />
        <circle class="fig-line-soft" cx="21" cy="14" r="3" />
      </g>

      <text class="fig-t" x="664" y="168">DJI Air 3S</text>
      <text class="fig-s" x="664" y="182">from above</text>
      <text class="fig-t" x="790" y="168">Osmo Pocket 3</text>
      <text class="fig-s" x="790" y="182">walking around</text>
    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the drawing sideways →</p>

  <p class="about-figure-caption">
    The glass all predates the R5 — it was bought for the 6D Mark II and now goes
    on the R5 through an EF-to-RF adapter. The 6D Mark II is still the one I hand
    to whoever is in the passenger seat.
  </p>
</section>

<section class="about-section outside-section" id="reading">
  <h2 class="about-section-title">阅读 / Reading</h2>
  <p class="lst-desc">
    At UCLA, my computational chemistry PhD has meant plenty of molecules,
    electrolytes, batteries, and AI. Here
    are 97 books making a competing claim on my attention. Some help me think;
    some help me stop. They share shelf space with road-trip plans for my partner,
    our dog, and whichever camera comes along.
  </p>
  {% include outside/shelf.liquid %}
  <p class="about-figure-caption">
    One Murakami novel, two Chinese translations: a perfectly reasonable use of
    shelf space. Anne Carson gets two books in Huang Qian’s translation, too.
    These are personal notes, not homework; the library cards have no real due dates.
  </p>
</section>

<section class="about-section outside-section" id="road-trips">
  <h2 class="about-section-title">Road trips</h2>

  <p class="lst-desc">
    Four cross-country runs, every one of them out of Los Angeles and back — no
    one-way flights, no shipped car. Same three people and the same dog each time,
    and not one of them came home entirely the way it went out.
  </p>

  <figure class="about-figure">
    <svg viewBox="0 0 900 190" role="img" aria-labelledby="crew-title crew-desc">
      <title id="crew-title">Who is in the car</title>
      <desc id="crew-desc">
        Three people and a dog; a Toyota RAV4 for 2023, 2024 and 2025, and a Tesla
        Model 3 for 2026.
      </desc>
      <rect class="fig-panel" x="10" y="28" width="880" height="142" rx="6" />

      <g class="fig-line">
        <circle cx="60" cy="78" r="7" />
        <path d="M60,85 V99 M50,92 L60,88 L70,92 M60,99 L52,110 M60,99 L68,110" />
        <circle cx="104" cy="78" r="7" />
        <path d="M104,85 V99 M94,92 L104,88 L114,92 M104,99 L96,110 M104,99 L112,110" />
        <circle cx="148" cy="78" r="7" />
        <path d="M148,85 V99 M138,92 L148,88 L158,92 M148,99 L140,110 M148,99 L156,110" />
      </g>

      <g transform="translate(200,0)">
        <rect class="fig-line" x="0" y="88" width="30" height="14" rx="7" />
        <path class="fig-line" d="M5,102 V110 M11,102 V110 M21,102 V110 M27,102 V110" />
        <path class="fig-line" d="M1,88 Q-7,80 -2,72" />
        <path class="fig-line" d="M27,90 L35,86" />
        <circle class="fig-box" cx="40" cy="84" r="8" />
        <path class="fig-line" d="M46,82 H53 Q55,82 55,85 Q55,88 53,88 H46" />
        <path class="fig-line" d="M36,78 L33,70 L41,74 Z" />
        <circle class="fig-dot" cx="42" cy="82" r="1.3" />
      </g>

      <text class="fig-t" x="60" y="140">Three of us, plus the dog</text>
      <text class="fig-s" x="60" y="154">same crew every trip</text>

      <path class="fig-line-soft" d="M430,45 V155" />

      <g transform="translate(470,52)">
        <path class="fig-line" d="M4,32 V22 L13,20 L21,7 Q22,5 25,5 H58 Q61,5 62,7 L72,20 L84,22 V32" />
        <path class="fig-line-soft" d="M24,19 H57 M41,19 V8" />
        <circle class="fig-box" cx="22" cy="32" r="6.5" />
        <circle class="fig-box" cx="67" cy="32" r="6.5" />
        <circle class="fig-line-soft" cx="22" cy="32" r="2.5" />
        <circle class="fig-line-soft" cx="67" cy="32" r="2.5" />
        <path class="fig-line-soft" d="M0,38.5 H88" />
      </g>
      <text class="fig-t" x="576" y="72">Toyota RAV4</text>
      <text class="fig-s" x="576" y="86">2023 · 2024 · 2025</text>

      <g transform="translate(470,104)">
        <path class="fig-line" d="M4,32 V24 L15,22 Q27,8 44,8 Q60,8 68,22 L84,24 V32" />
        <path class="fig-line-soft" d="M21,21 Q30,13 44,13 Q55,13 62,21 M43,13 V21" />
        <circle class="fig-box" cx="22" cy="32" r="6.5" />
        <circle class="fig-box" cx="67" cy="32" r="6.5" />
        <circle class="fig-line-soft" cx="22" cy="32" r="2.5" />
        <circle class="fig-line-soft" cx="67" cy="32" r="2.5" />
        <path class="fig-line-soft" d="M0,38.5 H88" />
      </g>
      <text class="fig-t-em" x="576" y="124">Tesla Model 3</text>
      <text class="fig-s" x="576" y="138">2026 · most of it on FSD</text>
    </svg>

  </figure>

{% include outside/trips.liquid part="map" %}

{%- comment -%}
The static map is generated by bin/roadtrip-map.py. It stays as the no-JS
(and no-Leaflet) fallback; outside.js hides it once the live map is up.
{%- endcomment -%}

  <div class="trip-map-fallback" data-trip-map-fallback>
  <figure class="about-figure">
    <svg viewBox="0 0 900 420" role="img" aria-labelledby="map-title map-desc">
      <title id="map-title">Four road trips out of Los Angeles</title>
      <desc id="map-desc">
        A map of the lower 48 with four loops out of Los Angeles. 2023 goes up the
        coast to Seattle and home inland through Portland and Reno. 2024 goes through
        Las Vegas and Arizona to a circuit of the Texas cities and home past Carlsbad.
        2025 goes north through the Tetons and the Black Hills to Minneapolis and
        Chicago, and home through Denver and Moab. 2026 crosses to Boston through
        Pittsburgh, with a side trip to New York, and comes home by Niagara Falls and
        St. Louis.
      </desc>

      <path class="fig-map" d="M 198.8,51.5 C 197.1,54.4 184.9,69.9 182.3,75.4 C 179.6,81.0 172.0,106.5 169.8,113.2 C 167.6,119.9 158.1,143.2 157.6,149.9 C 157.1,156.7 163.0,180.4 164.3,188.1 C 165.6,195.9 169.2,230.2 172.0,236.0 C 174.7,241.8 191.9,249.5 194.7,252.7 C 197.5,255.8 199.8,269.1 202.9,271.0 C 206.0,272.9 223.7,271.3 229.5,273.9 C 235.2,276.5 260.7,296.8 266.9,299.5 C 273.0,302.2 293.5,304.0 298.1,304.0 C 302.7,304.0 312.8,296.4 317.8,299.7 C 322.9,303.0 349.1,337.5 354.1,340.3 C 359.1,343.1 369.7,329.1 373.2,331.0 C 376.8,332.8 389.9,356.2 394.0,361.0 C 398.0,365.8 415.9,384.2 418.4,384.0 C 420.8,383.8 418.8,362.7 421.1,359.1 C 423.3,355.4 439.7,345.6 443.3,343.3 C 446.8,341.0 456.0,334.1 460.5,333.8 C 464.9,333.4 488.0,338.8 493.0,339.1 C 498.0,339.5 513.0,339.3 516.0,337.7 C 519.0,336.0 522.2,322.3 526.2,320.9 C 530.3,319.6 556.7,322.9 560.8,322.8 C 565.0,322.7 569.6,319.2 572.0,320.1 C 574.5,321.0 586.0,330.4 587.7,332.7 C 589.3,335.0 589.6,343.0 590.6,345.6 C 591.7,348.2 597.5,359.4 598.9,361.7 C 600.3,364.0 604.9,369.6 606.4,371.2 C 607.8,372.8 613.4,378.7 614.9,379.2 C 616.5,379.6 622.4,378.7 623.1,376.5 C 623.8,374.4 624.0,358.9 623.2,355.2 C 622.4,351.5 615.8,339.3 613.9,335.4 C 612.0,331.5 603.0,316.0 602.0,311.8 C 601.0,307.7 601.3,292.9 602.9,288.8 C 604.6,284.8 618.0,269.9 620.5,266.9 C 623.0,263.9 627.6,258.2 630.6,255.6 C 633.5,252.9 652.1,240.9 653.3,237.3 C 654.4,233.6 643.5,218.8 643.0,214.9 C 642.5,210.9 647.0,198.1 647.8,193.3 C 648.7,188.6 649.4,166.6 652.1,162.2 C 654.8,157.8 675.8,146.7 678.3,144.6 C 680.7,142.4 680.0,140.5 679.7,138.6 C 679.4,136.8 673.8,126.3 674.6,123.5 C 675.3,120.7 685.4,110.3 687.9,107.3 C 690.4,104.3 701.6,92.8 702.4,90.4 C 703.3,88.0 699.1,83.4 697.5,80.9 C 695.8,78.3 686.1,63.0 683.9,61.6 C 681.7,60.1 674.1,62.6 672.7,64.9 C 671.3,67.2 669.4,83.4 668.4,86.7 C 667.4,89.9 664.9,98.9 661.6,100.8 C 658.4,102.7 636.5,105.9 632.6,108.0 C 628.7,110.0 621.9,120.5 618.6,123.2 C 615.2,126.0 600.1,136.4 595.3,138.5 C 590.6,140.7 568.8,149.3 565.6,147.4 C 562.5,145.5 562.6,121.2 560.4,117.3 C 558.1,113.4 545.8,106.8 540.9,103.9 C 536.0,101.0 511.0,86.4 506.3,85.0 C 501.6,83.5 494.4,88.3 488.6,87.6 C 482.9,86.9 468.1,81.4 442.2,77.5 C 416.3,73.5 222.9,46.3 201.0,44.0 C 179.1,41.7 200.5,48.7 198.8,51.5 Z" />

      <path class="fig-route" d="M 195.4,248.0 C 193.8,247.1 183.5,241.9 181.1,239.4 C 178.8,237.0 175.7,229.0 174.0,225.7 C 172.3,222.5 166.6,212.0 165.7,209.8 C 164.8,207.5 166.0,207.6 166.0,205.3 C 165.9,203.0 165.9,193.2 165.0,188.7 C 164.0,184.3 157.8,169.8 157.2,165.0 C 156.6,160.2 158.8,148.9 159.5,144.9 C 160.2,140.9 162.2,132.3 163.3,128.6 C 164.3,125.0 167.6,115.5 169.0,112.0 C 170.3,108.5 174.0,99.9 175.3,96.4 C 176.6,93.0 179.8,83.9 181.0,80.7 C 182.3,77.5 184.2,69.3 186.4,67.3 C 188.7,65.4 199.7,62.4 201.7,63.2 C 203.6,63.9 205.1,71.4 203.9,74.2 C 202.7,77.0 191.8,87.1 191.0,88.8 C 190.2,90.5 195.4,87.0 196.2,89.4 C 197.0,91.9 199.1,106.1 198.1,110.9 C 197.2,115.7 188.0,128.0 187.3,133.3 C 186.6,138.6 190.7,155.0 191.7,159.4 C 192.8,163.8 195.6,168.0 196.9,173.0 C 198.3,178.0 203.1,200.0 204.0,204.6 C 204.9,209.3 205.6,212.0 205.1,215.4 C 204.6,218.7 200.2,231.6 199.2,235.2 C 198.1,238.8 195.8,246.6 195.4,248.0" />
      <path class="fig-route" d="M 195.4,248.0 C 199.6,245.8 225.9,227.7 234.0,227.6 C 242.0,227.5 264.6,244.5 268.2,247.1 C 271.7,249.7 267.2,248.8 266.3,251.2 C 265.3,253.7 259.5,265.4 259.8,269.4 C 260.1,273.3 262.7,284.1 269.1,287.5 C 275.5,290.9 308.2,297.2 317.9,300.2 C 327.6,303.3 347.6,311.4 357.3,315.4 C 367.1,319.5 400.1,336.2 406.5,337.4 C 412.9,338.6 411.4,326.8 415.3,326.3 C 419.3,325.9 441.2,336.9 442.4,333.2 C 443.6,329.6 431.7,297.1 426.3,293.1 C 421.0,289.1 400.3,295.8 393.8,296.7 C 387.3,297.6 372.8,301.8 367.3,301.5 C 361.8,301.2 349.6,295.0 343.9,294.0 C 338.2,293.0 323.7,293.3 315.5,292.6 C 307.3,291.9 275.2,290.0 269.1,287.5 C 263.0,284.9 267.9,273.7 259.8,269.4 C 251.7,265.0 202.4,250.4 195.4,248.0" />
      <path class="fig-route" d="M 195.4,248.0 C 195.8,246.6 198.8,240.6 199.2,235.2 C 199.6,229.9 199.4,206.3 199.1,199.5 C 198.9,192.6 194.4,177.4 196.9,173.0 C 199.4,168.6 214.9,162.3 221.6,159.3 C 228.3,156.2 249.3,147.9 257.5,145.3 C 265.7,142.7 286.4,136.6 296.1,135.5 C 305.7,134.3 337.8,134.6 345.6,135.1 C 353.4,135.6 354.1,140.3 366.7,139.8 C 379.4,139.2 444.2,127.0 460.7,130.1 C 477.2,133.2 517.2,163.1 517.0,168.0 C 516.7,173.0 468.5,173.1 458.8,175.1 C 449.0,177.1 441.1,183.6 428.5,185.9 C 416.0,188.2 359.2,193.7 344.7,195.9 C 330.2,198.1 306.9,203.5 296.8,206.0 C 286.7,208.5 259.4,216.2 252.4,218.5 C 245.5,220.9 240.2,224.3 234.0,227.6 C 227.7,230.8 199.6,245.8 195.4,248.0" />
      <path class="fig-route-em" d="M 195.4,248.0 C 202.4,250.4 251.8,269.5 259.8,269.4 C 267.8,269.2 261.4,248.5 268.2,247.1 C 274.9,245.6 310.0,254.8 321.5,256.1 C 333.0,257.4 362.0,258.6 372.7,258.7 C 383.5,258.8 405.5,262.1 418.9,257.1 C 432.3,252.1 481.9,220.1 494.5,213.2 C 507.2,206.4 526.4,197.4 534.2,194.7 C 542.0,191.9 558.9,190.2 565.6,188.3 C 572.2,186.4 586.8,180.9 594.3,177.4 C 601.8,173.9 626.6,160.1 634.0,156.6 C 641.4,153.0 656.9,147.9 661.4,145.4 C 665.9,142.8 676.1,134.6 674.7,133.6 C 673.3,132.7 653.9,136.1 648.4,136.3 C 642.9,136.6 630.3,135.7 624.7,136.2 C 619.1,136.7 602.8,137.9 597.4,141.2 C 592.0,144.5 582.4,160.3 575.4,166.1 C 568.4,172.0 543.1,189.5 534.2,194.7 C 525.3,199.9 502.3,209.0 494.5,213.2 C 486.8,217.5 471.8,228.8 463.5,233.6 C 455.2,238.4 428.9,254.4 418.9,257.1 C 409.0,259.9 383.5,258.8 372.7,258.7 C 362.0,258.6 333.0,257.4 321.5,256.1 C 310.0,254.8 274.9,245.6 268.2,247.1 C 261.4,248.5 267.8,269.2 259.8,269.4 C 251.8,269.5 202.4,250.4 195.4,248.0" />
      <path class="fig-route-em" d="M 674.7,133.6 C 674.5,134.5 674.8,139.5 673.3,141.5 C 671.7,143.5 662.8,149.5 660.5,151.8 C 658.1,154.0 652.9,160.9 652.0,162.1" />

      <circle class="fig-box" cx="317.9" cy="300.2" r="3.5" />
      <circle class="fig-dot" cx="317.9" cy="300.2" r="1.6" />
      <circle class="fig-box" cx="406.5" cy="337.4" r="3.5" />
      <circle class="fig-dot" cx="406.5" cy="337.4" r="1.6" />
      <circle class="fig-box" cx="415.3" cy="326.3" r="3.5" />
      <circle class="fig-dot" cx="415.3" cy="326.3" r="1.6" />
      <circle class="fig-box" cx="426.3" cy="293.1" r="3.5" />
      <circle class="fig-dot" cx="426.3" cy="293.1" r="1.6" />

      <circle class="fig-box" cx="191.0" cy="88.8" r="3.5" />
      <circle class="fig-dot" cx="191.0" cy="88.8" r="1.6" />
      <text class="fig-s" x="182.0" y="91.8" text-anchor="end">Portland</text>
      <circle class="fig-box" cx="196.9" cy="173.0" r="3.5" />
      <circle class="fig-dot" cx="196.9" cy="173.0" r="1.6" />
      <text class="fig-s" x="187.9" y="176.0" text-anchor="end">Reno</text>
      <circle class="fig-box" cx="296.1" cy="135.5" r="3.5" />
      <circle class="fig-dot" cx="296.1" cy="135.5" r="1.6" />
      <text class="fig-s" x="296.1" y="124.5" text-anchor="middle">Grand Teton</text>
      <circle class="fig-box" cx="366.7" cy="139.8" r="3.5" />
      <circle class="fig-dot" cx="366.7" cy="139.8" r="1.6" />
      <text class="fig-s" x="366.7" y="128.8" text-anchor="middle">Rapid City</text>
      <circle class="fig-box" cx="460.7" cy="130.1" r="3.5" />
      <circle class="fig-dot" cx="460.7" cy="130.1" r="1.6" />
      <text class="fig-s" x="469.7" y="133.1" text-anchor="start">Minneapolis</text>
      <circle class="fig-box" cx="344.7" cy="195.9" r="3.5" />
      <circle class="fig-dot" cx="344.7" cy="195.9" r="1.6" />
      <text class="fig-s" x="344.7" y="211.9" text-anchor="middle">Denver</text>
      <circle class="fig-box" cx="296.8" cy="206.0" r="3.5" />
      <circle class="fig-dot" cx="296.8" cy="206.0" r="1.6" />
      <text class="fig-s" x="296.8" y="222.0" text-anchor="middle">Moab</text>
      <circle class="fig-box" cx="343.9" cy="294.0" r="3.5" />
      <circle class="fig-dot" cx="343.9" cy="294.0" r="1.6" />
      <text class="fig-s" x="343.9" y="310.0" text-anchor="middle">Carlsbad</text>
      <circle class="fig-box" cx="494.5" cy="213.2" r="3.5" />
      <circle class="fig-dot" cx="494.5" cy="213.2" r="1.6" />
      <text class="fig-s" x="485.5" y="209.2" text-anchor="end">St. Louis</text>
      <circle class="fig-box" cx="597.4" cy="141.2" r="3.5" />
      <circle class="fig-dot" cx="597.4" cy="141.2" r="1.6" />
      <text class="fig-s" x="597.4" y="130.2" text-anchor="middle">Niagara Falls</text>
      <circle class="fig-box" cx="594.3" cy="177.4" r="3.5" />
      <circle class="fig-dot" cx="594.3" cy="177.4" r="1.6" />
      <text class="fig-s" x="594.3" y="193.4" text-anchor="middle">Pittsburgh</text>
      <circle class="fig-box" cx="652.0" cy="162.1" r="3.5" />
      <circle class="fig-dot" cx="652.0" cy="162.1" r="1.6" />
      <text class="fig-s" x="661.0" y="172.1" text-anchor="start">New York</text>

      <circle class="fig-box" cx="195.4" cy="248.0" r="7.0" />
      <circle class="fig-dot" cx="195.4" cy="248.0" r="3.15" />
      <text class="fig-t" x="181.4" y="245.0" text-anchor="end">LOS ANGELES</text>
      <text class="fig-s" x="181.4" y="259.0" text-anchor="end">start and finish</text>

      <circle class="fig-box" cx="201.7" cy="63.2" r="5.5" />
      <circle class="fig-dot" cx="201.7" cy="63.2" r="2.48" />
      <text class="fig-t" x="215.7" y="60.2" text-anchor="start">SEATTLE</text>
      <text class="fig-s" x="215.7" y="74.2" text-anchor="start">2023 · RAV4</text>

      <path class="fig-map" d="M442.4,338.7 V354.2" />
      <circle class="fig-box" cx="442.4" cy="333.2" r="5.5" />
      <circle class="fig-dot" cx="442.4" cy="333.2" r="2.48" />
      <text class="fig-t" x="442.4" y="364.2" text-anchor="start">TEXAS</text>
      <text class="fig-s" x="442.4" y="378.2" text-anchor="start">2024 · RAV4 · a day in each city</text>

      <circle class="fig-box" cx="517.0" cy="168.0" r="5.5" />
      <circle class="fig-dot" cx="517.0" cy="168.0" r="2.48" />
      <text class="fig-t" x="531.0" y="165.0" text-anchor="start">CHICAGO</text>
      <text class="fig-s" x="531.0" y="179.0" text-anchor="start">2025 · RAV4</text>

      <circle class="fig-box" cx="674.7" cy="133.6" r="5.5" />
      <circle class="fig-dot-em" cx="674.7" cy="133.6" r="2.48" />
      <text class="fig-t-em" x="688.7" y="130.6" text-anchor="start">BOSTON</text>
      <text class="fig-s" x="688.7" y="144.6" text-anchor="start">2026 · Model 3 on FSD</text>

    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the map sideways →</p>
  </div>

  <p class="about-figure-caption">
    The lines follow the roads we actually took, not great circles, so each one
    closes into a loop at Los Angeles. Where a leg really was driven twice the
    line simply doubles over itself. Every stop is listed below.
  </p>

{% include outside/trips.liquid part="rows" %}

{% include outside/trips.liquid part="data" %}

</section>

<section class="about-section outside-section" id="places">
  <h2 class="about-section-title">Places</h2>

  <p class="lst-desc">
    A small clay model of somewhere I have been, built from a photo I took
    there. Drag one sideways to walk round it; the name opens the map.
  </p>

{% include places.liquid %}

</section>
