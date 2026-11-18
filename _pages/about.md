---
layout: about
title: About
permalink: /
subtitle: Ph.D., UCLA, December 2026 · Authorized to work in the U.S. (OPT); will not require visa sponsorship now or in the future
tagline: >
  I build symmetry-aware neural networks for chemistry — E(3)-equivariant models
  over atoms and trajectories, steerable encoders over molecule images, language
  models that read 3D directions — along with the multi-scale simulations that
  feed them and the GPU work that makes them trainable.

profile:
  align: right
  image: profile.jpg
  image_circular: false
  more_info: >
    <a href="/outside/">Outside the lab</a> — cameras, Shakespeare, long drives.

selected_papers: true
social: false

announcements:
  enabled: true
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
---

<aside class="notes-card notes-card--lead">
  <a class="notes-card-link" href="{{ '/notes/' | relative_url }}">
    <span class="notes-card-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M5 19.2 L6.6 14.4 L16.4 4.6 a2 2 0 0 1 2.8 2.8 L9.4 17.2 Z" />
        <path d="M14.2 6.8 L17 9.6" />
        <path d="M5 19.2 L9.4 17.2" />
      </svg>
    </span>
    <span class="notes-card-body">
      <span class="notes-card-title">Notes</span>
      <span class="notes-card-desc">
        Short write-ups on LLM pretraining, post-training and alignment, vision–language
        models, and what building VERDICT taught me about SFT, DPO and LoRA. Newest: a
        four-part series on my SES summer — including a DPO run with 90–97% preference
        accuracy and 0–2% exact match.
      </span>
    </span>
    <span class="notes-card-cta">Read</span>
  </a>
</aside>

<section class="about-section">
  <h2 class="about-section-title">Research</h2>

  <figure class="about-figure">
    <svg viewBox="0 0 972 362" role="img" aria-labelledby="fig-title fig-desc">
      <title id="fig-title">How the work fits together</title>
      <desc id="fig-desc">
        Chemistry reaches a model in three forms: papers, structure drawings and 3D atoms
        from multi-scale simulation. Each goes through an encoder matched to its symmetry:
        a language model for text, SE(2)-equivariant encoders for drawings, E(3)-equivariant
        networks for atoms. Irreps-to-text attention and contrastive alignment join them in
        one latent space with retrieval over all three; post-training turns that into a
        co-scientist that proposes the next simulation. GPU kernel and precision work sits
        under every stage.
      </desc>
      <defs>
        <marker id="fig-arrow" viewBox="0 0 8 7" refX="6.4" refY="3" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0.4,0.5 L6.4,3 L0.4,5.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </marker>
      </defs>

      <!-- Column A: where the chemistry is -->
      <text class="fig-h" x="10" y="22">DATA</text>
      <rect class="fig-panel" x="10" y="32" width="196" height="214" rx="6" />

      <rect data-part="ears" class="fig-box" x="22" y="48" width="172" height="44" rx="4" />
      <text class="fig-t" x="32" y="66">Papers</text>
      <text class="fig-s" x="32" y="81">methods, results, claims</text>

      <rect data-part="eyes" class="fig-box" x="22" y="118" width="172" height="44" rx="4" />
      <text class="fig-t" x="32" y="136">Structure drawings</text>
      <text class="fig-s" x="32" y="151">figures in the literature</text>

      <rect data-part="first" class="fig-box" x="22" y="188" width="172" height="44" rx="4" />
      <text class="fig-t" x="32" y="206">Multi-scale simulation</text>
      <text class="fig-s" x="32" y="221">DFT · MD · kMC · P2D</text>

      <path class="fig-line" d="M200,70 H242" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M200,140 H242" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M200,210 H242" marker-end="url(#fig-arrow)" />

      <!-- Column B: one encoder per form, matched to its symmetry -->
      <text class="fig-h" x="236" y="22">ENCODER · MATCHED SYMMETRY</text>
      <rect class="fig-panel" x="236" y="32" width="260" height="214" rx="6" />

      <rect data-part="ears" class="fig-box" x="248" y="48" width="236" height="44" rx="4" />
      <text class="fig-t" x="258" y="66">Language model</text>
      <text class="fig-s" x="258" y="81">tokens · no geometric group</text>

      <rect data-part="eyes" class="fig-box" x="248" y="118" width="236" height="44" rx="4" />
      <text class="fig-t" x="258" y="136">SE(2)-equivariant encoders</text>
      <text class="fig-s" x="258" y="151">C<tspan baseline-shift="sub" font-size="7">N</tspan> steerable CNN · Ouroboros · VERDICT</text>

      <rect data-part="physics" class="fig-box" x="248" y="188" width="236" height="44" rx="4" />
      <text class="fig-t" x="258" y="206">E(3)-equivariant networks</text>
      <text class="fig-s" x="258" y="221">polarizable FF · WignerFlow · world model</text>

      <!-- Ouroboros: a recognised drawing becomes 3D atoms -->
      <path class="fig-line-soft" d="M462,162 V184" marker-end="url(#fig-arrow)" />
      <text class="fig-s" x="454" y="178" text-anchor="end">SMILES → ETKDG → MACE-OFF</text>

      <!-- B to C: every encoder feeds the alignment column -->
      <path class="fig-line-soft" d="M490,70 H516 M490,140 H516 M490,210 H516 M516,70 V210" />
      <path class="fig-line" d="M516,74 H540" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M516,140 H540" marker-end="url(#fig-arrow)" />

      <!-- Column C: alignment -->
      <text class="fig-h" x="532" y="22">ALIGNMENT</text>
      <rect class="fig-panel" x="532" y="32" width="170" height="214" rx="6" />

      <rect data-part="brain" class="fig-box" x="544" y="52" width="146" height="44" rx="4" />
      <text class="fig-t" x="554" y="70">Irreps-to-text</text>
      <text class="fig-s" x="554" y="85">YLM · text queries l ≥ 1</text>

      <rect class="fig-box" x="544" y="118" width="146" height="44" rx="4" />
      <text class="fig-t" x="554" y="136">Contrastive alignment</text>
      <text class="fig-s" x="554" y="151">one latent space</text>

      <rect data-part="brain" class="fig-box" x="544" y="188" width="146" height="44" rx="4" />
      <text class="fig-t" x="554" y="206">Multimodal RAG</text>
      <text class="fig-s" x="554" y="221">retrieval over all three</text>

      <path class="fig-line" d="M617,96 V114" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M617,162 V184" marker-end="url(#fig-arrow)" />

      <path class="fig-line" d="M696,140 H730" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M696,210 H730" marker-end="url(#fig-arrow)" />

      <!-- Column D: post-training and agent -->
      <text class="fig-h" x="722" y="22">POST-TRAINING &amp; AGENT</text>
      <rect class="fig-panel" x="722" y="32" width="238" height="214" rx="6" />

      <rect class="fig-box" x="734" y="48" width="214" height="44" rx="4" />
      <text class="fig-t" x="744" y="66">TASK + TOOL DATA</text>
      <text class="fig-s" x="744" y="81">254,527 rows · leak-safe splits</text>

      <rect class="fig-box" x="734" y="118" width="214" height="44" rx="4" />
      <text class="fig-t" x="744" y="136">LoRA SFT</text>
      <text class="fig-s" x="744" y="151">DPO tested · SFT kept</text>

      <rect data-part="body" class="fig-box-em" x="734" y="188" width="214" height="44" rx="4" />
      <text class="fig-t-em" x="744" y="206">CO-SCIENTIST</text>
      <text class="fig-s" x="744" y="221">DeepSeek Harness · default-deny jobs</text>

      <path class="fig-line" d="M841,92 V114" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M841,162 V184" marker-end="url(#fig-arrow)" />

      <!-- Feedback loop -->
      <path class="fig-line" d="M841,232 V262 Q841,270 833,270 H116 Q108,270 108,262 V236" marker-end="url(#fig-arrow)" />
      <text class="fig-s" x="475" y="287" text-anchor="middle">proposes the next simulation — and submits the jobs that check it</text>

      <!-- Compute: under every stage -->
      <text class="fig-h" x="10" y="310">COMPUTE</text>
      <rect data-part="feet" class="fig-panel" x="10" y="318" width="950" height="36" rx="6" />
      <text class="fig-t" x="24" y="340">GPU</text>
      <text class="fig-s" x="58" y="340">Clebsch–Gordan tensor products · channel-wise (uvu) kernels · cuEquivariance · torch.compile · bf16 / tf32 · A100</text>
    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the diagram sideways →</p>

  <p class="about-figure-caption">
    Chemistry reaches a model as papers, drawings and simulated atoms. Each gets an
    encoder that respects its symmetry: none for text, planar rotations for drawings,
    E(3) for atoms. Alignment puts them in one space. Post-training and a harness turn
    that space into a co-scientist whose proposals go back to simulation as jobs.
    GPU work sits under every stage.
  </p>

  <div class="about-figure-bridge">
    <p class="about-figure-kicker">Vision: a lab agent that understands chemistry</p>
    <p class="about-figure-hint-link">The same systems as parts of one agent. Hover or tap a part to find it in both figures.</p>
  </div>

  <figure class="about-figure">
    <svg class="lab-link" viewBox="0 0 972 492" role="img" aria-labelledby="lab-fig-title lab-fig-desc">
      <title id="lab-fig-title">A lab agent that understands chemistry and biology</title>
      <desc id="lab-fig-desc">
        A line drawing of a robot whose parts map to the work. Filled marks are built;
        hollow marks and dashed cards are planned. Brain: YLM reads text and 3D geometry
        together and recalls papers, structures and simulations from a molecular memory;
        debugging protocol steps and designing experiments are planned. Eyes: Ouroboros OCSR
        turns paper figures into structures, and four models vote to flag errors; spectra,
        gels and a lab camera are planned. Ears, planned: chemistry and biology protocols,
        scientist goals by voice or chat, instrument logs and alarms. Hands, planned: robot
        arm, pipettes and well plates, and liquid-handler scripts. First principles: quantum
        chemistry as ground truth and multiscale models from electrons to cells; distilling
        them into small, fast students is planned. Physics intuition: WignerFlow learns MD
        frame by frame (shown so far on argon), and force fields are gated by past failures;
        simulating each step before running is planned. Body: a bounded harness inspects
        runs, diagnoses failures, prepares jobs, catches repeats and puts a default-deny gate
        on every job. Feet, planned: cloud GPUs only in short bursts and small quantized
        models on the edge.
      </desc>

      <!-- Robot -->
      <path class="fig-line-soft" d="M401,412.5 H569" />
      <path class="fig-route" d="M485,48.5 V66" />
      <g data-part="ears">
      <circle class="fig-box" cx="414" cy="138" r="11" />
      <circle class="fig-route" cx="414" cy="138" r="11" />
      <circle class="fig-route" cx="414" cy="138" r="4" />
      <circle class="fig-box" cx="556" cy="138" r="11" />
      <circle class="fig-route" cx="556" cy="138" r="11" />
      <circle class="fig-route" cx="556" cy="138" r="4" />
      </g>
      <rect class="fig-box" x="469" y="160" width="32" height="22" rx="6" />
      <rect class="fig-route" x="469" y="160" width="32" height="22" rx="6" />
      <rect class="fig-box" x="454" y="312" width="24" height="88.5" rx="12" />
      <rect class="fig-route" x="454" y="312" width="24" height="88.5" rx="12" />
      <rect class="fig-box" x="492" y="312" width="24" height="88.5" rx="12" />
      <rect class="fig-route" x="492" y="312" width="24" height="88.5" rx="12" />
      <g data-part="feet">
      <path class="fig-box" d="M438,406.5 L438,399.5 A8,8 0 0 1 446,391.5 L474,391.5 A8,8 0 0 1 482,399.5 L482,406.5 A3,3 0 0 1 479,409.5 L441,409.5 A3,3 0 0 1 438,406.5 Z" />
      <path class="fig-route" d="M438,406.5 L438,399.5 A8,8 0 0 1 446,391.5 L474,391.5 A8,8 0 0 1 482,399.5 L482,406.5 A3,3 0 0 1 479,409.5 L441,409.5 A3,3 0 0 1 438,406.5 Z" />
      <path class="fig-box" d="M488,406.5 L488,399.5 A8,8 0 0 1 496,391.5 L524,391.5 A8,8 0 0 1 532,399.5 L532,406.5 A3,3 0 0 1 529,409.5 L491,409.5 A3,3 0 0 1 488,406.5 Z" />
      <path class="fig-route" d="M488,406.5 L488,399.5 A8,8 0 0 1 496,391.5 L524,391.5 A8,8 0 0 1 532,399.5 L532,406.5 A3,3 0 0 1 529,409.5 L491,409.5 A3,3 0 0 1 488,406.5 Z" />
      </g>
      <rect class="fig-box" x="439" y="304" width="92" height="24" rx="12" />
      <rect class="fig-route" x="439" y="304" width="92" height="24" rx="12" />
      <g data-part="hands">
      <g transform="rotate(19.29 391 278)">
      <path class="fig-box" d="M388,282 V316 L390.1,330 H391.9 L394,316 V282 Z" />
      <path class="fig-route" d="M388,282 V316 L390.1,330 H391.9 L394,316 V282 Z" />
      <rect class="fig-box" x="381.5" y="287" width="6" height="22" rx="3" />
      <rect class="fig-route" x="381.5" y="287" width="6" height="22" rx="3" />
      <rect class="fig-box" x="394.5" y="287" width="6" height="22" rx="3" />
      <rect class="fig-route" x="394.5" y="287" width="6" height="22" rx="3" />
      </g>
      </g>
      <path class="fig-box" d="M410.98,195.19 L382.98,275.19 A8.5,8.5 0 0 0 399.02,280.81 L427.02,200.81 A8.5,8.5 0 0 0 410.98,195.19 Z" />
      <path class="fig-route" d="M410.98,195.19 L382.98,275.19 A8.5,8.5 0 0 0 399.02,280.81 L427.02,200.81 A8.5,8.5 0 0 0 410.98,195.19 Z" />
      <g transform="rotate(19.29 391 278)">
      <rect class="fig-box" x="380.5" y="283" width="21" height="8" rx="4" />
      <rect class="fig-route" x="380.5" y="283" width="21" height="8" rx="4" />
      </g>
      <g data-part="hands">
      <g transform="rotate(10.78 597 142)">
      <path class="fig-route" d="M591.5,80 V124 A5.5,5.5 0 0 0 602.5,124 V80 M589,80 H605 M591.5,104 H602.5" />
      <rect class="fig-box" x="585" y="111" width="6" height="22" rx="3" />
      <rect class="fig-route" x="585" y="111" width="6" height="22" rx="3" />
      <rect class="fig-box" x="603" y="111" width="6" height="22" rx="3" />
      <rect class="fig-route" x="603" y="111" width="6" height="22" rx="3" />
      </g>
      </g>
      <path class="fig-box" d="M553.94,205.98 L591.94,191.98 A8.5,8.5 0 0 0 597.35,185.59 L605.35,143.59 A8.5,8.5 0 0 0 588.65,140.41 L581.55,177.69 L548.06,190.02 A8.5,8.5 0 0 0 553.94,205.98 Z" />
      <path class="fig-route" d="M553.94,205.98 L591.94,191.98 A8.5,8.5 0 0 0 597.35,185.59 L605.35,143.59 A8.5,8.5 0 0 0 588.65,140.41 L581.55,177.69 L548.06,190.02 A8.5,8.5 0 0 0 553.94,205.98 Z" />
      <g transform="rotate(10.78 597 142)">
      <rect class="fig-box" x="584" y="129" width="26" height="8" rx="4" />
      <rect class="fig-route" x="584" y="129" width="26" height="8" rx="4" />
      </g>
      <path class="fig-box" d="M425.13,296.1 L414.15,202.8 A24,24 0 0 1 437.99,176 L532.01,176 A24,24 0 0 1 555.85,202.8 L544.87,296.1 A18,18 0 0 1 526.99,312 L443.01,312 A18,18 0 0 1 425.13,296.1 Z" />
      <path class="fig-route" d="M425.13,296.1 L414.15,202.8 A24,24 0 0 1 437.99,176 L532.01,176 A24,24 0 0 1 555.85,202.8 L544.87,296.1 A18,18 0 0 1 526.99,312 L443.01,312 A18,18 0 0 1 425.13,296.1 Z" />
      <rect class="fig-box" x="419" y="62" width="132" height="104" rx="26" />
      <rect class="fig-route" x="419" y="62" width="132" height="104" rx="26" />
      <g data-part="brain">
      <path class="fig-route-em" d="M485,83.25 L476.77,78.5 L468.55,83.25 L468.55,92.75 L476.77,97.5 L485,92.75 L493.23,97.5 L501.45,92.75 L501.45,83.25 L493.23,78.5 Z M485,83.25 V92.75" />
      </g>
      <rect class="fig-route" x="437" y="102" width="96" height="28" rx="14" />
      <g data-part="eyes">
      <circle class="fig-route" cx="463" cy="116" r="6.5" />
      <circle class="fig-dot-em" cx="463" cy="116" r="2.4" />
      <circle class="fig-route" cx="507" cy="116" r="6.5" />
      <circle class="fig-dot-em" cx="507" cy="116" r="2.4" />
      </g>
      <g data-part="physics">
      <circle class="fig-route" cx="485" cy="218" r="20" />
      <path class="fig-route-em" d="M473,226 Q482,203.5 491,214.75" stroke-dasharray="0.01 4" />
      <circle class="fig-dot-em" cx="491" cy="214.75" r="3" />
      </g>
      <g data-part="body">
      <path class="fig-route-em" d="M485,269 L494,272.5 V281 C494,286 490,289 485,290.5 C480,289 476,286 476,281 V272.5 Z" />
      </g>
      <g data-part="first">
      <ellipse class="fig-route-em" cx="485" cy="37.5" rx="14" ry="5" transform="rotate(0 485 37.5)" />
      <ellipse class="fig-route-em" cx="485" cy="37.5" rx="14" ry="5" transform="rotate(60 485 37.5)" />
      <ellipse class="fig-route-em" cx="485" cy="37.5" rx="14" ry="5" transform="rotate(-60 485 37.5)" />
      <circle class="fig-dot-em" cx="485" cy="37.5" r="2.6" />
      </g>

      <!-- Leaders -->
      <path class="fig-line" data-part="brain" d="M230,37.5 H288 A8,8 0 0 1 296,45.5 V80 A8,8 0 0 0 304,88 H468.55" opacity="0.6" />
      <path class="fig-line" data-part="eyes" d="M230,158.5 H304 A8,8 0 0 0 312,150.5 V124 A8,8 0 0 1 320,116 H463" opacity="0.6" />
      <path class="fig-line" data-part="ears" d="M230,279.5 H320 A8,8 0 0 0 328,271.5 V146 A8,8 0 0 1 336,138 H403" opacity="0.6" />
      <path class="fig-line" data-part="hands" d="M230,400.5 H304 A8,8 0 0 0 312,392.5 V301.74 A8,8 0 0 1 320,293.74 H375.43" opacity="0.6" />
      <path class="fig-line" data-part="first" d="M740,37.5 H499" opacity="0.6" />
      <path class="fig-line" data-part="physics" d="M740,158.5 H668 A8,8 0 0 0 660,166.5 V206.75 A8,8 0 0 1 652,214.75 H491" opacity="0.6" />
      <path class="fig-line" data-part="body" d="M740,279.5 H494" opacity="0.6" />
      <path class="fig-line" data-part="feet" d="M740,400.5 H532" opacity="0.6" />

      <circle class="fig-dot-em" data-part="brain" cx="468.55" cy="88" r="2.6" />
      <circle class="fig-dot-em" data-part="eyes" cx="463" cy="116" r="2.6" />
      <circle class="fig-box" data-part="ears" cx="403" cy="138" r="2.6" />
      <circle class="fig-box" data-part="hands" cx="375.43" cy="293.74" r="2.6" />
      <circle class="fig-dot-em" data-part="first" cx="499" cy="37.5" r="2.6" />
      <circle class="fig-dot-em" data-part="physics" cx="491" cy="214.75" r="2.6" />
      <circle class="fig-dot-em" data-part="body" cx="494" cy="279.5" r="2.6" />
      <circle class="fig-box" data-part="feet" cx="532" cy="400.5" r="2.6" />

      <rect class="fig-dot" x="10" y="20" width="220" height="105" rx="10" opacity="0.05" />
      <text class="fig-h" x="26" y="41">BRAIN</text>
      <text class="fig-t" x="26" y="58">YLM</text>
      <circle class="fig-dot-em" cx="29" cy="74.5" r="2.6" />
      <text class="fig-s" x="38" y="78">Reads text and 3D geometry together</text>
      <circle class="fig-dot-em" cx="29" cy="90.5" r="2.6" />
      <text class="fig-s" x="38" y="94">Recalls papers, structures, simulations</text>
      <circle class="fig-line" cx="29" cy="106.5" r="2.3" />
      <text class="fig-s" x="38" y="110">Debugs steps, designs experiments</text>
      <rect class="fig-box-em lab-hit" data-part="brain" x="10" y="20" width="220" height="105" rx="10" />
      <rect class="fig-dot" x="10" y="141" width="220" height="105" rx="10" opacity="0.05" />
      <text class="fig-h" x="26" y="162">EYES</text>
      <text class="fig-t" x="26" y="179">Ouroboros OCSR</text>
      <circle class="fig-dot-em" cx="29" cy="195.5" r="2.6" />
      <text class="fig-s" x="38" y="199">Turns paper figures into structures</text>
      <circle class="fig-dot-em" cx="29" cy="211.5" r="2.6" />
      <text class="fig-s" x="38" y="215">Four models vote to flag errors</text>
      <circle class="fig-line" cx="29" cy="227.5" r="2.3" />
      <text class="fig-s" x="38" y="231">Spectra, gels and a lab camera</text>
      <rect class="fig-box-em lab-hit" data-part="eyes" x="10" y="141" width="220" height="105" rx="10" />
      <rect class="fig-box" x="10" y="262" width="220" height="105" rx="10" stroke-dasharray="4 3" opacity="0.6" />
      <text class="fig-h" x="26" y="283">EARS</text>
      <text class="fig-t" x="26" y="300">Lab language</text>
      <circle class="fig-line" cx="29" cy="316.5" r="2.3" />
      <text class="fig-s" x="38" y="320">Chemistry and biology protocols</text>
      <circle class="fig-line" cx="29" cy="332.5" r="2.3" />
      <text class="fig-s" x="38" y="336">Scientist goals by voice or chat</text>
      <circle class="fig-line" cx="29" cy="348.5" r="2.3" />
      <text class="fig-s" x="38" y="352">Instrument logs and alarms</text>
      <rect class="fig-box-em lab-hit" data-part="ears" x="10" y="262" width="220" height="105" rx="10" />
      <rect class="fig-box" x="10" y="383" width="220" height="89" rx="10" stroke-dasharray="4 3" opacity="0.6" />
      <text class="fig-h" x="26" y="404">HANDS</text>
      <text class="fig-t" x="26" y="421">Instrument control</text>
      <circle class="fig-line" cx="29" cy="437.5" r="2.3" />
      <text class="fig-s" x="38" y="441">Robot arm, pipettes, well plates</text>
      <circle class="fig-line" cx="29" cy="453.5" r="2.3" />
      <text class="fig-s" x="38" y="457">Writes liquid-handler scripts</text>
      <rect class="fig-box-em lab-hit" data-part="hands" x="10" y="383" width="220" height="89" rx="10" />
      <rect class="fig-dot" x="740" y="20" width="220" height="105" rx="10" opacity="0.05" />
      <text class="fig-h" x="756" y="41">FIRST PRINCIPLES</text>
      <text class="fig-t" x="756" y="58">DFT teacher</text>
      <circle class="fig-dot-em" cx="759" cy="74.5" r="2.6" />
      <text class="fig-s" x="768" y="78">Quantum chemistry as ground truth</text>
      <circle class="fig-dot-em" cx="759" cy="90.5" r="2.6" />
      <text class="fig-s" x="768" y="94">Multiscale: electrons to cells</text>
      <circle class="fig-line" cx="759" cy="106.5" r="2.3" />
      <text class="fig-s" x="768" y="110">Distilled into small, fast students</text>
      <rect class="fig-box-em lab-hit" data-part="first" x="740" y="20" width="220" height="105" rx="10" />
      <rect class="fig-dot" x="740" y="141" width="220" height="105" rx="10" opacity="0.05" />
      <text class="fig-h" x="756" y="162">PHYSICS INTUITION</text>
      <text class="fig-t" x="756" y="179">WignerFlow</text>
      <circle class="fig-dot-em" cx="759" cy="195.5" r="2.6" />
      <text class="fig-s" x="768" y="199">Learned MD, frame by frame</text>
      <circle class="fig-dot-em" cx="759" cy="211.5" r="2.6" />
      <text class="fig-s" x="768" y="215">Force fields gated by past failures</text>
      <circle class="fig-line" cx="759" cy="227.5" r="2.3" />
      <text class="fig-s" x="768" y="231">Simulates each step before running</text>
      <rect class="fig-box-em lab-hit" data-part="physics" x="740" y="141" width="220" height="105" rx="10" />
      <rect class="fig-dot" x="740" y="262" width="220" height="105" rx="10" opacity="0.05" />
      <text class="fig-h" x="756" y="283">BODY</text>
      <text class="fig-t" x="756" y="300">Bounded harness</text>
      <circle class="fig-dot-em" cx="759" cy="316.5" r="2.6" />
      <text class="fig-s" x="768" y="320">Inspects runs, diagnoses failures</text>
      <circle class="fig-dot-em" cx="759" cy="332.5" r="2.6" />
      <text class="fig-s" x="768" y="336">Prepares jobs, catches repeats</text>
      <circle class="fig-dot-em" cx="759" cy="348.5" r="2.6" />
      <text class="fig-s" x="768" y="352">Default-deny gate on every job</text>
      <rect class="fig-box-em lab-hit" data-part="body" x="740" y="262" width="220" height="105" rx="10" />
      <rect class="fig-box" x="740" y="383" width="220" height="89" rx="10" stroke-dasharray="4 3" opacity="0.6" />
      <text class="fig-h" x="756" y="404">FEET</text>
      <text class="fig-t" x="756" y="421">Low-cost deployment</text>
      <circle class="fig-line" cx="759" cy="437.5" r="2.3" />
      <text class="fig-s" x="768" y="441">Cloud GPUs only in short bursts</text>
      <circle class="fig-line" cx="759" cy="453.5" r="2.3" />
      <text class="fig-s" x="768" y="457">Small quantized models on the edge</text>
      <rect class="fig-box-em lab-hit" data-part="feet" x="740" y="383" width="220" height="89" rx="10" />

      <!-- Legend -->
      <circle class="fig-dot-em" cx="391.83" cy="453.5" r="2.6" />
      <text class="fig-s" x="399.23" y="457">built</text>
      <circle class="fig-line" cx="444.18" cy="453.5" r="2.3" />
      <text class="fig-s" x="451.58" y="457">planned</text>
      <rect class="fig-box" x="511.17" y="447" width="18" height="12" rx="3" stroke-dasharray="3 2" opacity="0.6" />
      <text class="fig-s" x="535.17" y="457">future part</text>
    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the diagram sideways →</p>

  <p class="about-figure-caption">
    Today's self-driving labs mostly train an athlete to drill the same moves. A lab agent that
    understands the chemistry behind each protocol step could plan better and find strategies people
    don't expect.
  </p>

  <script>
    (function () {
      var els = document.querySelectorAll(".about-figure [data-part]");
      var pinned = null;
      function show(part) {
        els.forEach(function (el) {
          el.classList.toggle("is-hot", el.getAttribute("data-part") === part);
        });
      }
      els.forEach(function (el) {
        var part = el.getAttribute("data-part");
        el.addEventListener("mouseenter", function () {
          show(part);
        });
        el.addEventListener("mouseleave", function () {
          show(pinned);
        });
        el.addEventListener("click", function (event) {
          event.stopPropagation();
          pinned = pinned === part ? null : part;
          show(pinned);
        });
      });
      document.addEventListener("click", function () {
        pinned = null;
        show(null);
      });
    })();
  </script>

  <p class="about-row-val">
    I work on machine learning for chemistry: equivariant models, chemistry vision and language models, and agents that run simulations.
  </p>

  <div class="about-rows">

    <div class="about-row">
      <div class="about-row-key">VERDICT</div>
      <div class="about-row-val">
        Four different structure recognizers vote. When they disagree, the structure is flagged as wrong, with no labels needed. AUROC 0.916. Chemists rated 400 released labels at 0.995 precision.
        <a href="https://arxiv.org/abs/2608.22183">arXiv:2608.22183</a>
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Image-to-SMILES post-training</div>
      <div class="about-row-val">
        LoRA SFT on three open VLMs reached 59.8% exact match on 331 journal figures, against 58.3% for MolScribe. DPO pushed preference accuracy to 90–97% while exact match fell to 0–2%, so I kept SFT.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Electrolyte co-scientist</div>
      <div class="about-row-val">
        Qwen3.6-27B with LoRA on 254,527 task, evidence and tool-use rows. Each MD job is checked before it is submitted, and repeat jobs are caught.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/WignerFlow">WignerFlow</a></div>
      <div class="about-row-val">
        An autoregressive E(3)-equivariant transformer that generates MD trajectories. Public results so far are on argon.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/ouroboros-ocsr">Ouroboros</a></div>
      <div class="about-row-val">
        A C<sub>N</sub> steerable CNN as the image encoder for structure recognition. It handles rotations but not reflections, because a mirror image flips stereocenters.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/YLM">YLM</a></div>
      <div class="about-row-val">
        Text tokens attend to <i>l</i> ≥ 1 irreps through Clebsch–Gordan products. Equivariance error is below 10<sup>−9</sup> in fp64.
      </div>
    </div>

  </div>

</section>

<section class="about-section">
  <h2 class="about-section-title">Agents for science</h2>

  <div class="about-rows">

    <div class="about-row">
      <div class="about-row-key">Failure-gated force-field harness</div>
      <div class="about-row-val">
        Recorded failure modes of past polarizable force-field fits become automated gates; a candidate field that repeats a known short-range collapse or typing break is rejected before use.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Consensus labels for self-training</div>
      <div class="about-row-val">
        Independent structure readers vote on literature figures; only agreed labels enter training, and real crops, not more synthetic drawings, moved accuracy.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Multimodal molecular retrieval</div>
      <div class="about-row-val">
        A molecular knowledge graph keyed on InChIKey, with identity, structure-similarity and text search linking literature, structures and simulations.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Bounded scientist agents</div>
      <div class="about-row-val">
        Tool-using electrolyte and cell scientist agents that inspect trajectories, diagnose failures and prepare jobs; submission is default-deny and model text never runs as a shell command.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Cell-scale simulation</div>
      <div class="about-row-val">
        Large P2D and 3D electrothermal cell simulation campaigns for design studies.
      </div>
    </div>

  </div>

</section>

<section class="about-section">
  <h2 class="about-section-title">News</h2>
  {% include news.liquid limit=true %}
  <p class="about-more">
    <a href="{{ '/news/' | relative_url }}">All news</a>
  </p>
</section>

<section class="about-section">
  <h2 class="about-section-title">Experience</h2>
  <div class="about-rows">

    <div class="about-row">
      <div class="about-row-date">2026</div>
      <div class="about-row-val">
        <div class="about-role">
          <a href="https://www.ses.ai/">SES AI</a>
          <span>Applied Scientist Intern</span>
        </div>
        Post-training and evals for chemistry vision and language models, multi-scale
        electrolyte and cell simulation, and co-scientist agents that plan and run jobs.
        Notes:
        <a href="{{ '/notes/summer-of-molecules-puddles-batteries/' | relative_url }}">Overview</a>
        ·
        <a href="{{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }}">Molecules</a>
        ·
        <a href="{{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}">Electrolytes</a>
        ·
        <a href="{{ '/notes/from-molecules-to-batteries/' | relative_url }}">Cells</a>.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-date">2022 — present</div>
      <div class="about-row-val">
        <div class="about-role">
          UCLA
          <span>Ph.D. Research</span>
        </div>
        DFT and multi-scale modeling of electrochemical interfaces, electrode
        degradation, and reaction selectivity; LLM- and vision-based tooling for
        computational chemistry.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-date">2022</div>
      <div class="about-row-val">
        <div class="about-role">
          <a href="https://www.dp.tech/en">DP Technology</a>
          <span>Algorithm Researcher Intern</span>
        </div>
        Production ML pipelines for neural network potentials and scalable scientific
        computing workflows; developer-community and documentation work in the DeePMD
        ecosystem.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-date">2018 — 2022</div>
      <div class="about-row-val">
        <div class="about-role">
          <a href="https://www.hebut.edu.cn/">Hebei University of Technology</a>
          <span>Undergraduate Research</span>
        </div>
        Multi-scale simulation (DFT–kMC), machine learning for catalysis, and
        electrochemical experiments on bifunctional catalysts for Li–S and Zn–air
        batteries; three first-author publications.
      </div>
    </div>

  </div>
</section>
