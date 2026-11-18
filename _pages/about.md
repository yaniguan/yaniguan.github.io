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
    <svg viewBox="0 0 960 492" role="img" aria-labelledby="lab-fig-title lab-fig-desc">
      <title id="lab-fig-title">A lab agent that understands chemistry</title>
      <desc id="lab-fig-desc">
        A line drawing of a robot whose parts map to the work. Brain: YLM, with molecular
        memory over text, SMILES and 3D, and planned protocol QA, step debugging, experiment
        design and workflow writing. Ears, planned: protocols, papers, lab notes, scientist
        instructions and instrument signals. Eyes: OCSR reads structures from literature
        figures and checks itself by model consensus; spectra, plots and a lab camera are
        planned. Hands, planned: robot arm, pipetting and liquid-handler scripts. First
        principles: quantum chemistry as the teacher, later distilled into small models.
        Physics intuition: WignerFlow learned MD and force fields gated by past failures.
        Body: a bounded harness that plans, schedules and logs jobs behind a default-deny
        gate. Feet, planned: short cloud training bursts, then quantized models on the edge.
        Filled marks are built; hollow marks and dashed boxes are planned.
      </desc>

      <!-- Robot -->
      <path class="fig-route" d="M480,38 V24" />
      <circle class="fig-dot" cx="480" cy="16" r="3" />
      <ellipse class="fig-route" cx="480" cy="16" rx="13" ry="5" transform="rotate(25 480 16)" />
      <ellipse class="fig-route" cx="480" cy="16" rx="13" ry="5" transform="rotate(-25 480 16)" />
      <path class="fig-route" d="M434,84 A46,46 0 0 1 526,84" />
      <path class="fig-route" d="M478.5,50 C472,44 460,45 456,53 C448,55 447,68 454,72 C457,79 471,80 478.5,75 Z" />
      <path class="fig-route" d="M481.5,50 C488,44 500,45 504,53 C512,55 513,68 506,72 C503,79 489,80 481.5,75 Z" />
      <path class="fig-route" d="M469,55 Q463,60 469,65 M460,66 H466 M491,55 Q497,60 491,65 M500,66 H494" />
      <rect class="fig-route" x="414" y="84" width="132" height="96" rx="22" />
      <rect class="fig-route" x="432" y="102" width="96" height="52" rx="16" />
      <circle class="fig-route" cx="459" cy="124" r="8" />
      <circle class="fig-route" cx="501" cy="124" r="8" />
      <circle class="fig-dot" cx="459" cy="124" r="2.8" />
      <circle class="fig-dot" cx="501" cy="124" r="2.8" />
      <path class="fig-route" d="M471,141 Q480,146 489,141" />
      <rect class="fig-route" x="402" y="112" width="12" height="36" rx="6" />
      <path class="fig-route" d="M408,124 V136" />
      <rect class="fig-route" x="546" y="112" width="12" height="36" rx="6" />
      <path class="fig-route" d="M552,124 V136" />
      <path class="fig-route" d="M464,180 V194 M496,180 V194" />
      <rect class="fig-route" x="408" y="194" width="144" height="124" rx="22" />
      <circle class="fig-route" cx="480" cy="234" r="20" />
      <path class="fig-route" d="M467,234 C471,222 475,222 478,234 S485,246 488,234 S492,226 494,232" />
      <rect class="fig-route" x="440" y="268" width="80" height="32" rx="7" />
      <path class="fig-route" d="M452,279 H488 M452,289 H480" />
      <circle class="fig-dot" cx="504" cy="284" r="3" />
      <path class="fig-route" d="M408,212 H388" />
      <rect class="fig-route" x="372" y="204" width="16" height="96" rx="8" />
      <rect class="fig-route" x="371" y="300" width="18" height="9" rx="3" />
      <path class="fig-route" d="M552,212 H572" />
      <rect class="fig-route" x="572" y="204" width="16" height="96" rx="8" />
      <rect class="fig-route" x="571" y="300" width="18" height="9" rx="3" />
      <path class="fig-route" d="M374,309 V318 Q374,324 370,328 M386,309 V318 Q386,324 390,328" />
      <path class="fig-route" d="M574,309 V320 M586,309 V320" />
      <path class="fig-route" d="M576,314 V324 L565,348 Q563,352 568,352 H592 Q597,352 595,348 L584,324 V314" />
      <path class="fig-route" d="M569,340 H591" />
      <rect class="fig-route" x="444" y="318" width="16" height="70" rx="8" />
      <path class="fig-route" d="M432,404 V398 Q432,388 442,388 H450 Q460,388 460,398 V404 Z" />
      <rect class="fig-route" x="500" y="318" width="16" height="70" rx="8" />
      <path class="fig-route" d="M500,404 V398 Q500,388 510,388 H518 Q528,388 528,398 V404 Z" />
      <path class="fig-line-soft" d="M350,412 H610" />

      <!-- Leaders -->
      <path class="fig-line-soft" d="M296,57 H326 L446,64" />
      <circle class="fig-dot-em" cx="446" cy="64" r="2.4" />
      <path class="fig-line-soft" d="M296,171 H318 L402,136" />
      <circle class="fig-dot" cx="402" cy="136" r="2.4" />
      <path class="fig-line-soft" d="M296,285 H356 V192 L454,130" />
      <circle class="fig-dot-em" cx="454" cy="130" r="2.4" />
      <path class="fig-line-soft" d="M296,399 H318 L370,328" />
      <circle class="fig-dot" cx="370" cy="328" r="2.4" />
      <path class="fig-line-soft" d="M664,57 H642 L493,16" />
      <circle class="fig-dot-em" cx="493" cy="16" r="2.4" />
      <path class="fig-line-soft" d="M664,171 H624 L494,220" />
      <circle class="fig-dot-em" cx="494" cy="220" r="2.4" />
      <path class="fig-line-soft" d="M664,285 H640 L520,290" />
      <circle class="fig-dot-em" cx="520" cy="290" r="2.4" />
      <path class="fig-line-soft" d="M664,399 H642 L528,398" />
      <circle class="fig-dot" cx="528" cy="398" r="2.4" />

      <rect class="fig-box" x="24" y="24" width="272" height="102" rx="8" />
      <text class="fig-h" x="40" y="44">BRAIN</text>
      <text class="fig-t" x="40" y="61">YLM</text>
      <circle class="fig-dot-em" cx="43" cy="76.5" r="2.6" />
      <text class="fig-s" x="53" y="80">Molecular memory: text, SMILES, 3D</text>
      <circle class="fig-line" cx="43" cy="92.5" r="2.4" />
      <text class="fig-s" x="53" y="96">Protocol QA and step debugging</text>
      <circle class="fig-line" cx="43" cy="108.5" r="2.4" />
      <text class="fig-s" x="53" y="112">Designs experiments, writes workflows</text>
      <rect class="fig-box" x="24" y="138" width="272" height="102" rx="8" stroke-dasharray="4 3" />
      <text class="fig-h" x="40" y="158">EARS</text>
      <text class="fig-t" x="40" y="175">Lab language</text>
      <circle class="fig-line" cx="43" cy="190.5" r="2.4" />
      <text class="fig-s" x="53" y="194">Protocols, papers and lab notes</text>
      <circle class="fig-line" cx="43" cy="206.5" r="2.4" />
      <text class="fig-s" x="53" y="210">Scientist instructions by voice or chat</text>
      <circle class="fig-line" cx="43" cy="222.5" r="2.4" />
      <text class="fig-s" x="53" y="226">Instrument signals and alarms</text>
      <rect class="fig-box" x="24" y="252" width="272" height="102" rx="8" />
      <text class="fig-h" x="40" y="272">EYES</text>
      <text class="fig-t" x="40" y="289">OCSR</text>
      <circle class="fig-dot-em" cx="43" cy="304.5" r="2.6" />
      <text class="fig-s" x="53" y="308">Structures from literature figures</text>
      <circle class="fig-dot-em" cx="43" cy="320.5" r="2.6" />
      <text class="fig-s" x="53" y="324">Self-checks by model consensus</text>
      <circle class="fig-line" cx="43" cy="336.5" r="2.4" />
      <text class="fig-s" x="53" y="340">Spectra, plots and lab camera</text>
      <rect class="fig-box" x="24" y="366" width="272" height="86" rx="8" stroke-dasharray="4 3" />
      <text class="fig-h" x="40" y="386">HANDS</text>
      <text class="fig-t" x="40" y="403">Instruments</text>
      <circle class="fig-line" cx="43" cy="418.5" r="2.4" />
      <text class="fig-s" x="53" y="422">Robot arm and pipetting</text>
      <circle class="fig-line" cx="43" cy="434.5" r="2.4" />
      <text class="fig-s" x="53" y="438">Writes liquid-handler scripts</text>
      <rect class="fig-box" x="664" y="24" width="272" height="86" rx="8" />
      <text class="fig-h" x="680" y="44">FIRST PRINCIPLES</text>
      <text class="fig-t" x="680" y="61">DFT teacher</text>
      <circle class="fig-dot-em" cx="683" cy="76.5" r="2.6" />
      <text class="fig-s" x="693" y="80">Quantum chemistry as ground truth</text>
      <circle class="fig-line" cx="683" cy="92.5" r="2.4" />
      <text class="fig-s" x="693" y="96">Distilled into small, fast students</text>
      <rect class="fig-box" x="664" y="138" width="272" height="86" rx="8" />
      <text class="fig-h" x="680" y="158">PHYSICS INTUITION</text>
      <text class="fig-t" x="680" y="175">WignerFlow</text>
      <circle class="fig-dot-em" cx="683" cy="190.5" r="2.6" />
      <text class="fig-s" x="693" y="194">Learned MD as a cheap surrogate</text>
      <circle class="fig-dot-em" cx="683" cy="206.5" r="2.6" />
      <text class="fig-s" x="693" y="210">Force fields gated by past failures</text>
      <rect class="fig-box" x="664" y="252" width="272" height="86" rx="8" />
      <text class="fig-h" x="680" y="272">BODY</text>
      <text class="fig-t" x="680" y="289">Bounded harness</text>
      <circle class="fig-dot-em" cx="683" cy="304.5" r="2.6" />
      <text class="fig-s" x="693" y="308">Plans, schedules and logs every job</text>
      <circle class="fig-dot-em" cx="683" cy="320.5" r="2.6" />
      <text class="fig-s" x="693" y="324">Default-deny gate before any run</text>
      <rect class="fig-box" x="664" y="366" width="272" height="86" rx="8" stroke-dasharray="4 3" />
      <text class="fig-h" x="680" y="386">FEET</text>
      <text class="fig-t" x="680" y="403">Low-cost deployment</text>
      <circle class="fig-line" cx="683" cy="418.5" r="2.4" />
      <text class="fig-s" x="693" y="422">Train in short cloud bursts</text>
      <circle class="fig-line" cx="683" cy="434.5" r="2.4" />
      <text class="fig-s" x="693" y="438">Quantize and run on the edge</text>

      <!-- Legend -->
      <circle class="fig-dot-em" cx="304" cy="474.5" r="2.6" />
      <text class="fig-s" x="312" y="478">built</text>
      <circle class="fig-line" cx="356" cy="474.5" r="2.4" />
      <text class="fig-s" x="364" y="478">planned</text>
      <rect class="fig-box" x="424" y="468" width="18" height="12" rx="3" />
      <text class="fig-s" x="448" y="478">existing part</text>
      <rect class="fig-box" x="530" y="468" width="18" height="12" rx="3" stroke-dasharray="3 2" />
      <text class="fig-s" x="554" y="478">future part</text>
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
