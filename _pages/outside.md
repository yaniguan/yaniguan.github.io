---
layout: plain
permalink: /outside/
title: Outside the lab
eyebrow: Yani Guan
eyebrow_url: /
description: >
  Three things I do when I am not in front of a terminal: carry a camera,
  drive a very long way to somewhere empty, and read.
nav: false
---

{%- comment -%}
Both drawings reuse the landing page's diagram vocabulary (.about-figure plus
the fig-\* classes in \_sass/\_about.scss). Add a row or a shape, not a new layout.
{%- endcomment -%}

<div class="outside-lead">
  {%
    include figure.liquid path="assets/img/whitesands.jpeg" class="img-fluid"
    alt="White Sands, New Mexico" caption="White Sands, New Mexico." sizes="(min-width: 768px) 720px, 95vw"
  %}
</div>

<section class="about-section">
  <h2 class="about-section-title">Cameras</h2>

  <p class="lst-desc">
    Two Canon bodies, three fast EF zooms, and two DJI things for the frames a
    tripod cannot reach. Same instinct as the research, honestly: go look at the
    thing directly instead of reading someone else's summary of it.
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

<section class="about-section">
  <h2 class="about-section-title">Road trips</h2>

  <p class="lst-desc">
    Four cross-country runs, every one of them out of Los Angeles and back — no
    one-way flights, no shipped car. Same three people and the same dog each time.
    Three of the four came home a different way than they went out.
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

  <figure class="about-figure">
    <svg viewBox="0 0 900 420" role="img" aria-labelledby="map-title map-desc">
      <title id="map-title">Four road trips out of Los Angeles</title>
      <desc id="map-desc">
        A map of the lower 48 with four routes out of Los Angeles. Three are loops: up
        the coast to Seattle in 2023 and back inland through Reno; out to a circuit of
        the big Texas cities in 2024 and back on I-40; north through the Black Hills and
        Nebraska to Chicago in 2025 and back over the Rockies through Denver. The fourth,
        across to Boston in 2026, went out and back on the same road.
      </desc>

      <path class="fig-map" d="M 198.8,51.5 C 197.1,54.4 184.9,69.9 182.3,75.4 C 179.6,81.0 172.0,106.5 169.8,113.2 C 167.6,119.9 158.1,143.2 157.6,149.9 C 157.1,156.7 163.0,180.4 164.3,188.1 C 165.6,195.9 169.2,230.2 172.0,236.0 C 174.7,241.8 191.9,249.5 194.7,252.7 C 197.5,255.8 199.8,269.1 202.9,271.0 C 206.0,272.9 223.7,271.3 229.5,273.9 C 235.2,276.5 260.7,296.8 266.9,299.5 C 273.0,302.2 293.5,304.0 298.1,304.0 C 302.7,304.0 312.8,296.4 317.8,299.7 C 322.9,303.0 349.1,337.5 354.1,340.3 C 359.1,343.1 369.7,329.1 373.2,331.0 C 376.8,332.8 389.9,356.2 394.0,361.0 C 398.0,365.8 415.9,384.2 418.4,384.0 C 420.8,383.8 418.8,362.7 421.1,359.1 C 423.3,355.4 439.7,345.6 443.3,343.3 C 446.8,341.0 456.0,334.1 460.5,333.8 C 464.9,333.4 488.0,338.8 493.0,339.1 C 498.0,339.5 513.0,339.3 516.0,337.7 C 519.0,336.0 522.2,322.3 526.2,320.9 C 530.3,319.6 556.7,322.9 560.8,322.8 C 565.0,322.7 569.6,319.2 572.0,320.1 C 574.5,321.0 586.0,330.4 587.7,332.7 C 589.3,335.0 589.6,343.0 590.6,345.6 C 591.7,348.2 597.5,359.4 598.9,361.7 C 600.3,364.0 604.9,369.6 606.4,371.2 C 607.8,372.8 613.4,378.7 614.9,379.2 C 616.5,379.6 622.4,378.7 623.1,376.5 C 623.8,374.4 624.0,358.9 623.2,355.2 C 622.4,351.5 615.8,339.3 613.9,335.4 C 612.0,331.5 603.0,316.0 602.0,311.8 C 601.0,307.7 601.3,292.9 602.9,288.8 C 604.6,284.8 618.0,269.9 620.5,266.9 C 623.0,263.9 627.6,258.2 630.6,255.6 C 633.5,252.9 652.1,240.9 653.3,237.3 C 654.4,233.6 643.5,218.8 643.0,214.9 C 642.5,210.9 647.0,198.1 647.8,193.3 C 648.7,188.6 649.4,166.6 652.1,162.2 C 654.8,157.8 675.8,146.7 678.3,144.6 C 680.7,142.4 680.0,140.5 679.7,138.6 C 679.4,136.8 673.8,126.3 674.6,123.5 C 675.3,120.7 685.4,110.3 687.9,107.3 C 690.4,104.3 701.6,92.8 702.4,90.4 C 703.3,88.0 699.1,83.4 697.5,80.9 C 695.8,78.3 686.1,63.0 683.9,61.6 C 681.7,60.1 674.1,62.6 672.7,64.9 C 671.3,67.2 669.4,83.4 668.4,86.7 C 667.4,89.9 664.9,98.9 661.6,100.8 C 658.4,102.7 636.5,105.9 632.6,108.0 C 628.7,110.0 621.9,120.5 618.6,123.2 C 615.2,126.0 600.1,136.4 595.3,138.5 C 590.6,140.7 568.8,149.3 565.6,147.4 C 562.5,145.5 562.6,121.2 560.4,117.3 C 558.1,113.4 545.8,106.8 540.9,103.9 C 536.0,101.0 511.0,86.4 506.3,85.0 C 501.6,83.5 494.4,88.3 488.6,87.6 C 482.9,86.9 468.1,81.4 442.2,77.5 C 416.3,73.5 222.9,46.3 201.0,44.0 C 179.1,41.7 200.5,48.7 198.8,51.5 Z" />

      <path class="fig-route" d="M 195.4,248.0 C 193.0,246.6 186.1,245.8 181.1,239.4 C 176.2,233.1 168.2,215.5 165.7,209.8 C 163.2,204.1 166.1,208.8 166.0,205.3 C 165.8,201.8 166.4,195.4 165.0,188.7 C 163.5,182.0 158.1,172.3 157.2,165.0 C 156.3,157.7 158.5,151.0 159.5,144.9 C 160.5,138.9 161.7,134.1 163.3,128.6 C 164.8,123.1 166.9,117.4 169.0,112.0 C 171.0,106.6 173.0,102.2 175.4,96.5 C 177.8,90.7 180.1,81.9 183.3,77.3 C 186.5,72.7 191.6,71.3 194.6,68.9 C 197.7,66.6 198.4,61.3 201.7,63.2 C 204.9,65.1 209.9,74.8 214.0,80.3 C 218.1,85.8 225.8,89.1 226.3,96.1 C 226.9,103.1 221.7,115.5 217.4,122.3 C 213.1,129.2 204.9,131.1 200.6,137.3 C 196.4,143.5 192.4,153.4 191.7,159.4 C 191.1,165.3 194.9,165.5 196.9,173.0 C 199.0,180.6 202.6,197.6 204.0,204.6 C 205.3,211.7 205.9,210.3 205.1,215.4 C 204.3,220.4 200.8,229.8 199.2,235.2 C 197.6,240.7 196.0,245.9 195.4,248.0" />
      <path class="fig-route" d="M 195.4,248.0 C 206.1,251.6 247.5,262.8 259.8,269.4 C 272.1,275.9 259.4,282.3 269.1,287.5 C 278.8,292.6 303.2,295.6 317.9,300.2 C 332.6,304.9 342.6,309.3 357.3,315.4 C 372.1,321.6 396.8,335.6 406.5,337.4 C 416.1,339.2 409.3,327.0 415.3,326.3 C 421.3,325.6 440.9,338.8 442.4,333.2 C 444.0,327.7 436.3,305.5 424.7,293.1 C 413.1,280.7 389.9,264.9 372.7,258.7 C 355.5,252.5 338.9,258.1 321.5,256.1 C 304.1,254.2 281.3,249.3 268.2,247.1 C 255.0,244.9 254.9,242.5 242.8,242.7 C 230.7,242.8 203.3,247.1 195.4,248.0" />
      <path class="fig-route" d="M 195.4,248.0 C 201.8,244.6 223.3,233.6 234.0,227.6 C 244.6,221.6 251.8,220.9 259.2,211.9 C 266.5,202.9 270.2,181.0 278.0,173.4 C 285.7,165.9 296.1,169.8 305.7,166.5 C 315.4,163.2 325.8,157.8 335.9,153.3 C 346.1,148.9 355.5,141.1 366.7,139.8 C 378.0,138.4 393.3,143.8 403.5,145.4 C 413.8,147.0 422.8,143.6 428.2,149.4 C 433.6,155.1 430.7,175.6 435.8,179.9 C 440.9,184.2 445.2,177.1 458.8,175.1 C 472.3,173.1 510.2,164.4 517.0,168.0 C 523.7,171.7 504.9,192.0 499.1,197.3 C 493.3,202.5 490.2,197.6 482.0,199.5 C 473.7,201.4 472.5,209.2 449.6,208.7 C 426.7,208.1 368.3,197.2 344.7,195.9 C 321.0,194.6 320.9,200.1 307.8,200.9 C 294.7,201.7 274.3,198.8 266.2,200.7 C 258.1,202.5 264.5,207.4 259.2,211.9 C 253.8,216.4 244.6,221.6 234.0,227.6 C 223.3,233.6 201.8,244.6 195.4,248.0" />
      <path class="fig-route-em" d="M 195.4,248.0 C 201.8,244.6 217.9,235.7 234.0,227.6 C 250.0,219.5 273.0,204.8 291.4,199.5 C 309.9,194.2 318.3,194.4 344.7,195.9 C 371.0,197.5 424.6,205.8 449.6,208.7 C 474.6,211.5 480.4,215.6 494.5,213.2 C 508.6,210.9 522.3,198.8 534.2,194.7 C 546.0,190.5 555.5,191.2 565.6,188.3 C 575.6,185.5 584.3,179.8 594.3,177.4 C 604.2,175.0 615.6,176.5 625.3,174.0 C 634.9,171.4 643.8,168.8 652.1,162.0 C 660.3,155.3 670.9,138.4 674.7,133.6" />

      <circle class="fig-box" cx="317.9" cy="300.2" r="3.5" />
      <circle class="fig-dot" cx="317.9" cy="300.2" r="1.6" />
      <circle class="fig-box" cx="406.5" cy="337.4" r="3.5" />
      <circle class="fig-dot" cx="406.5" cy="337.4" r="1.6" />
      <circle class="fig-box" cx="415.3" cy="326.3" r="3.5" />
      <circle class="fig-dot" cx="415.3" cy="326.3" r="1.6" />
      <circle class="fig-box" cx="424.7" cy="293.1" r="3.5" />
      <circle class="fig-dot" cx="424.7" cy="293.1" r="1.6" />

      <circle class="fig-box" cx="196.9" cy="173.0" r="3.5" />
      <circle class="fig-dot" cx="196.9" cy="173.0" r="1.6" />
      <text class="fig-s" x="205.9" y="176.0" text-anchor="start">Reno</text>
      <circle class="fig-box" cx="366.7" cy="139.8" r="3.5" />
      <circle class="fig-dot" cx="366.7" cy="139.8" r="1.6" />
      <text class="fig-s" x="366.7" y="128.8" text-anchor="middle">Rapid City</text>
      <circle class="fig-box" cx="435.8" cy="179.9" r="3.5" />
      <circle class="fig-dot" cx="435.8" cy="179.9" r="1.6" />
      <text class="fig-s" x="435.8" y="196.9" text-anchor="middle">Omaha</text>
      <circle class="fig-box" cx="344.7" cy="195.9" r="3.5" />
      <circle class="fig-dot" cx="344.7" cy="195.9" r="1.6" />
      <text class="fig-s" x="344.7" y="184.9" text-anchor="middle">Denver</text>

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

  <p class="about-figure-caption">
    The lines follow the roads we actually took, not great circles. Three of them
    close into loops because the way home was not the way out; Boston is the one
    that retraced itself.
  </p>

  <div class="about-rows">

    <div class="about-row">
      <div class="about-row-date">2023</div>
      <div class="about-row-val">
        <div class="about-role"><strong>Los Angeles → Seattle</strong><span>Toyota RAV4</span></div>
        Up on Highway 1 and US-101, on the water almost the whole way — Big Sur,
        San Francisco, the Oregon headlands. Home the other side of the mountains
        on US-395, through Reno and down the eastern Sierra.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-date">2024</div>
      <div class="about-row-val">
        <div class="about-role"><strong>Los Angeles → Texas</strong><span>Toyota RAV4</span></div>
        I-10 out through Phoenix, Tucson and the very long empty middle of West
        Texas, then a circuit of the big cities — El Paso, San Antonio, Austin,
        Houston, Dallas–Fort Worth — a day in each, and home the northern way on
        I-40 through Amarillo, Albuquerque and Flagstaff.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-date">2025</div>
      <div class="about-row-val">
        <div class="about-role"><strong>Los Angeles → Chicago</strong><span>Toyota RAV4</span></div>
        The northern way out: Salt Lake City, across Wyoming, the Black Hills and
        the Badlands in South Dakota, then down into Nebraska and along I-80 into
        Chicago. Back through Kansas City and over the Rockies on I-70, with Denver
        on the way. The RAV4's last long one.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-date">2026</div>
      <div class="about-row-val">
        <div class="about-role"><strong>Los Angeles → Boston</strong><span>Tesla Model 3</span></div>
        Coast to coast on the I-70 corridor — Las Vegas, Denver, St. Louis,
        Pittsburgh — and the one trip we drove out and back on the same road,
        with FSD doing most of it. Charging stops set the rhythm of the day in a
        way gas stations never did.
      </div>
    </div>

  </div>
</section>

<section class="about-section">
  <h2 class="about-section-title">Reading</h2>

  <p class="lst-desc">
    Mostly Shakespeare, and mostly the plays — I have worked through most of the
    thirty-six collected in the First Folio. The whole shelf now travels as one
    front-lit slab, which is the least romantic and by some distance the most
    practical reading setup I have owned.
  </p>

  <figure class="about-figure">
    <svg viewBox="0 0 900 240" role="img" aria-labelledby="read-title read-desc">
      <title id="read-title">A Shakespeare shelf and the Kindle it is read on</title>
      <desc id="read-desc">
        The thirty-six plays of the 1623 First Folio drawn as book spines in the
        collection’s own three sections — fourteen comedies, ten histories, twelve
        tragedies — beside a front-lit Kindle.
      </desc>

      <text class="fig-h" x="10" y="20">THE FIRST FOLIO</text>
      <rect class="fig-panel" x="10" y="30" width="700" height="190" rx="6" />

      <g>
        <rect class="fig-line" x="38.0" y="86.0" width="13" height="92" rx="2" />
        <path class="fig-line-soft" d="M39.5,124.6 H49.5" />
        <rect class="fig-line" x="54.0" y="100.0" width="11" height="78" rx="2" />
        <path class="fig-line-soft" d="M55.5,125.0 H63.5" />
        <path class="fig-line-soft" d="M55.5,153.0 H63.5" />
        <rect class="fig-line" x="68.0" y="92.0" width="14" height="86" rx="2" />
        <path class="fig-line-soft" d="M69.5,123.8 H80.5" />
        <rect class="fig-line" x="85.0" y="82.0" width="12" height="96" rx="2" />
        <path class="fig-line-soft" d="M86.5,108.9 H95.5" />
        <rect class="fig-line" x="100.0" y="96.0" width="15" height="82" rx="2" />
        <path class="fig-line-soft" d="M101.5,132.9 H113.5" />
        <path class="fig-line-soft" d="M101.5,155.0 H113.5" />
        <rect class="fig-line" x="118.0" y="88.0" width="11" height="90" rx="2" />
        <path class="fig-line-soft" d="M119.5,118.6 H127.5" />
        <rect class="fig-line" x="132.0" y="104.0" width="13" height="74" rx="2" />
        <path class="fig-line-soft" d="M133.5,133.6 H143.5" />
        <path class="fig-line-soft" d="M133.5,155.8 H143.5" />
        <rect class="fig-line" x="148.0" y="90.0" width="12" height="88" rx="2" />
        <path class="fig-line-soft" d="M149.5,116.4 H158.5" />
        <rect class="fig-line" x="163.0" y="84.0" width="14" height="94" rx="2" />
        <path class="fig-line-soft" d="M164.5,124.4 H175.5" />
        <rect class="fig-line" x="180.0" y="98.0" width="11" height="80" rx="2" />
        <path class="fig-line-soft" d="M181.5,126.0 H189.5" />
        <path class="fig-line-soft" d="M181.5,150.8 H189.5" />
        <rect class="fig-line" x="194.0" y="92.0" width="13" height="86" rx="2" />
        <path class="fig-line-soft" d="M195.5,114.4 H205.5" />
        <rect class="fig-line" x="210.0" y="102.0" width="15" height="76" rx="2" />
        <path class="fig-line-soft" d="M211.5,131.6 H223.5" />
        <rect class="fig-line" x="228.0" y="88.0" width="12" height="90" rx="2" />
        <path class="fig-line-soft" d="M229.5,125.8 H238.5" />
        <rect class="fig-line" x="243.0" y="94.0" width="14" height="84" rx="2" />
        <path class="fig-line-soft" d="M244.5,120.9 H255.5" />
        <path class="fig-line-soft" d="M244.5,151.1 H255.5" />
      </g>
      <path class="fig-line" d="M32.0,178.5 H263.0" />
      <text class="fig-t" x="147.5" y="198" text-anchor="middle">Comedies</text>
      <text class="fig-s" x="147.5" y="212" text-anchor="middle">14 plays</text>

      <g>
        <rect class="fig-line" x="295.0" y="90.0" width="12" height="88" rx="2" />
        <path class="fig-line-soft" d="M296.5,122.6 H305.5" />
        <rect class="fig-line" x="310.0" y="84.0" width="14" height="94" rx="2" />
        <path class="fig-line-soft" d="M311.5,110.3 H322.5" />
        <rect class="fig-line" x="327.0" y="99.0" width="11" height="79" rx="2" />
        <path class="fig-line-soft" d="M328.5,134.6 H336.5" />
        <path class="fig-line-soft" d="M328.5,155.9 H336.5" />
        <rect class="fig-line" x="341.0" y="93.0" width="13" height="85" rx="2" />
        <path class="fig-line-soft" d="M342.5,121.9 H352.5" />
        <rect class="fig-line" x="357.0" y="86.0" width="15" height="92" rx="2" />
        <path class="fig-line-soft" d="M358.5,122.8 H370.5" />
        <path class="fig-line-soft" d="M358.5,150.4 H370.5" />
        <rect class="fig-line" x="375.0" y="101.0" width="12" height="77" rx="2" />
        <path class="fig-line-soft" d="M376.5,124.1 H385.5" />
        <rect class="fig-line" x="390.0" y="91.0" width="11" height="87" rx="2" />
        <path class="fig-line-soft" d="M391.5,128.4 H399.5" />
        <rect class="fig-line" x="404.0" y="83.0" width="14" height="95" rx="2" />
        <path class="fig-line-soft" d="M405.5,116.2 H416.5" />
        <path class="fig-line-soft" d="M405.5,145.7 H416.5" />
        <rect class="fig-line" x="421.0" y="97.0" width="13" height="81" rx="2" />
        <path class="fig-line-soft" d="M422.5,118.1 H432.5" />
        <rect class="fig-line" x="437.0" y="89.0" width="12" height="89" rx="2" />
        <path class="fig-line-soft" d="M438.5,123.7 H447.5" />
      </g>
      <path class="fig-line" d="M289.0,178.5 H455.0" />
      <text class="fig-t" x="372.0" y="198" text-anchor="middle">Histories</text>
      <text class="fig-s" x="372.0" y="212" text-anchor="middle">10 plays</text>

      <g>
        <rect class="fig-line" x="488.0" y="103.0" width="14" height="75" rx="2" />
        <path class="fig-line-soft" d="M489.5,134.5 H500.5" />
        <rect class="fig-line" x="505.0" y="87.0" width="11" height="91" rx="2" />
        <path class="fig-line-soft" d="M506.5,116.1 H514.5" />
        <path class="fig-line-soft" d="M506.5,148.9 H514.5" />
        <rect class="fig-line" x="519.0" y="95.0" width="13" height="83" rx="2" />
        <path class="fig-line-soft" d="M520.5,125.7 H530.5" />
        <rect class="fig-line" x="535.0" y="85.0" width="12" height="93" rx="2" />
        <path class="fig-line-soft" d="M536.5,111.0 H545.5" />
        <rect class="fig-line" x="550.0" y="100.0" width="15" height="78" rx="2" />
        <path class="fig-line-soft" d="M551.5,135.1 H563.5" />
        <path class="fig-line-soft" d="M551.5,156.2 H563.5" />
        <rect class="fig-line" x="568.0" y="92.0" width="11" height="86" rx="2" />
        <path class="fig-line-soft" d="M569.5,121.2 H577.5" />
        <rect class="fig-line" x="582.0" y="82.0" width="14" height="96" rx="2" />
        <path class="fig-line-soft" d="M583.5,120.4 H594.5" />
        <path class="fig-line-soft" d="M583.5,149.2 H594.5" />
        <rect class="fig-line" x="599.0" y="98.0" width="12" height="80" rx="2" />
        <path class="fig-line-soft" d="M600.5,122.0 H609.5" />
        <rect class="fig-line" x="614.0" y="90.0" width="13" height="88" rx="2" />
        <path class="fig-line-soft" d="M615.5,127.8 H625.5" />
        <rect class="fig-line" x="630.0" y="104.0" width="14" height="74" rx="2" />
        <path class="fig-line-soft" d="M631.5,129.9 H642.5" />
        <path class="fig-line-soft" d="M631.5,152.8 H642.5" />
        <rect class="fig-line" x="647.0" y="88.0" width="11" height="90" rx="2" />
        <path class="fig-line-soft" d="M648.5,111.4 H656.5" />
        <rect class="fig-line" x="661.0" y="94.0" width="13" height="84" rx="2" />
        <path class="fig-line-soft" d="M662.5,126.8 H672.5" />
      </g>
      <path class="fig-line" d="M482.0,178.5 H680.0" />
      <text class="fig-t" x="581.0" y="198" text-anchor="middle">Tragedies</text>
      <text class="fig-s" x="581.0" y="212" text-anchor="middle">12 plays</text>

      <text class="fig-h" x="724" y="20">READING NOW</text>
      <rect class="fig-panel" x="724" y="30" width="166" height="190" rx="6" />
      <g transform="translate(770,56)">
        <rect class="fig-line" x="0" y="0" width="74" height="106" rx="7" />
        <rect class="fig-line-soft" x="7" y="8" width="60" height="82" rx="2" />
        <path class="fig-line-soft" d="M13,20 H61" />
        <path class="fig-line-soft" d="M13,30 H65" />
        <path class="fig-line-soft" d="M13,40 H57" />
        <path class="fig-line-soft" d="M13,50 H65" />
        <path class="fig-line-soft" d="M13,60 H51" />
        <circle class="fig-line-soft" cx="37" cy="98" r="2.5" />
      </g>
      <text class="fig-t" x="807" y="198" text-anchor="middle">Kindle Paperwhite</text>
      <text class="fig-s" x="807" y="212" text-anchor="middle">plain front-lit e-ink</text>
    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the shelf sideways →</p>

  <p class="about-figure-caption">
    The three sections are the First Folio’s own: the 1623 collection sorts its
    thirty-six plays into fourteen comedies, ten histories and twelve tragedies.
  </p>
</section>
