---
layout: about
title: About
permalink: /
subtitle: Incoming Member of Technical Staff at Medra, January 2027 · Ph.D., UCLA, 2026
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
    <svg class="lab-link" viewBox="0 0 972 693" role="img" aria-labelledby="lab-fig-title lab-fig-desc">
      <title id="lab-fig-title">A lab agent that understands chemistry and biology</title>
      <desc id="lab-fig-desc">
        A line drawing of a two-armed robot working at a lab bench, linked to a GPU, with a
        pre-experiment loop below. Filled marks are built; hollow marks and dashed outlines are
        planned. Brain: YLM reads text and 3D geometry together and recalls papers, structures
        and simulations from a molecular memory; strict checks that turn text into Lean proofs,
        SQL queries and protocol scripts are planned. Eyes: Ouroboros OCSR turns paper figures
        into structures, and four models vote to flag errors; spectra, gels and a lab camera are
        planned. Ears, planned: chemistry and biology protocols, scientist goals by voice or chat.
        Touch, planned: tactile pads on a gripper feel the last centimeter where glass and liquids
        fool cameras, for tip seating and cap grip. Hands, planned: one arm holds a pipette over a
        well plate, the other a sample tube above a
        tube rack; pipetting, tip-to-well alignment and
        liquid-handler scripts. First principles: quantum chemistry as ground truth and multiscale
        models from electrons to cells; distilling them into small, fast students is planned.
        Physics intuition: WignerFlow learns MD frame by frame (shown so far on argon), and force
        fields are gated by past failures; simulating each step before running is planned. Body:
        a bounded harness diagnoses failures, catches repeats and puts a default-deny gate on
        every job. Action planning, planned: protocol to steps to motion instead of hard-coded
        moves. Compute, planned: cloud GPUs only in short bursts and small quantized models on the
        edge. Before every experiment: recall molecular memory and past failures (built); rehearse
        in a GPU digital twin of the bench, an Isaac-style physics sim (planned) and with learned MD (built, argon so far);
        verify with Lean, SQL and protocol checks (planned) behind the default-deny job gate
        (built); run the real experiment, guided by camera and touch (planned); write results and
        failures back to memory, which trains the Decision API (planned). A planned Decision API closes the loop: trained on our own lab data, it grows
        out from a trusted zone and asks why, not who is right.
      </desc>

      <!-- Robot -->
      <path class="fig-route" d="M485,48.5 V64" />
      <g data-part="ears">
      <circle class="fig-box" cx="422" cy="123" r="8.5" />
      <circle class="fig-route" cx="422" cy="123" r="8.5" />
      <circle class="fig-box" cx="548" cy="123" r="8.5" />
      <circle class="fig-route" cx="548" cy="123" r="8.5" />
      </g>
      <rect class="fig-box" x="470" y="140" width="30" height="20" rx="6" />
      <rect class="fig-route" x="470" y="140" width="30" height="20" rx="6" />
      <rect class="fig-box" x="474" y="242" width="22" height="50" rx="3" />
      <rect class="fig-route" x="474" y="242" width="22" height="50" rx="3" />
      <rect class="fig-box" x="469" y="288" width="32" height="48" rx="3" />
      <rect class="fig-route" x="469" y="288" width="32" height="48" rx="3" />
      <g data-part="hands">
      <rect class="fig-box" x="609.5" y="332" width="11" height="28" rx="2.5" />
      <rect class="fig-route" x="609.5" y="332" width="11" height="28" rx="2.5" />
      <rect class="fig-dot" x="610.75" y="342" width="8.5" height="12" opacity="0.28" />
      <rect class="fig-box" x="624.5" y="332" width="11" height="28" rx="2.5" />
      <rect class="fig-route" x="624.5" y="332" width="11" height="28" rx="2.5" />
      <rect class="fig-dot" x="625.75" y="342" width="8.5" height="12" opacity="0.28" />
      <rect class="fig-box" x="604" y="352" width="51" height="14" rx="2.5" />
      <rect class="fig-route" x="604" y="352" width="51" height="14" rx="2.5" />
      <rect class="fig-box" x="301" y="354" width="68" height="12" rx="2.5" />
      <rect class="fig-route" x="301" y="354" width="68" height="12" rx="2.5" />
      <circle class="fig-line" cx="308" cy="360" r="2" />
      <circle class="fig-dot" cx="317" cy="360" r="2" opacity="0.5" />
      <circle class="fig-line" cx="317" cy="360" r="2" />
      <circle class="fig-line" cx="326" cy="360" r="2" />
      <circle class="fig-line" cx="335" cy="360" r="2" />
      <circle class="fig-line" cx="344" cy="360" r="2" />
      <circle class="fig-line" cx="353" cy="360" r="2" />
      <circle class="fig-line" cx="362" cy="360" r="2" />
      </g>
      <rect class="fig-box" x="295" y="366" width="380" height="10" rx="3" />
      <rect class="fig-route" x="295" y="366" width="380" height="10" rx="3" />
      <g data-part="hands">
      <path class="fig-box" d="M439.05,328.47 L397.05,256.47 A7,7 0 0 0 384.95,263.53 L426.95,335.53 A7,7 0 0 0 439.05,328.47 Z" />
      <path class="fig-route" d="M439.05,328.47 L397.05,256.47 A7,7 0 0 0 384.95,263.53 L426.95,335.53 A7,7 0 0 0 439.05,328.47 Z" />
      <path class="fig-box" d="M388.37,253.51 L314.37,283.51 A7,7 0 0 0 319.63,296.49 L393.63,266.49 A7,7 0 0 0 388.37,253.51 Z" />
      <path class="fig-route" d="M388.37,253.51 L314.37,283.51 A7,7 0 0 0 319.63,296.49 L393.63,266.49 A7,7 0 0 0 388.37,253.51 Z" />
      <rect class="fig-box" x="312" y="290" width="10" height="14" rx="2" />
      <rect class="fig-route" x="312" y="290" width="10" height="14" rx="2" />
      <rect class="fig-box" x="314" y="302" width="6" height="32" rx="1.2" />
      <rect class="fig-route" x="314" y="302" width="6" height="32" rx="1.2" />
      <path class="fig-box" d="M314.6,334 L316.3,350 H317.7 L319.4,334 Z" />
      <path class="fig-route" d="M314.6,334 L316.3,350 H317.7 L319.4,334 Z" />
      <rect class="fig-box" x="307.6" y="306" width="6" height="20" rx="2.5" />
      <rect class="fig-route" x="307.6" y="306" width="6" height="20" rx="2.5" />
      <rect class="fig-box" x="320.4" y="306" width="6" height="20" rx="2.5" />
      <rect class="fig-route" x="320.4" y="306" width="6" height="20" rx="2.5" />
      <rect class="fig-box" x="302" y="300" width="30" height="8" rx="4" />
      <rect class="fig-route" x="302" y="300" width="30" height="8" rx="4" />
      <path class="fig-box" d="M543.05,335.53 L585.05,263.53 A7,7 0 0 0 572.95,256.47 L530.95,328.47 A7,7 0 0 0 543.05,335.53 Z" />
      <path class="fig-route" d="M543.05,335.53 L585.05,263.53 A7,7 0 0 0 572.95,256.47 L530.95,328.47 A7,7 0 0 0 543.05,335.53 Z" />
      <path class="fig-box" d="M576.1,266.37 L642.1,296.37 A7,7 0 0 0 647.9,283.63 L581.9,253.63 A7,7 0 0 0 576.1,266.37 Z" />
      <path class="fig-route" d="M576.1,266.37 L642.1,296.37 A7,7 0 0 0 647.9,283.63 L581.9,253.63 A7,7 0 0 0 576.1,266.37 Z" />
      <rect class="fig-box" x="640" y="290" width="10" height="14" rx="2" />
      <rect class="fig-route" x="640" y="290" width="10" height="14" rx="2" />
      <path class="fig-box" d="M639.5,304 V340.5 A5.5,5.5 0 0 0 650.5,340.5 V304 Z" />
      <path class="fig-route" d="M639.5,304 V340.5 A5.5,5.5 0 0 0 650.5,340.5 V304 Z" />
      <path class="fig-dot" d="M640.75,330 V340.5 A4.25,4.25 0 0 0 649.25,340.5 V330 Z" opacity="0.28" />
      <rect class="fig-box" x="632.8" y="306" width="6" height="20" rx="2.5" />
      <rect class="fig-route" x="632.8" y="306" width="6" height="20" rx="2.5" />
      <rect class="fig-box" x="651.2" y="306" width="6" height="20" rx="2.5" />
      <rect class="fig-route" x="651.2" y="306" width="6" height="20" rx="2.5" />
      <rect class="fig-box" x="630" y="300" width="30" height="8" rx="4" />
      <rect class="fig-route" x="630" y="300" width="30" height="8" rx="4" />
      </g>
      <g data-part="touch">
      <rect class="fig-dot" x="308.6" y="316" width="4" height="9" rx="1.5" opacity="0.5" />
      <rect class="fig-dot" x="321.4" y="316" width="4" height="9" rx="1.5" opacity="0.5" />
      </g>
      <path class="fig-box" d="M447,242.61 L430.52,181.75 A22,22 0 0 1 451.75,154 L518.25,154 A22,22 0 0 1 539.48,181.75 L523,242.61 A10,10 0 0 1 513.35,250 L456.65,250 A10,10 0 0 1 447,242.61 Z" />
      <path class="fig-route" d="M447,242.61 L430.52,181.75 A22,22 0 0 1 451.75,154 L518.25,154 A22,22 0 0 1 539.48,181.75 L523,242.61 A10,10 0 0 1 513.35,250 L456.65,250 A10,10 0 0 1 447,242.61 Z" />
      <path class="fig-box" d="M415,364 L415,342 A10,10 0 0 1 425,332 L545,332 A10,10 0 0 1 555,342 L555,364 A2,2 0 0 1 553,366 L417,366 A2,2 0 0 1 415,364 Z" />
      <path class="fig-route" d="M415,364 L415,342 A10,10 0 0 1 425,332 L545,332 A10,10 0 0 1 555,342 L555,364 A2,2 0 0 1 553,366 L417,366 A2,2 0 0 1 415,364 Z" />
      <g data-part="hands">
      <circle class="fig-box" cx="433" cy="332" r="11" />
      <circle class="fig-route" cx="433" cy="332" r="11" />
      <circle class="fig-route" cx="433" cy="332" r="4" />
      <circle class="fig-box" cx="391" cy="260" r="9.5" />
      <circle class="fig-route" cx="391" cy="260" r="9.5" />
      <circle class="fig-route" cx="391" cy="260" r="3" />
      <circle class="fig-box" cx="317" cy="290" r="7" />
      <circle class="fig-route" cx="317" cy="290" r="7" />
      <circle class="fig-box" cx="537" cy="332" r="11" />
      <circle class="fig-route" cx="537" cy="332" r="11" />
      <circle class="fig-route" cx="537" cy="332" r="4" />
      <circle class="fig-box" cx="579" cy="260" r="9.5" />
      <circle class="fig-route" cx="579" cy="260" r="9.5" />
      <circle class="fig-route" cx="579" cy="260" r="3" />
      <circle class="fig-box" cx="645" cy="290" r="7" />
      <circle class="fig-route" cx="645" cy="290" r="7" />
      </g>
      <g data-part="plan">
      <path class="fig-route" d="M655,340 C676,338 672,306 672,293" stroke-dasharray="0.01 4" />
      <path class="fig-route" d="M668.5,296.5 L672,293 L675.5,296.5" />
      </g>
      <rect class="fig-box" x="425" y="60" width="120" height="86" rx="24" />
      <rect class="fig-route" x="425" y="60" width="120" height="86" rx="24" />
      <g data-part="brain">
      <path class="fig-route-em" d="M485,77.25 L476.77,72.5 L468.55,77.25 L468.55,86.75 L476.77,91.5 L485,86.75 L493.23,91.5 L501.45,86.75 L501.45,77.25 L493.23,72.5 Z M485,77.25 V86.75" />
      </g>
      <rect class="fig-route" x="440" y="94" width="90" height="24" rx="12" />
      <g data-part="eyes">
      <circle class="fig-route" cx="464" cy="106" r="6.5" />
      <circle class="fig-dot-em" cx="464" cy="106" r="2.4" />
      <circle class="fig-route" cx="506" cy="106" r="6.5" />
      <circle class="fig-dot-em" cx="506" cy="106" r="2.4" />
      </g>
      <g data-part="physics">
      <circle class="fig-route" cx="485" cy="180" r="17" />
      <path class="fig-route-em" d="M474,187 Q482,167 490,177" stroke-dasharray="0.01 4" />
      <circle class="fig-dot-em" cx="490" cy="177" r="3" />
      </g>
      <g data-part="body">
      <path class="fig-route-em" d="M485,205.5 L494,209 V217.5 C494,222.5 490,225.5 485,227 C480,225.5 476,222.5 476,217.5 V209 Z" />
      </g>
      <g data-part="first">
      <ellipse class="fig-route-em" cx="485" cy="37.5" rx="14" ry="5" transform="rotate(0 485 37.5)" />
      <ellipse class="fig-route-em" cx="485" cy="37.5" rx="14" ry="5" transform="rotate(60 485 37.5)" />
      <ellipse class="fig-route-em" cx="485" cy="37.5" rx="14" ry="5" transform="rotate(-60 485 37.5)" />
      <circle class="fig-dot-em" cx="485" cy="37.5" r="2.6" />
      </g>
      <g data-part="feet">
      <path class="fig-line" d="M485,396 V376" stroke-dasharray="3 2.67" />
      <path class="fig-route" d="M463,413 h-5" />
      <path class="fig-route" d="M475,401 v-5" />
      <path class="fig-route" d="M463,423 h-5" />
      <path class="fig-route" d="M485,401 v-5" />
      <path class="fig-route" d="M463,433 h-5" />
      <path class="fig-route" d="M495,401 v-5" />
      <path class="fig-route" d="M507,413 h5" />
      <path class="fig-route" d="M475,445 v5" />
      <path class="fig-route" d="M507,423 h5" />
      <path class="fig-route" d="M485,445 v5" />
      <path class="fig-route" d="M507,433 h5" />
      <path class="fig-route" d="M495,445 v5" />
      <rect class="fig-box" x="463" y="401" width="44" height="44" rx="6" />
      <rect class="fig-route" x="463" y="401" width="44" height="44" rx="6" />
      <text class="fig-h" x="473.41" y="426.4">GPU</text>
      </g>

      <!-- Leaders -->
      <path class="fig-line" data-part="brain" d="M230,37.5 H248 A8,8 0 0 1 256,45.5 V74 A8,8 0 0 0 264,82 H468.55" opacity="0.6" />
      <path class="fig-line" data-part="eyes" d="M230,154.5 H262 A8,8 0 0 0 270,146.5 V114 A8,8 0 0 1 278,106 H464" opacity="0.6" />
      <path class="fig-line" data-part="ears" d="M230,271.5 H278 A8,8 0 0 0 286,263.5 V131 A8,8 0 0 1 294,123 H413.5" opacity="0.6" />
      <path class="fig-line" data-part="hands" d="M230,372.5 H234 A8,8 0 0 0 242,364.5 V312 A8,8 0 0 1 250,304 H302" opacity="0.6" />
      <path class="fig-line" data-part="touch" d="M230,473.5 H248 A8,8 0 0 0 256,465.5 V328.5 A8,8 0 0 1 264,320.5 H305" opacity="0.6" />
      <path class="fig-line" data-part="first" d="M740,37.5 H499" opacity="0.6" />
      <path class="fig-line" data-part="physics" d="M740,154.5 H668 A8,8 0 0 0 660,162.5 V169 A8,8 0 0 1 652,177 H490" opacity="0.6" />
      <path class="fig-line" data-part="body" d="M740,271.5 H722 A8,8 0 0 1 714,263.5 V224 A8,8 0 0 0 706,216 H494" opacity="0.6" />
      <path class="fig-line" data-part="plan" d="M740,372.5 H702 A8,8 0 0 1 694,364.5 V315.02 A8,8 0 0 0 686,307.02 H672.3" opacity="0.6" />
      <path class="fig-line" data-part="feet" d="M740,473.5 H608 A8,8 0 0 1 600,465.5 V431 A8,8 0 0 0 592,423 H512" opacity="0.6" />

      <circle class="fig-dot-em" data-part="brain" cx="468.55" cy="82" r="2.6" />
      <circle class="fig-dot-em" data-part="eyes" cx="464" cy="106" r="2.6" />
      <circle class="fig-box" data-part="ears" cx="413.5" cy="123" r="2.6" />
      <circle class="fig-box" data-part="hands" cx="302" cy="304" r="2.6" />
      <circle class="fig-box" data-part="touch" cx="305" cy="320.5" r="2.6" />
      <circle class="fig-dot-em" data-part="first" cx="499" cy="37.5" r="2.6" />
      <circle class="fig-dot-em" data-part="physics" cx="490" cy="177" r="2.6" />
      <circle class="fig-dot-em" data-part="body" cx="494" cy="216" r="2.6" />
      <circle class="fig-box" data-part="plan" cx="672.3" cy="307.02" r="2.6" />
      <circle class="fig-box" data-part="feet" cx="512" cy="423" r="2.6" />

      <rect class="fig-dot" x="10" y="20" width="220" height="105" rx="10" opacity="0.05" />
      <text class="fig-h" x="26" y="41">BRAIN</text>
      <text class="fig-t" x="26" y="58">YLM</text>
      <circle class="fig-dot-em" cx="29" cy="74.5" r="2.6" />
      <text class="fig-s" x="38" y="78">Reads text and 3D geometry together</text>
      <circle class="fig-dot-em" cx="29" cy="90.5" r="2.6" />
      <text class="fig-s" x="38" y="94">Recalls papers, structures, simulations</text>
      <circle class="fig-line" cx="29" cy="106.5" r="2.3" />
      <text class="fig-s" x="38" y="110">Strict checks: Lean · SQL · protocol</text>
      <rect class="fig-box-em lab-hit" data-part="brain" x="10" y="20" width="220" height="105" rx="10" />
      <rect class="fig-dot" x="10" y="137" width="220" height="105" rx="10" opacity="0.05" />
      <text class="fig-h" x="26" y="158">EYES</text>
      <text class="fig-t" x="26" y="175">Ouroboros OCSR</text>
      <circle class="fig-dot-em" cx="29" cy="191.5" r="2.6" />
      <text class="fig-s" x="38" y="195">Turns paper figures into structures</text>
      <circle class="fig-dot-em" cx="29" cy="207.5" r="2.6" />
      <text class="fig-s" x="38" y="211">Four models vote to flag errors</text>
      <circle class="fig-line" cx="29" cy="223.5" r="2.3" />
      <text class="fig-s" x="38" y="227">Spectra, gels and a lab camera</text>
      <rect class="fig-box-em lab-hit" data-part="eyes" x="10" y="137" width="220" height="105" rx="10" />
      <rect class="fig-box" x="10" y="254" width="220" height="89" rx="10" stroke-dasharray="5 3.46" opacity="0.5" />
      <text class="fig-h" x="26" y="275">EARS</text>
      <text class="fig-t" x="26" y="292">Lab language</text>
      <circle class="fig-line" cx="29" cy="308.5" r="2.3" />
      <text class="fig-s" x="38" y="312">Chemistry and biology protocols</text>
      <circle class="fig-line" cx="29" cy="324.5" r="2.3" />
      <text class="fig-s" x="38" y="328">Scientist goals by voice or chat</text>
      <rect class="fig-box-em lab-hit" data-part="ears" x="10" y="254" width="220" height="89" rx="10" />
      <rect class="fig-box" x="10" y="355" width="220" height="89" rx="10" stroke-dasharray="5 3.46" opacity="0.5" />
      <text class="fig-h" x="26" y="376">HANDS</text>
      <text class="fig-t" x="26" y="393">Instrument control</text>
      <circle class="fig-line" cx="29" cy="409.5" r="2.3" />
      <text class="fig-s" x="38" y="413">Pipetting, tip-to-well alignment</text>
      <circle class="fig-line" cx="29" cy="425.5" r="2.3" />
      <text class="fig-s" x="38" y="429">Writes liquid-handler scripts</text>
      <rect class="fig-box-em lab-hit" data-part="hands" x="10" y="355" width="220" height="89" rx="10" />
      <rect class="fig-box" x="10" y="456" width="220" height="89" rx="10" stroke-dasharray="5 3.46" opacity="0.5" />
      <text class="fig-h" x="26" y="477">TOUCH</text>
      <text class="fig-t" x="26" y="494">Tactile sensing</text>
      <circle class="fig-line" cx="29" cy="510.5" r="2.3" />
      <text class="fig-s" x="38" y="514">Feels where glass fools cameras</text>
      <circle class="fig-line" cx="29" cy="526.5" r="2.3" />
      <text class="fig-s" x="38" y="530">Force-guided tip seating, cap grip</text>
      <rect class="fig-box-em lab-hit" data-part="touch" x="10" y="456" width="220" height="89" rx="10" />
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
      <rect class="fig-dot" x="740" y="137" width="220" height="105" rx="10" opacity="0.05" />
      <text class="fig-h" x="756" y="158">PHYSICS INTUITION</text>
      <text class="fig-t" x="756" y="175">WignerFlow</text>
      <circle class="fig-dot-em" cx="759" cy="191.5" r="2.6" />
      <text class="fig-s" x="768" y="195">Learned MD, frame by frame</text>
      <circle class="fig-dot-em" cx="759" cy="207.5" r="2.6" />
      <text class="fig-s" x="768" y="211">Force fields gated by past failures</text>
      <circle class="fig-line" cx="759" cy="223.5" r="2.3" />
      <text class="fig-s" x="768" y="227">Simulates each step before running</text>
      <rect class="fig-box-em lab-hit" data-part="physics" x="740" y="137" width="220" height="105" rx="10" />
      <rect class="fig-dot" x="740" y="254" width="220" height="89" rx="10" opacity="0.05" />
      <text class="fig-h" x="756" y="275">BODY</text>
      <text class="fig-t" x="756" y="292">Bounded harness</text>
      <circle class="fig-dot-em" cx="759" cy="308.5" r="2.6" />
      <text class="fig-s" x="768" y="312">Diagnoses failures, catches repeats</text>
      <circle class="fig-dot-em" cx="759" cy="324.5" r="2.6" />
      <text class="fig-s" x="768" y="328">Default-deny gate on every job</text>
      <rect class="fig-box-em lab-hit" data-part="body" x="740" y="254" width="220" height="89" rx="10" />
      <rect class="fig-box" x="740" y="355" width="220" height="89" rx="10" stroke-dasharray="5 3.46" opacity="0.5" />
      <text class="fig-h" x="756" y="376">ACTION PLANNING</text>
      <text class="fig-t" x="756" y="393">Step planner</text>
      <circle class="fig-line" cx="759" cy="409.5" r="2.3" />
      <text class="fig-s" x="768" y="413">Protocol to steps to motion</text>
      <circle class="fig-line" cx="759" cy="425.5" r="2.3" />
      <text class="fig-s" x="768" y="429">Replaces hard-coded moves</text>
      <rect class="fig-box-em lab-hit" data-part="plan" x="740" y="355" width="220" height="89" rx="10" />
      <rect class="fig-box" x="740" y="456" width="220" height="89" rx="10" stroke-dasharray="5 3.46" opacity="0.5" />
      <text class="fig-h" x="756" y="477">COMPUTE</text>
      <text class="fig-t" x="756" y="494">Sim-to-real compute</text>
      <circle class="fig-line" cx="759" cy="510.5" r="2.3" />
      <text class="fig-s" x="768" y="514">Cloud GPUs only in short bursts</text>
      <circle class="fig-line" cx="759" cy="526.5" r="2.3" />
      <text class="fig-s" x="768" y="530">Small quantized models on the edge</text>
      <rect class="fig-box-em lab-hit" data-part="feet" x="740" y="456" width="220" height="89" rx="10" />

      <!-- Pre-experiment loop -->
      <text class="fig-h" x="10" y="575">BEFORE EVERY EXPERIMENT</text>
      <rect class="fig-dot" x="10" y="587" width="170.8" height="64" rx="10" opacity="0.05" />
      <text class="fig-t" x="23" y="609">Recall</text>
      <circle class="fig-dot-em" cx="26" cy="623.5" r="2.6" />
      <text class="fig-s" x="35" y="627">Molecular memory</text>
      <circle class="fig-dot-em" cx="26" cy="638.5" r="2.6" />
      <text class="fig-s" x="35" y="642">Past failures as gates</text>
      <rect class="fig-dot" x="204.8" y="587" width="170.8" height="64" rx="10" opacity="0.05" />
      <text class="fig-t" x="217.8" y="609">Rehearse</text>
      <circle class="fig-line" cx="220.8" cy="623.5" r="2.3" />
      <text class="fig-s" x="229.8" y="627">GPU digital twin (Isaac-style)</text>
      <circle class="fig-dot-em" cx="220.8" cy="638.5" r="2.6" />
      <text class="fig-s" x="229.8" y="642">Learned MD (argon so far)</text>
      <rect class="fig-dot" x="399.6" y="587" width="170.8" height="64" rx="10" opacity="0.05" />
      <text class="fig-t" x="412.6" y="609">Verify</text>
      <circle class="fig-line" cx="415.6" cy="623.5" r="2.3" />
      <text class="fig-s" x="424.6" y="627">Lean · SQL · protocol checks</text>
      <circle class="fig-dot-em" cx="415.6" cy="638.5" r="2.6" />
      <text class="fig-s" x="424.6" y="642">Default-deny job gate</text>
      <rect class="fig-box" x="594.4" y="587" width="170.8" height="64" rx="10" stroke-dasharray="5 3.54" opacity="0.5" />
      <text class="fig-t" x="607.4" y="609">Run</text>
      <circle class="fig-line" cx="610.4" cy="623.5" r="2.3" />
      <text class="fig-s" x="619.4" y="627">Real experiment at the bench</text>
      <circle class="fig-line" cx="610.4" cy="638.5" r="2.3" />
      <text class="fig-s" x="619.4" y="642">Guided by camera and touch</text>
      <rect class="fig-box" x="789.2" y="587" width="170.8" height="64" rx="10" stroke-dasharray="5 3.54" opacity="0.5" />
      <text class="fig-t" x="802.2" y="609">Write back</text>
      <circle class="fig-line" cx="805.2" cy="623.5" r="2.3" />
      <text class="fig-s" x="814.2" y="627">Results, failures to memory</text>
      <circle class="fig-line" cx="805.2" cy="638.5" r="2.3" />
      <text class="fig-s" x="814.2" y="642">Trains the Decision API</text>
      <path class="fig-route" data-part="loop" d="M186.8,605 H198.8 M195.3,601.5 L198.8,605 L195.3,608.5" />
      <path class="fig-route" data-part="loop" d="M381.6,605 H393.6 M390.1,601.5 L393.6,605 L390.1,608.5" />
      <path class="fig-route" data-part="loop" d="M576.4,605 H588.4 M584.9,601.5 L588.4,605 L584.9,608.5" />
      <path class="fig-route" data-part="loop" d="M771.2,605 H783.2 M779.7,601.5 L783.2,605 L779.7,608.5" />
      <path class="fig-route" data-part="loop" d="M874.6,655 V662 A8,8 0 0 1 866.6,670 H740.21" />
      <path class="fig-route" data-part="loop" d="M229.79,670 H103.4 A8,8 0 0 1 95.4,662 V655 M91.9,658.5 L95.4,655 L98.9,658.5" />
      <g data-part="decision">
      <rect class="fig-box" x="235.79" y="659" width="498.42" height="22" rx="11" stroke-dasharray="5 3.52" opacity="0.5" />
      <circle class="fig-line" cx="249.79" cy="670" r="2.3" />
      <text class="fig-t" x="257.79" y="674.2">Decision API</text>
      <text class="fig-s" x="340.68" y="673.6">trained on our own lab data · grows out from a trusted zone · asks why, not who is right</text>
      </g>
      <rect class="fig-box-em lab-hit" data-part="loop" x="10" y="587" width="950" height="64" rx="10" />
      <rect class="fig-box-em lab-hit" data-part="decision" x="235.79" y="659" width="498.42" height="22" rx="11" />
      <!-- Legend -->
      <circle class="fig-dot-em" cx="779.07" cy="571.5" r="2.6" />
      <text class="fig-s" x="786.47" y="575">built</text>
      <circle class="fig-line" cx="827.41" cy="571.5" r="2.3" />
      <text class="fig-s" x="834.81" y="575">planned</text>
      <rect class="fig-box" x="890.41" y="565" width="18" height="12" rx="3" stroke-dasharray="3 1.99" opacity="0.5" />
      <text class="fig-s" x="914.41" y="575">future part</text>
    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the diagram sideways →</p>

  <p class="about-figure-caption">
    Today's self-driving labs mostly train an athlete to drill the same moves. A lab agent that
    understands the chemistry behind each protocol step could plan better and find strategies people
    don't expect.
  </p>

  <div class="about-figure-bridge">
    <p class="about-figure-kicker">Planned: a recursive self-improvement loop</p>
    <p class="about-figure-hint-link">One lit path through a quiet field: the agent improves itself only through steps it can check. Hover or tap to trace it.</p>
  </div>

  <figure class="about-figure rsi-figure">
    <style>
      .rsi-figure .rsi-edge { fill: none; stroke: var(--about-map-line); stroke-width: 1; opacity: 0.3; }
      .rsi-figure .rsi-node { fill: var(--about-map-line); stroke: none; opacity: 0.5; }
      .rsi-figure .rsi-ring { fill: var(--global-bg-color); stroke: var(--global-theme-color); stroke-width: 1.8; }
      .rsi-figure .rsi-core { fill: var(--global-theme-color); stroke: none; }
      .rsi-figure .rsi-path { fill: none; stroke: var(--global-theme-color); stroke-width: 1.8; stroke-linecap: round; }
      .rsi-figure .rsi-label { font-size: 12px; font-weight: 700; fill: var(--global-theme-color); }
      .rsi-figure .rsi-sub { font-size: 10px; fill: var(--about-ink-muted); }
      .rsi-figure .rsi-h { font-size: 9.5px; font-weight: 600; letter-spacing: 0.14em; fill: var(--about-ink-muted); }
      .rsi-figure .rsi-arrow-head { fill: var(--global-theme-color); }
      @media (hover: hover) and (prefers-reduced-motion: no-preference) {
        .rsi-figure:hover .rsi-path { stroke-dasharray: 7 6; animation: rsi-trace 0.9s linear infinite; }
      }
      @keyframes rsi-trace { to { stroke-dashoffset: -13; } }
    </style>
    <svg class="rsi-loop" viewBox="0 0 972 420" role="img" aria-labelledby="rsi-fig-title rsi-fig-desc">
      <title id="rsi-fig-title">Recursive self-improvement loop (planned)</title>
      <desc id="rsi-fig-desc">
        A quiet field of faint gray nodes and edges, with one highlighted path in the
        accent color tracing a cycle: generate new data, verify it with the Lean checker,
        SQL checks, protocol checks and simulation, keep only what passes, train on it,
        expand the trusted regime where bench results confirm it, then generate again.
        Planned.
      </desc>
      <defs>
        <marker id="rsi-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path class="rsi-arrow-head" d="M0,1 L9,5 L0,9 Z" />
        </marker>
      </defs>
      <text class="rsi-h" x="24" y="24">RECURSIVE SELF-IMPROVEMENT — PLANNED</text>
      <!-- faint neuron field (backdrop) -->
      <g class="rsi-field">
        <line class="rsi-edge" x1="614.8" y1="38.9" x2="586.7" y2="84.4" />
        <line class="rsi-edge" x1="614.8" y1="38.9" x2="675.0" y2="46.3" />
        <line class="rsi-edge" x1="278.1" y1="109.5" x2="315.5" y2="125.3" />
        <line class="rsi-edge" x1="278.1" y1="109.5" x2="254.6" y2="66.6" />
        <line class="rsi-edge" x1="704.5" y1="270.9" x2="717.9" y2="304.1" />
        <line class="rsi-edge" x1="704.5" y1="270.9" x2="728.6" y2="222.0" />
        <line class="rsi-edge" x1="848.4" y1="61.0" x2="818.3" y2="55.2" />
        <line class="rsi-edge" x1="848.4" y1="61.0" x2="891.9" y2="71.1" />
        <line class="rsi-edge" x1="413.9" y1="40.6" x2="360.5" y2="54.9" />
        <line class="rsi-edge" x1="413.9" y1="40.6" x2="415.0" y2="105.4" />
        <line class="rsi-edge" x1="226.0" y1="209.9" x2="244.5" y2="170.9" />
        <line class="rsi-edge" x1="226.0" y1="209.9" x2="270.5" y2="258.2" />
        <line class="rsi-edge" x1="48.5" y1="100.8" x2="24.5" y2="145.4" />
        <line class="rsi-edge" x1="48.5" y1="100.8" x2="97.7" y2="112.9" />
        <line class="rsi-edge" x1="624.5" y1="224.0" x2="584.1" y2="212.1" />
        <line class="rsi-edge" x1="624.5" y1="224.0" x2="611.4" y2="159.9" />
        <line class="rsi-edge" x1="771.9" y1="32.3" x2="818.3" y2="55.2" />
        <line class="rsi-edge" x1="771.9" y1="32.3" x2="731.6" y2="75.7" />
        <line class="rsi-edge" x1="338.4" y1="85.4" x2="366.0" y2="104.6" />
        <line class="rsi-edge" x1="338.4" y1="85.4" x2="360.5" y2="54.9" />
        <line class="rsi-edge" x1="908.5" y1="149.8" x2="920.7" y2="93.6" />
        <line class="rsi-edge" x1="908.5" y1="149.8" x2="869.0" y2="193.4" />
        <line class="rsi-edge" x1="109.7" y1="64.4" x2="148.1" y2="71.1" />
        <line class="rsi-edge" x1="109.7" y1="64.4" x2="97.7" y2="112.9" />
        <line class="rsi-edge" x1="373.8" y1="226.5" x2="399.5" y2="251.0" />
        <line class="rsi-edge" x1="373.8" y1="226.5" x2="336.4" y2="239.4" />
        <line class="rsi-edge" x1="820.2" y1="235.5" x2="791.4" y2="225.0" />
        <line class="rsi-edge" x1="820.2" y1="235.5" x2="859.2" y2="224.2" />
        <line class="rsi-edge" x1="675.0" y1="46.3" x2="687.1" y2="102.5" />
        <line class="rsi-edge" x1="97.7" y1="112.9" x2="135.8" y2="110.0" />
        <line class="rsi-edge" x1="611.4" y1="159.9" x2="610.0" y2="124.0" />
        <line class="rsi-edge" x1="611.4" y1="159.9" x2="644.6" y2="136.8" />
        <line class="rsi-edge" x1="366.0" y1="104.6" x2="415.0" y2="105.4" />
        <line class="rsi-edge" x1="270.7" y1="363.4" x2="308.8" y2="350.0" />
        <line class="rsi-edge" x1="270.7" y1="363.4" x2="218.9" y2="365.7" />
        <line class="rsi-edge" x1="938.3" y1="257.8" x2="945.7" y2="211.4" />
        <line class="rsi-edge" x1="938.3" y1="257.8" x2="892.9" y2="271.1" />
        <line class="rsi-edge" x1="538.6" y1="273.7" x2="573.8" y2="270.4" />
        <line class="rsi-edge" x1="538.6" y1="273.7" x2="584.1" y2="212.1" />
        <line class="rsi-edge" x1="235.6" y1="41.4" x2="254.6" y2="66.6" />
        <line class="rsi-edge" x1="235.6" y1="41.4" x2="222.0" y2="77.1" />
        <line class="rsi-edge" x1="315.5" y1="125.3" x2="338.4" y2="85.4" />
        <line class="rsi-edge" x1="218.9" y1="365.7" x2="169.5" y2="372.0" />
        <line class="rsi-edge" x1="869.0" y1="193.4" x2="859.2" y2="224.2" />
        <line class="rsi-edge" x1="869.0" y1="193.4" x2="888.4" y2="233.3" />
        <line class="rsi-edge" x1="542.7" y1="123.5" x2="586.7" y2="84.4" />
        <line class="rsi-edge" x1="542.7" y1="123.5" x2="610.0" y2="124.0" />
        <line class="rsi-edge" x1="564.2" y1="349.6" x2="589.2" y2="381.5" />
        <line class="rsi-edge" x1="564.2" y1="349.6" x2="637.0" y2="364.3" />
        <line class="rsi-edge" x1="945.7" y1="211.4" x2="888.4" y2="233.3" />
        <line class="rsi-edge" x1="125.3" y1="253.4" x2="89.6" y2="254.7" />
        <line class="rsi-edge" x1="125.3" y1="253.4" x2="103.1" y2="203.0" />
        <line class="rsi-edge" x1="82.7" y1="165.9" x2="103.1" y2="203.0" />
        <line class="rsi-edge" x1="82.7" y1="165.9" x2="127.1" y2="184.8" />
        <line class="rsi-edge" x1="921.3" y1="336.4" x2="908.6" y2="384.4" />
        <line class="rsi-edge" x1="921.3" y1="336.4" x2="867.3" y2="339.9" />
        <line class="rsi-edge" x1="34.6" y1="286.6" x2="88.0" y2="300.8" />
        <line class="rsi-edge" x1="34.6" y1="286.6" x2="89.6" y2="254.7" />
        <line class="rsi-edge" x1="270.5" y1="258.2" x2="302.1" y2="225.1" />
        <line class="rsi-edge" x1="270.5" y1="258.2" x2="269.0" y2="309.1" />
        <line class="rsi-edge" x1="127.1" y1="184.8" x2="103.1" y2="203.0" />
        <line class="rsi-edge" x1="867.3" y1="339.9" x2="835.9" y2="326.1" />
        <line class="rsi-edge" x1="867.3" y1="339.9" x2="835.3" y2="367.1" />
        <line class="rsi-edge" x1="586.7" y1="84.4" x2="610.0" y2="124.0" />
        <line class="rsi-edge" x1="728.6" y1="222.0" x2="688.6" y2="209.7" />
        <line class="rsi-edge" x1="24.5" y1="145.4" x2="82.7" y2="165.9" />
        <line class="rsi-edge" x1="42.0" y1="360.8" x2="93.5" y2="344.4" />
        <line class="rsi-edge" x1="42.0" y1="360.8" x2="34.6" y2="286.6" />
        <line class="rsi-edge" x1="835.9" y1="326.1" x2="835.3" y2="367.1" />
        <line class="rsi-edge" x1="308.1" y1="50.6" x2="338.4" y2="85.4" />
        <line class="rsi-edge" x1="308.1" y1="50.6" x2="360.5" y2="54.9" />
        <line class="rsi-edge" x1="88.0" y1="300.8" x2="93.5" y2="344.4" />
        <line class="rsi-edge" x1="88.0" y1="300.8" x2="89.6" y2="254.7" />
        <line class="rsi-edge" x1="731.6" y1="75.7" x2="687.1" y2="102.5" />
        <line class="rsi-edge" x1="463.2" y1="225.7" x2="428.8" y2="214.3" />
        <line class="rsi-edge" x1="463.2" y1="225.7" x2="444.4" y2="180.6" />
        <line class="rsi-edge" x1="415.0" y1="105.4" x2="449.3" y2="138.6" />
        <line class="rsi-edge" x1="428.8" y1="214.3" x2="444.4" y2="180.6" />
        <line class="rsi-edge" x1="135.8" y1="110.0" x2="148.1" y2="71.1" />
        <line class="rsi-edge" x1="336.4" y1="239.4" x2="302.1" y2="225.1" />
        <line class="rsi-edge" x1="222.0" y1="77.1" x2="254.6" y2="66.6" />
        <line class="rsi-edge" x1="888.4" y1="233.3" x2="859.2" y2="224.2" />
        <line class="rsi-edge" x1="888.4" y1="233.3" x2="892.9" y2="271.1" />
        <line class="rsi-edge" x1="933.4" y1="65.0" x2="920.7" y2="93.6" />
        <line class="rsi-edge" x1="933.4" y1="65.0" x2="891.9" y2="71.1" />
        <line class="rsi-edge" x1="396.0" y1="150.8" x2="415.0" y2="105.4" />
        <line class="rsi-edge" x1="396.0" y1="150.8" x2="449.3" y2="138.6" />
        <line class="rsi-edge" x1="374.2" y1="380.8" x2="308.8" y2="350.0" />
        <line class="rsi-edge" x1="269.0" y1="309.1" x2="316.1" y2="297.7" />
        <line class="rsi-edge" x1="444.4" y1="180.6" x2="449.3" y2="138.6" />
        <line class="rsi-edge" x1="908.6" y1="384.4" x2="946.6" y2="384.6" />
        <line class="rsi-edge" x1="573.8" y1="270.4" x2="584.1" y2="212.1" />
        <line class="rsi-edge" x1="846.6" y1="117.7" x2="848.4" y2="61.0" />
        <line class="rsi-edge" x1="846.6" y1="117.7" x2="891.9" y2="71.1" />
        <line class="rsi-edge" x1="244.5" y1="170.9" x2="309.8" y2="175.4" />
        <line class="rsi-edge" x1="644.6" y1="136.8" x2="610.0" y2="124.0" />
        <line class="rsi-edge" x1="316.1" y1="297.7" x2="308.8" y2="350.0" />
        <line class="rsi-edge" x1="946.6" y1="384.6" x2="921.3" y2="336.4" />
        <line class="rsi-edge" x1="589.2" y1="381.5" x2="637.0" y2="364.3" />
        <line class="rsi-edge" x1="687.1" y1="102.5" x2="697.2" y2="141.7" />
        <line class="rsi-edge" x1="744.8" y1="344.8" x2="717.9" y2="304.1" />
        <line class="rsi-edge" x1="399.5" y1="251.0" x2="428.8" y2="214.3" />
        <line class="rsi-edge" x1="891.9" y1="71.1" x2="920.7" y2="93.6" />
        <line class="rsi-edge" x1="697.2" y1="141.7" x2="644.6" y2="136.8" />
        <line class="rsi-edge" x1="584.1" y1="212.1" x2="611.4" y2="159.9" />
        <line class="rsi-edge" x1="360.5" y1="54.9" x2="366.0" y2="104.6" />
        <line class="rsi-edge" x1="309.8" y1="175.4" x2="302.1" y2="225.1" />
        <line class="rsi-edge" x1="309.8" y1="175.4" x2="315.5" y2="125.3" />
        <line class="rsi-edge" x1="688.6" y1="209.7" x2="704.5" y2="270.9" />
        <line class="rsi-edge" x1="791.4" y1="225.0" x2="728.6" y2="222.0" />
        <circle class="rsi-node" cx="614.8" cy="38.9" r="2.7" />
        <circle class="rsi-node" cx="278.1" cy="109.5" r="2.5" />
        <circle class="rsi-node" cx="704.5" cy="270.9" r="2.2" />
        <circle class="rsi-node" cx="848.4" cy="61.0" r="1.9" />
        <circle class="rsi-node" cx="413.9" cy="40.6" r="1.9" />
        <circle class="rsi-node" cx="226.0" cy="209.9" r="2.4" />
        <circle class="rsi-node" cx="48.5" cy="100.8" r="2.5" />
        <circle class="rsi-node" cx="624.5" cy="224.0" r="2.2" />
        <circle class="rsi-node" cx="771.9" cy="32.3" r="2.4" />
        <circle class="rsi-node" cx="338.4" cy="85.4" r="1.9" />
        <circle class="rsi-node" cx="908.5" cy="149.8" r="1.7" />
        <circle class="rsi-node" cx="109.7" cy="64.4" r="1.9" />
        <circle class="rsi-node" cx="373.8" cy="226.5" r="1.9" />
        <circle class="rsi-node" cx="820.2" cy="235.5" r="2.0" />
        <circle class="rsi-node" cx="675.0" cy="46.3" r="2.2" />
        <circle class="rsi-node" cx="97.7" cy="112.9" r="1.8" />
        <circle class="rsi-node" cx="611.4" cy="159.9" r="1.9" />
        <circle class="rsi-node" cx="366.0" cy="104.6" r="2.4" />
        <circle class="rsi-node" cx="270.7" cy="363.4" r="2.4" />
        <circle class="rsi-node" cx="938.3" cy="257.8" r="1.7" />
        <circle class="rsi-node" cx="538.6" cy="273.7" r="2.1" />
        <circle class="rsi-node" cx="235.6" cy="41.4" r="2.3" />
        <circle class="rsi-node" cx="315.5" cy="125.3" r="2.1" />
        <circle class="rsi-node" cx="218.9" cy="365.7" r="1.8" />
        <circle class="rsi-node" cx="869.0" cy="193.4" r="2.1" />
        <circle class="rsi-node" cx="542.7" cy="123.5" r="2.7" />
        <circle class="rsi-node" cx="564.2" cy="349.6" r="2.3" />
        <circle class="rsi-node" cx="945.7" cy="211.4" r="2.4" />
        <circle class="rsi-node" cx="125.3" cy="253.4" r="2.6" />
        <circle class="rsi-node" cx="82.7" cy="165.9" r="2.5" />
        <circle class="rsi-node" cx="921.3" cy="336.4" r="2.1" />
        <circle class="rsi-node" cx="34.6" cy="286.6" r="1.6" />
        <circle class="rsi-node" cx="270.5" cy="258.2" r="2.0" />
        <circle class="rsi-node" cx="127.1" cy="184.8" r="2.5" />
        <circle class="rsi-node" cx="867.3" cy="339.9" r="2.6" />
        <circle class="rsi-node" cx="586.7" cy="84.4" r="2.7" />
        <circle class="rsi-node" cx="728.6" cy="222.0" r="2.1" />
        <circle class="rsi-node" cx="24.5" cy="145.4" r="2.5" />
        <circle class="rsi-node" cx="42.0" cy="360.8" r="2.3" />
        <circle class="rsi-node" cx="835.9" cy="326.1" r="2.3" />
        <circle class="rsi-node" cx="308.1" cy="50.6" r="1.9" />
        <circle class="rsi-node" cx="835.3" cy="367.1" r="1.9" />
        <circle class="rsi-node" cx="103.1" cy="203.0" r="2.1" />
        <circle class="rsi-node" cx="88.0" cy="300.8" r="1.6" />
        <circle class="rsi-node" cx="731.6" cy="75.7" r="2.0" />
        <circle class="rsi-node" cx="463.2" cy="225.7" r="2.4" />
        <circle class="rsi-node" cx="415.0" cy="105.4" r="2.1" />
        <circle class="rsi-node" cx="428.8" cy="214.3" r="1.8" />
        <circle class="rsi-node" cx="135.8" cy="110.0" r="2.2" />
        <circle class="rsi-node" cx="336.4" cy="239.4" r="1.8" />
        <circle class="rsi-node" cx="89.6" cy="254.7" r="2.3" />
        <circle class="rsi-node" cx="818.3" cy="55.2" r="1.6" />
        <circle class="rsi-node" cx="222.0" cy="77.1" r="2.1" />
        <circle class="rsi-node" cx="888.4" cy="233.3" r="2.3" />
        <circle class="rsi-node" cx="933.4" cy="65.0" r="1.6" />
        <circle class="rsi-node" cx="396.0" cy="150.8" r="2.4" />
        <circle class="rsi-node" cx="374.2" cy="380.8" r="1.8" />
        <circle class="rsi-node" cx="269.0" cy="309.1" r="2.2" />
        <circle class="rsi-node" cx="444.4" cy="180.6" r="1.7" />
        <circle class="rsi-node" cx="908.6" cy="384.4" r="2.1" />
        <circle class="rsi-node" cx="169.5" cy="372.0" r="1.9" />
        <circle class="rsi-node" cx="573.8" cy="270.4" r="2.0" />
        <circle class="rsi-node" cx="846.6" cy="117.7" r="2.5" />
        <circle class="rsi-node" cx="244.5" cy="170.9" r="2.1" />
        <circle class="rsi-node" cx="644.6" cy="136.8" r="2.5" />
        <circle class="rsi-node" cx="316.1" cy="297.7" r="2.6" />
        <circle class="rsi-node" cx="946.6" cy="384.6" r="1.9" />
        <circle class="rsi-node" cx="589.2" cy="381.5" r="1.7" />
        <circle class="rsi-node" cx="637.0" cy="364.3" r="1.6" />
        <circle class="rsi-node" cx="148.1" cy="71.1" r="2.2" />
        <circle class="rsi-node" cx="687.1" cy="102.5" r="2.8" />
        <circle class="rsi-node" cx="610.0" cy="124.0" r="2.0" />
        <circle class="rsi-node" cx="93.5" cy="344.4" r="2.4" />
        <circle class="rsi-node" cx="859.2" cy="224.2" r="2.5" />
        <circle class="rsi-node" cx="308.8" cy="350.0" r="2.4" />
        <circle class="rsi-node" cx="254.6" cy="66.6" r="2.5" />
        <circle class="rsi-node" cx="744.8" cy="344.8" r="2.7" />
        <circle class="rsi-node" cx="399.5" cy="251.0" r="1.8" />
        <circle class="rsi-node" cx="449.3" cy="138.6" r="1.6" />
        <circle class="rsi-node" cx="891.9" cy="71.1" r="1.8" />
        <circle class="rsi-node" cx="920.7" cy="93.6" r="1.8" />
        <circle class="rsi-node" cx="697.2" cy="141.7" r="2.4" />
        <circle class="rsi-node" cx="584.1" cy="212.1" r="2.3" />
        <circle class="rsi-node" cx="360.5" cy="54.9" r="1.9" />
        <circle class="rsi-node" cx="309.8" cy="175.4" r="2.4" />
        <circle class="rsi-node" cx="892.9" cy="271.1" r="2.5" />
        <circle class="rsi-node" cx="302.1" cy="225.1" r="1.8" />
        <circle class="rsi-node" cx="717.9" cy="304.1" r="2.3" />
        <circle class="rsi-node" cx="688.6" cy="209.7" r="2.5" />
        <circle class="rsi-node" cx="791.4" cy="225.0" r="1.7" />
      </g>
      <!-- highlighted RSI loop -->
      <g class="rsi-loop-path">
        <path class="rsi-path" d="M511.3,75.9 L752.7,132.1" marker-end="url(#rsi-arrow)" />
        <path class="rsi-path" d="M778.0,164.0 L778.0,256.0" marker-end="url(#rsi-arrow)" />
        <path class="rsi-path" d="M752.7,287.9 L511.3,344.1" marker-end="url(#rsi-arrow)" />
        <path class="rsi-path" d="M460.7,344.1 L219.3,287.9" marker-end="url(#rsi-arrow)" />
        <path class="rsi-path" d="M188,256 C110,230 100,150 460.4,74.7" marker-end="url(#rsi-arrow)" />
      </g>
      <!-- lit nodes -->
      <g class="rsi-nodes">
        <circle class="rsi-ring" cx="486" cy="70" r="11" /><circle class="rsi-core" cx="486" cy="70" r="3" />
        <text class="rsi-label" x="486" y="42" text-anchor="middle">Generate</text>
        <text class="rsi-sub" x="486" y="55" text-anchor="middle">new data</text>

        <circle class="rsi-ring" cx="778" cy="138" r="11" /><circle class="rsi-core" cx="778" cy="138" r="3" />
        <text class="rsi-label" x="796" y="135" text-anchor="start">Verify</text>
        <text class="rsi-sub" x="796" y="149" text-anchor="start">Lean · SQL · protocol · sim</text>

        <circle class="rsi-ring" cx="778" cy="282" r="11" /><circle class="rsi-core" cx="778" cy="282" r="3" />
        <text class="rsi-label" x="796" y="279" text-anchor="start">Keep</text>
        <text class="rsi-sub" x="796" y="293" text-anchor="start">verified only</text>

        <circle class="rsi-ring" cx="486" cy="350" r="11" /><circle class="rsi-core" cx="486" cy="350" r="3" />
        <text class="rsi-label" x="486" y="382" text-anchor="middle">Train</text>
        <text class="rsi-sub" x="486" y="396" text-anchor="middle">SFT · GRPO on what passed</text>

        <circle class="rsi-ring" cx="194" cy="282" r="11" /><circle class="rsi-core" cx="194" cy="282" r="3" />
        <text class="rsi-label" x="176" y="279" text-anchor="end">Expand truth regime</text>
        <text class="rsi-sub" x="176" y="293" text-anchor="end">where bench confirms</text>
      </g>
    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the diagram sideways →</p>

  <p class="about-figure-caption">
    Planned. The agent writes new data, keeps only steps that pass the Lean checker, SQL and
    protocol checks and simulation, trains on what it kept, and widens the trusted regime only
    where bench results confirm it — then repeats. A human signs off each round.
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
