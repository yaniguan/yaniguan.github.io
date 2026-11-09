---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate, UCLA · Ph.D. expected December 2026
tagline: >
  I build symmetry-aware neural networks for chemistry — E(3)-equivariant models
  over atoms and trajectories, steerable encoders over molecule images, language
  models that read 3D directions — along with the multi-scale simulations that
  feed them, the GPU work that makes them trainable, and the post-training and
  evals that check whether they got the chemistry right.

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
    Rows are the three forms chemistry reaches a model in; columns are what happens to
    each. Every form gets an encoder that respects its symmetry — none for text, planar
    rotations for drawings, E(3) for atoms — before alignment puts them in one space and
    post-training turns that space into a co-scientist, whose proposals go back to
    simulation. The GPU work is the floor all of it stands on.
  </p>

  <div class="about-rows">

    <div class="about-row">
      <div class="about-row-key">Multi-scale simulation</div>
      <div class="about-row-val">
        One ladder from an electrode–electrolyte interface to a working cell: DFT at the
        surface, MD in the liquid, kinetic Monte Carlo for the reaction network, P2D for the
        device. The hard part is what survives each step between rungs.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Electrolyte force fields</div>
      <div class="about-row-val">
        Polarizable force-field parameters predicted from molecular structure instead of
        fitted by hand: SMILES in, density, conductivity and solubility out.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Trajectory world models</div>
      <div class="about-row-val">
        Latent-space pretraining over MD trajectories, decoded hierarchically from frames to
        center of mass to atoms, so the representation captures how an electrolyte moves,
        not just what is in it.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/WignerFlow">E(3)-equivariant trajectory generation</a></div>
      <div class="about-row-val">
        <em>WignerFlow</em> replaces the MD integrator with an autoregressive E(3)-equivariant
        transformer: eSCN SO(2) convolutions cut the tensor product from O(L<sup>6</sup>) to
        O(L<sup>3</sup>), and temporal attention uses invariant-only logits. MSE and
        equivariant flow-matching heads, trained with a pushforward unrolling curriculum, keep
        10<sup>4</sup>-step rollouts stable; evaluated on RDF, VACF, Li⁺ residence times and
        energy drift.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Vision–language chemistry</div>
      <div class="about-row-val">
        Fine-tuned VLMs for image→SMILES. <em>VERDICT</em> combines independent recognizers
        into a consensus engine that abstains when they disagree.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/ouroboros-ocsr">Equivariant OCSR</a></div>
      <div class="about-row-val">
        <em>Ouroboros</em> uses steerable C<sub>N</sub> CNNs (N ∈ {4, 8, 16}) as the image
        encoder — rotations but not reflections, since mirroring flips stereocenters
        (ruling out D<sub>N</sub>). Arms are FLOP-matched at 10.3 GFLOPs, equivariance holds
        to 10<sup>−6</sup>, hypotheses were pre-registered, and recognition errors are priced
        in energy via ETKDG + MACE-OFF.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/YLM">Irreps-to-text attention</a></div>
      <div class="about-row-val">
        <em>YLM</em> lets text tokens attend to l ≥ 1 irreps with invariant logits and
        Clebsch–Gordan products, so rotating the molecule by <i>R</i> rotates the answer by
        D(<i>R</i>); parity separates R/S, and <code>&lt;VEC&gt;</code> /
        <code>&lt;TENSOR&gt;</code> tokens trigger an equivariant readout. Evaluated on
        TensorQA (85k GFN2-xTB pairs), with equivariance error &lt; 10<sup>−9</sup> in fp64.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Scientific multimodality</div>
      <div class="about-row-val">
        Contrastive learning with cross-scale alignment puts text, figures and simulation
        output in one latent space, so a drawn molecule, its DFT numbers and its MD behavior
        become one object.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Chemistry-aware post-training</div>
      <div class="about-row-val">
        At SES I post-trained two kinds of model. <strong>Image-to-SMILES:</strong> LoRA SFT
        (rank 16, BF16) on GLM-4.1V-9B, InternVL3-8B and Qwen2.5-VL-7B, using about 38K real
        paper crops (a label is kept when 3 of 4 readers agree), split by molecule identity
        with 55,267 benchmark InChIKeys kept out of training. The best GLM run used 70% real
        data and reached 59.8% exact match on 331 journal figures, vs 58.3% for MolScribe
        (internship evaluation; the OCSR paper reports a separate table). Then I tried DPO:
        loss went 0.69 → 0.19 and preference accuracy hit 90–97%, while exact match on
        generated molecules fell to 0–2%. Harder negatives improved validity, but accuracy
        was still about half of SFT, so SFT stayed. <strong>Electrolyte and cell
        specialists:</strong> Qwen3.6-27B LoRA on 254,527 task, evidence and tool-use rows
        (one epoch, 63,632 steps on one GPU), and a 4-bit QLoRA specialist with
        chemistry-aware tokenization, latent softmax, and 12 soft prefix tokens from
        molecule, electrolyte and cell projectors. The 254,527-row electrolyte LoRA taught
        format, evidence reading, and tool use. The cell specialist's training data did not
        include tool-call trajectories. Numbers still come from data and programs.
        <a href="{{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }}">Part 1</a>
        ·
        <a href="{{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}">Part 2</a>
        ·
        <a href="{{ '/notes/from-molecules-to-batteries/' | relative_url }}">Part 3</a>.
        SES summer notes:
        <a href="{{ '/notes/summer-of-molecules-puddles-batteries/' | relative_url }}">Overview</a>
        ·
        <a href="{{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }}">Molecules (incl. "The DPO detour")</a>
        ·
        <a href="{{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}">Electrolytes</a>
        ·
        <a href="{{ '/notes/from-molecules-to-batteries/' | relative_url }}">Cells</a>.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Co-scientist</div>
      <div class="about-row-val">
        Two agents at SES. <strong>Electrolyte:</strong> the LLM plans; the harness pulls past
        experiments, calls explanation and generation models, runs only approved MD, and
        compares results with saved artifacts. Preparing a run is separate from submitting
        it: each request carries formulation, protocol, resources and a fingerprint, is
        checked before a job exists, and repeats are caught so GPU time is not spent twice.
        The model sees summaries, not 5,000 frames of coordinates. Three tool failures became
        fixes — an unsupported unit that looked like "no data", short errors that led to
        guessed retries, and a "DMC" that carried the SMILES of DMF and passed every numeric
        check. <strong>Cell:</strong> DeepSeek Harness on battery tools plus the fine-tuned
        specialist; every piece of evidence is marked measured, computed, predicted, missing
        or rejected. Success meant task metrics and a safe process, not a learned reward. In
        the demo, prediction still ranks measured DOE recipes; wiring in the aging world
        model is next. Lesson: good scientific answers did not give reliable tool use for
        free.
        <a href="{{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}">Part 2</a>
        ·
        <a href="{{ '/notes/from-molecules-to-batteries/' | relative_url }}">Part 3</a>.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Metrics I had to define</div>
      <div class="about-row-val">
        The training score is rarely the goal, so I set the metric first.
        <strong>VERDICT:</strong> agreement among four different recognizers flags wrong
        structures without labels (AUROC 0.916; re-rendering pixels scored 0.547).
        Three-of-four agreement keeps 52.1% of images at 98.5% precision; chemists rated 400
        released labels at 0.995 precision
        (<a href="https://arxiv.org/abs/2608.22183">arXiv:2608.22183</a>).
        <strong>DPO vs exact match:</strong> see above. <strong>Force fields</strong> pass on
        liquid MD, not cluster DFT error: one ether-oxygen fix cut ion aggregation from
        0.811 to 0.282. Of 80 versions in the ledger, more than 50 failed in the liquid, and
        each failure became an automatic check. <strong>Cross-scale models:</strong> removing
        test conditions dropped an MD-to-electrode link score from 0.327 to 0.066, and
        nominal 90% intervals covered only about 68–78% — reported as overconfident, not
        hidden. <strong>Leakage:</strong> splits by molecule and by recipe; held-out
        experimental answers never enter training.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Equivariant models on GPUs</div>
      <div class="about-row-val">
        Channel-wise (uvu) tensor products replace the fully connected e3nn product (~40×
        faster); activation memory is budgeted before launch (batch 137 on a 40 GB A100 in
        bf16); profiling compares eager, <code>torch.compile</code> and cuEquivariance, and
        fp32 vs tf32/bf16 with l ≥ 1 kept in fp32.
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
        Post-training and evals for AI-driven battery development: LoRA SFT for
        image-to-SMILES VLMs (plus a DPO attempt that lost to SFT on exact match), a
        Qwen3.6-27B electrolyte specialist trained on 254,527 task and tool rows,
        electrolyte MD, and two co-scientist agents with checked, default-deny job
        submission. SES summer notes:
        <a href="{{ '/notes/summer-of-molecules-puddles-batteries/' | relative_url }}">Overview</a>
        ·
        <a href="{{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }}">Molecules (incl. "The DPO detour")</a>
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
