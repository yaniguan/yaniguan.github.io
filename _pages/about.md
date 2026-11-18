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

      <rect class="fig-box" x="22" y="48" width="172" height="44" rx="4" />
      <text class="fig-t" x="32" y="66">Papers</text>
      <text class="fig-s" x="32" y="81">methods, results, claims</text>

      <rect class="fig-box" x="22" y="118" width="172" height="44" rx="4" />
      <text class="fig-t" x="32" y="136">Structure drawings</text>
      <text class="fig-s" x="32" y="151">figures in the literature</text>

      <rect class="fig-box" x="22" y="188" width="172" height="44" rx="4" />
      <text class="fig-t" x="32" y="206">Multi-scale simulation</text>
      <text class="fig-s" x="32" y="221">DFT · MD · kMC · P2D</text>

      <path class="fig-line" d="M200,70 H242" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M200,140 H242" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M200,210 H242" marker-end="url(#fig-arrow)" />

      <!-- Column B: one encoder per form, matched to its symmetry -->
      <text class="fig-h" x="236" y="22">ENCODER · MATCHED SYMMETRY</text>
      <rect class="fig-panel" x="236" y="32" width="260" height="214" rx="6" />

      <rect class="fig-box" x="248" y="48" width="236" height="44" rx="4" />
      <text class="fig-t" x="258" y="66">Language model</text>
      <text class="fig-s" x="258" y="81">tokens · no geometric group</text>

      <rect class="fig-box" x="248" y="118" width="236" height="44" rx="4" />
      <text class="fig-t" x="258" y="136">SE(2)-equivariant encoders</text>
      <text class="fig-s" x="258" y="151">C<tspan baseline-shift="sub" font-size="7">N</tspan> steerable CNN · Ouroboros · VERDICT</text>

      <rect class="fig-box" x="248" y="188" width="236" height="44" rx="4" />
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

      <rect class="fig-box" x="544" y="52" width="146" height="44" rx="4" />
      <text class="fig-t" x="554" y="70">Irreps-to-text</text>
      <text class="fig-s" x="554" y="85">YLM · text queries l ≥ 1</text>

      <rect class="fig-box" x="544" y="118" width="146" height="44" rx="4" />
      <text class="fig-t" x="554" y="136">Contrastive alignment</text>
      <text class="fig-s" x="554" y="151">one latent space</text>

      <rect class="fig-box" x="544" y="188" width="146" height="44" rx="4" />
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

      <rect class="fig-box-em" x="734" y="188" width="214" height="44" rx="4" />
      <text class="fig-t-em" x="744" y="206">CO-SCIENTIST</text>
      <text class="fig-s" x="744" y="221">DeepSeek Harness · default-deny jobs</text>

      <path class="fig-line" d="M841,92 V114" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M841,162 V184" marker-end="url(#fig-arrow)" />

      <!-- Feedback loop -->
      <path class="fig-line" d="M841,232 V262 Q841,270 833,270 H116 Q108,270 108,262 V236" marker-end="url(#fig-arrow)" />
      <text class="fig-s" x="475" y="287" text-anchor="middle">proposes the next simulation — and submits the jobs that check it</text>

      <!-- Compute: under every stage -->
      <text class="fig-h" x="10" y="310">COMPUTE</text>
      <rect class="fig-panel" x="10" y="318" width="950" height="36" rx="6" />
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
  <h2 class="about-section-title">Vision: a lab agent that understands chemistry</h2>

  <figure class="about-figure">
    <svg viewBox="0 0 960 410" role="img" aria-labelledby="lab-fig-title lab-fig-desc">
      <title id="lab-fig-title">A lab agent that understands chemistry</title>
      <desc id="lab-fig-desc">
        A line drawing of a robot whose parts map to the work. Brain: YLM, a molecular
        language model for protocol QA, step debugging, experiment design and workflow
        generation, with molecular retrieval as memory. Eyes: OCSR reads structures from
        paper figures, later spectra, plots, tables and a lab camera. Ears: protocols,
        literature, scientist instructions and instrument signals. First principles: DFT
        as the teacher, distilled into small models. Physics intuition: WignerFlow learned
        dynamics and failure-gated force fields. Body: a harness with planner, scheduler
        and default-deny safety gates. Hands: robot arm, pipetting and instrument code.
        Feet: train in cloud bursts, then distill and quantize to run on the edge.
        Solid marks are built; hollow marks and dashed boxes are planned.
      </desc>

      <!-- Robot -->
      <path class="fig-route" d="M480,52 V36" />
      <circle class="fig-route" cx="480" cy="30" r="6" />
      <ellipse class="fig-line" cx="480" cy="30" rx="12" ry="4.5" />
      <rect class="fig-route" x="420" y="52" width="120" height="92" rx="16" />
      <path class="fig-route" d="M442,72 q0,-10 12,-10 q4,-6 14,-2 q10,-6 18,0 q12,-4 16,4 q12,0 12,10" />
      <path class="fig-line" d="M466,62 v10 M490,60 v12 M442,72 H518" />
      <circle class="fig-route" cx="456" cy="100" r="10" />
      <circle class="fig-route" cx="504" cy="100" r="10" />
      <circle class="fig-dot" cx="456" cy="100" r="3.2" />
      <circle class="fig-dot" cx="504" cy="100" r="3.2" />
      <path class="fig-route" d="M466,126 q14,8 28,0" />
      <rect class="fig-route" x="408" y="84" width="12" height="30" rx="5" />
      <rect class="fig-route" x="540" y="84" width="12" height="30" rx="5" />
      <path class="fig-route" d="M468,144 V158 M492,144 V158" />
      <rect class="fig-route" x="414" y="158" width="132" height="128" rx="14" />
      <circle class="fig-route" cx="480" cy="204" r="16" />
      <ellipse class="fig-line" cx="480" cy="204" rx="16" ry="6" transform="rotate(30 480 204)" />
      <ellipse class="fig-line" cx="480" cy="204" rx="16" ry="6" transform="rotate(-30 480 204)" />
      <circle class="fig-dot" cx="480" cy="204" r="2.4" />
      <path class="fig-line" d="M446,244 H514 M446,256 H498 M446,268 H506" />
      <path class="fig-route" d="M414,176 Q376,196 370,250 L368,300" />
      <path class="fig-route" d="M546,176 Q584,196 590,250 L592,300" />
      <path class="fig-route" d="M359,314 V304 Q359,300 363,300 H373 Q377,300 377,304 V314" />
      <path class="fig-route" d="M583,314 V304 Q583,300 587,300 H597 Q601,300 601,304 V314" />
      <path class="fig-route" d="M450,286 V352 M510,286 V352" />
      <path class="fig-route" d="M428,366 Q428,352 444,352 H466 Q472,352 472,366 Z" />
      <path class="fig-route" d="M488,366 Q488,352 494,352 H516 Q532,352 532,366 Z" />
      <path class="fig-line-soft" d="M380,372 H580" />

      <!-- Leaders -->
      <path class="fig-line-soft" d="M290,66 H314 L450,66" />
      <circle class="fig-dot" cx="450" cy="66" r="2" />
      <path class="fig-line-soft" d="M290,160 H314 L408,99" />
      <circle class="fig-dot" cx="408" cy="99" r="2" />
      <path class="fig-line-soft" d="M290,254 H314 L446,100" />
      <circle class="fig-dot" cx="446" cy="100" r="2" />
      <path class="fig-line-soft" d="M290,340 H314 L359,309" />
      <circle class="fig-dot" cx="359" cy="309" r="2" />
      <path class="fig-line-soft" d="M670,58 H646 L492,30" />
      <circle class="fig-dot" cx="492" cy="30" r="2" />
      <path class="fig-line-soft" d="M670,152 H646 L496,204" />
      <circle class="fig-dot" cx="496" cy="204" r="2" />
      <path class="fig-line-soft" d="M670,246 H646 L514,256" />
      <circle class="fig-dot" cx="514" cy="256" r="2" />
      <path class="fig-line-soft" d="M670,340 H646 L532,362" />
      <circle class="fig-dot" cx="532" cy="362" r="2" />

      <rect class="fig-box" x="10" y="30" width="280" height="71" rx="4" />
      <text class="fig-t" x="22" y="48">Brain · YLM</text>
      <circle class="fig-line" cx="25" cy="60.5" r="2.4" />
      <text class="fig-s" x="34" y="64">Protocol QA and step debugging</text>
      <circle class="fig-line" cx="25" cy="75.5" r="2.4" />
      <text class="fig-s" x="34" y="79">Experiment design and workflow generation</text>
      <circle class="fig-dot" cx="25" cy="90.5" r="2.4" />
      <text class="fig-s" x="34" y="94">Memory: molecular retrieval (text · SMILES · 3D)</text>
      <rect class="fig-box" x="10" y="124" width="280" height="71" rx="4" stroke-dasharray="4 3" />
      <text class="fig-t" x="22" y="142">Ears</text>
      <circle class="fig-line" cx="25" cy="154.5" r="2.4" />
      <text class="fig-s" x="34" y="158">Protocols and literature</text>
      <circle class="fig-line" cx="25" cy="169.5" r="2.4" />
      <text class="fig-s" x="34" y="173">Scientist instructions by voice or chat</text>
      <circle class="fig-line" cx="25" cy="184.5" r="2.4" />
      <text class="fig-s" x="34" y="188">Instrument signals and alarms</text>
      <rect class="fig-box" x="10" y="218" width="280" height="71" rx="4" />
      <text class="fig-t" x="22" y="236">Eyes · OCSR</text>
      <circle class="fig-dot" cx="25" cy="248.5" r="2.4" />
      <text class="fig-s" x="34" y="252">Structures from paper figures</text>
      <circle class="fig-line" cx="25" cy="263.5" r="2.4" />
      <text class="fig-s" x="34" y="267">Spectra, plots and tables</text>
      <circle class="fig-line" cx="25" cy="278.5" r="2.4" />
      <text class="fig-s" x="34" y="282">Lab camera: color, liquid level, bubbles</text>
      <rect class="fig-box" x="10" y="312" width="280" height="56" rx="4" stroke-dasharray="4 3" />
      <text class="fig-t" x="22" y="330">Hands</text>
      <circle class="fig-line" cx="25" cy="342.5" r="2.4" />
      <text class="fig-s" x="34" y="346">Robot arm and pipetting</text>
      <circle class="fig-line" cx="25" cy="357.5" r="2.4" />
      <text class="fig-s" x="34" y="361">Instrument code, e.g. liquid-handler scripts</text>
      <rect class="fig-box" x="670" y="30" width="280" height="56" rx="4" />
      <text class="fig-t" x="682" y="48">First principles</text>
      <circle class="fig-dot" cx="685" cy="60.5" r="2.4" />
      <text class="fig-s" x="694" y="64">DFT and quantum chemistry as the teacher</text>
      <circle class="fig-line" cx="685" cy="75.5" r="2.4" />
      <text class="fig-s" x="694" y="79">Distill into small, fast models</text>
      <rect class="fig-box" x="670" y="124" width="280" height="56" rx="4" />
      <text class="fig-t" x="682" y="142">Physics intuition · WignerFlow</text>
      <circle class="fig-dot" cx="685" cy="154.5" r="2.4" />
      <text class="fig-s" x="694" y="158">Learned dynamics as a cheap MD surrogate</text>
      <circle class="fig-dot" cx="685" cy="169.5" r="2.4" />
      <text class="fig-s" x="694" y="173">Force fields with failure gates</text>
      <rect class="fig-box" x="670" y="218" width="280" height="56" rx="4" />
      <text class="fig-t" x="682" y="236">Body · harness</text>
      <circle class="fig-dot" cx="685" cy="248.5" r="2.4" />
      <text class="fig-s" x="694" y="252">Planner, scheduler and job log</text>
      <circle class="fig-dot" cx="685" cy="263.5" r="2.4" />
      <text class="fig-s" x="694" y="267">Safety gates: default-deny before any run</text>
      <rect class="fig-box" x="670" y="312" width="280" height="56" rx="4" stroke-dasharray="4 3" />
      <text class="fig-t" x="682" y="330">Feet · deployment</text>
      <circle class="fig-line" cx="685" cy="342.5" r="2.4" />
      <text class="fig-s" x="694" y="346">Train in short cloud GPU bursts</text>
      <circle class="fig-line" cx="685" cy="357.5" r="2.4" />
      <text class="fig-s" x="694" y="361">Distill and quantize to run on the edge</text>

      <!-- Legend -->
      <circle class="fig-dot" cx="300" cy="396" r="2.4" />
      <text class="fig-s" x="308" y="399.5">built</text>
      <circle class="fig-line" cx="352" cy="396" r="2.4" />
      <text class="fig-s" x="360" y="399.5">planned</text>
      <rect class="fig-box" x="420" y="390" width="16" height="11" rx="2" />
      <text class="fig-s" x="442" y="399.5">existing part</text>
      <rect class="fig-box" x="520" y="390" width="16" height="11" rx="2" stroke-dasharray="3 2" />
      <text class="fig-s" x="542" y="399.5">future part</text>
    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the diagram sideways →</p>

  <p class="about-figure-caption">
    Today's self-driving labs mostly train an athlete to drill the same moves. A lab agent that
    understands the chemistry behind each protocol step could plan better and find strategies people
    don't expect.
  </p>

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
