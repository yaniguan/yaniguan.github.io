---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate, UCLA · Ph.D. expected December 2026
tagline: >
  I build physics-aware AI for chemistry: multi-scale simulations and equivariant
  networks that learn how molecules move, and a co-scientist that reads the
  literature and runs the next simulation.

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
    that space into a co-scientist, and its proposals go back to simulation as jobs.
    GPU work sits under every stage.
  </p>

  <div class="about-rows">

    <div class="about-row">
      <div class="about-row-key">From simulation to data</div>
      <div class="about-row-val">
        Chemistry reaches my models through simulation and through the literature. On the
        simulation side I built a ladder from atoms to a working cell. DFT covers local
        chemistry and electron transfer. Polarizable force fields (PFF) carry that
        chemistry into MD of the liquid electrolyte. Reactions at the electrode–electrolyte
        interface come next, and kinetic Monte Carlo follows them as states, events and
        rates. P2D models transport and response in the cell along two coordinates,
        electrode thickness and particle radius; SPMe is the cheaper electrochemical model.
        At the top, 3D thermal and mechanical fields give temperature and stress across the
        whole cell. PFF parameters are predicted from molecular structure, so a SMILES
        string leads to density, conductivity and solubility. A force field is accepted on
        how the liquid behaves in MD, not on cluster DFT error. Restoring one ether-oxygen
        interaction cut ion aggregation from 0.811 to 0.282. Of 80 versions in the ledger,
        more than 50 failed in the liquid, and each failure became an automatic check. The
        top of the ladder is tied to real cells: 3,331 electrothermal simulations were
        linked to DOE records, and sim-to-real calibration supported 24 targets.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Physics in the architecture</div>
      <div class="about-row-val">
        Data from this ladder is only useful if the model respects the same symmetries as
        the system. I expand atomic environments in spherical harmonics and group the
        features into irreps, the irreducible representations of SO(3). Clebsch–Gordan
        coefficients couple two irreps into a new one, so features rotate with the
        molecule. <a href="https://github.com/yaniguan/WignerFlow"><em>WignerFlow</em></a>
        replaces the MD integrator with an autoregressive E(3)-equivariant transformer.
        eSCN SO(2) convolutions reduce the tensor product from O(L<sup>6</sup>) to
        O(L<sup>3</sup>). Temporal attention uses invariant-only logits. MSE and
        equivariant flow-matching heads, trained with a pushforward unrolling curriculum,
        keep 10<sup>4</sup>-step rollouts stable. Rollouts are judged on RDF, VACF, Li⁺
        residence times and energy drift. A trajectory world model learns the same motion
        in latent space and decodes it in order: frames, then center of mass, then atoms.
        Geometry also has to reach language. In
        <a href="https://github.com/yaniguan/YLM"><em>YLM</em></a>, text tokens attend to
        l ≥ 1 irreps. Keys and logits are invariant, values keep their direction, and
        Clebsch–Gordan products combine them. So rotating the molecule by <i>R</i> rotates
        the answer by D(<i>R</i>), and parity separates R from S. A &lt;VEC&gt; or
        &lt;TENSOR&gt; token triggers an equivariant readout. On TensorQA (85k GFN2-xTB
        pairs) the equivariance error is below 10<sup>−9</sup> in fp64. The same rule sets
        every encoder before pretraining: E(3) for atoms, C<sub>N</sub> steerable
        CNNs for drawings, and no geometric group for text. Contrastive learning with
        cross-scale alignment then puts text, drawings and simulation output in one latent
        space, so a drawn molecule links to its DFT numbers and its MD behavior. Test
        conditions hold that link together: removing them dropped an MD-to-electrode link
        score from 0.327 to 0.066. These models are only practical with GPU work.
        Channel-wise (uvu) tensor products run about 40× faster than the fully connected
        e3nn product, and the l ≥ 1 channels stay in fp32 while other work runs in tf32 or
        bf16.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Reading chemistry</div>
      <div class="about-row-val">
        Much of chemistry is still stored as drawings in papers.
        <a href="https://github.com/yaniguan/ouroboros-ocsr"><em>Ouroboros</em></a> reads
        them with steerable C<sub>N</sub> CNNs that are equivariant to rotation but not to
        reflection, because a mirror flips stereocenters. At SES I ran LoRA SFT for
        image→SMILES on GLM-4.1V-9B, InternVL3-8B and Qwen2.5-VL-7B. The data was about 38K
        real paper crops, labeled where 3 of 4 readers agreed, with 55,267 benchmark
        InChIKeys kept out of training. The best GLM run used 70% real data and reached
        59.8% exact match on 331 journal figures, vs 58.3% for MolScribe (internship
        evaluation; the OCSR paper reports a separate table). I also tried DPO. Loss fell
        from 0.69 to 0.19 and preference accuracy reached 90–97%, but exact match on
        generated molecules was 0–2%. Harder negatives improved validity, but accuracy stayed
        at about half of SFT, so SFT stayed. To check readings without labels,
        <em>VERDICT</em> uses agreement among four different recognizers: AUROC 0.916, vs
        0.547 for re-rendering pixels. When three of four agree, 52.1% of images are kept at
        98.5% precision, and chemists found 0.995 precision on 400 released labels
        (<a href="https://arxiv.org/abs/2608.22183">arXiv:2608.22183</a>). Understanding
        what was read is the language model's job. For electrolytes I trained a Qwen3.6-27B
        LoRA on 254,527 task, evidence and tool-use rows for one epoch (63,632 steps). It
        learned the task format, how to read evidence, and when to call tools. The cell
        specialist is a 4-bit QLoRA model with chemistry-aware tokenization and latent
        softmax. Separate molecule, electrolyte and cell projectors each turn their
        features into 4 soft tokens, so the model reads 12 soft prefix tokens, and missing
        inputs are masked.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">A co-scientist that runs jobs</div>
      <div class="about-row-val">
        Vision, a foundation model and a harness give a co-scientist eyes, a brain and
        hands. The harness is where tools enter an execution environment, so the system can
        prepare and submit simulations, check jobs and recover from failure. I built two
        such agents at SES. In the electrolyte agent the LLM plans, and the harness pulls
        past experiments, calls explanation and generation models, runs approved MD, and
        compares results with saved artifacts. Preparing a run is separate from submitting
        it. Each request carries formulation, protocol, resources and a fingerprint, and is
        checked before a job is created. Submission is default-deny, and repeats are
        caught. The model sees summaries; the 5,000-frame trajectories stay on the tool
        side. Three failures changed the tools. An unsupported unit had looked like "no
        data". Short error messages made the model retry with guessed arguments. A request
        labeled "DMC" carried the SMILES of DMF and passed every numeric check, so the
        checker now verifies chemical identity. The cell agent runs on DeepSeek Harness. A
        larger model plans and calls tools, the fine-tuned specialist answers the science,
        and every piece of evidence is marked measured, computed, predicted, missing or
        rejected. The specialist's training data did not include tool-call trajectories,
        and good scientific answers did not give reliable tool use on their own. Splits are
        by molecule and by recipe, and held-out experimental answers never enter training.
        In the demo, prediction still ranks measured DOE recipes; connecting the aging
        world model is further work. At SES, success was task metrics and a safe process,
        not a learned reward. On-policy training came later, as my own work outside SES. I
        set up GRPO pipelines with verifiable, programmatic rewards for a Scientist track
        and an Operator track. They pass CPU smoke tests, but no GPU training job has run
        yet, so there are no quality numbers. Smoke rewards can be zero, because a random
        model does not emit valid structured answers.
        SES notes:
        <a href="{{ '/notes/atom-is-atom-bond-is-bond/' | relative_url }}">Part 1</a>
        ·
        <a href="{{ '/notes/teaching-a-puddle-to-dance/' | relative_url }}">Part 2</a>
        ·
        <a href="{{ '/notes/from-molecules-to-batteries/' | relative_url }}">Part 3</a>.
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
