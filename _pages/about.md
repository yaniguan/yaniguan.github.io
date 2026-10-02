---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate, <a href='https://sautet.chem.ucla.edu/' target='_blank'>Sautet Group</a>, UCLA &nbsp;·&nbsp; Applied Scientist Intern, <a href='https://www.ses.ai/' target='_blank'>SES AI</a>
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

<section class="about-section">
  <h2 class="about-section-title">Research</h2>

  <figure class="about-figure">
    <svg viewBox="0 0 900 362" role="img" aria-labelledby="fig-title fig-desc">
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

      <!-- Column D: reasoning -->
      <text class="fig-h" x="722" y="22">POST-TRAINING &amp; AGENT</text>
      <rect class="fig-panel" x="722" y="32" width="168" height="214" rx="6" />

      <rect class="fig-box" x="734" y="48" width="144" height="44" rx="4" />
      <text class="fig-t" x="744" y="66">Reasoning traces</text>
      <text class="fig-s" x="744" y="81">distilled with GPT-5.5</text>

      <rect class="fig-box" x="734" y="118" width="144" height="44" rx="4" />
      <text class="fig-t" x="744" y="136">SFT · LoRA</text>
      <text class="fig-s" x="744" y="151">Qwen3.6-27B · GLM-4.7</text>

      <rect class="fig-box-em" x="734" y="188" width="144" height="44" rx="4" />
      <text class="fig-t-em" x="744" y="206">CO-SCIENTIST</text>
      <text class="fig-s" x="744" y="221">reads · plans · runs jobs</text>

      <path class="fig-line" d="M806,92 V114" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M806,162 V184" marker-end="url(#fig-arrow)" />

      <!-- Feedback loop -->
      <path class="fig-line" d="M806,232 V262 Q806,270 798,270 H116 Q108,270 108,262 V236" marker-end="url(#fig-arrow)" />
      <text class="fig-s" x="457" y="287" text-anchor="middle">proposes the next simulation — and submits the jobs that check it</text>

      <!-- Compute: under every stage -->
      <text class="fig-h" x="10" y="310">COMPUTE</text>
      <rect class="fig-panel" x="10" y="318" width="880" height="36" rx="6" />
      <text class="fig-t" x="24" y="340">GPU</text>
      <text class="fig-s" x="58" y="340">Clebsch–Gordan tensor products · channel-wise (uvu) kernels · cuEquivariance · torch.compile · bf16 / tf32 · V100 · A100 · L40S</text>
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
        One ladder from an electrode–electrolyte interface up to a working cell:
        electronic structure at the surface, molecular dynamics in the liquid, kinetic
        Monte Carlo for the reaction network, P2D models for the device. Most of the
        difficulty is in what has to survive the step between rungs.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Electrolyte force fields</div>
      <div class="about-row-val">
        Polarizable force-field parameters predicted from molecular structure rather than
        fitted by hand, which turns weeks of per-chemistry expert work into a forward pass.
        A formulation goes in as SMILES and comes out with density, conductivity and
        solubility.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Trajectory world models</div>
      <div class="about-row-val">
        Most molecular representations describe a structure; this one describes motion.
        Latent-space pretraining over MD trajectories, decoded hierarchically from frames
        to center of mass to atoms, so the learned state carries how an electrolyte moves
        and not only what is in it.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/WignerFlow">E(3)-equivariant trajectory generation</a></div>
      <div class="about-row-val">
        <em>WignerFlow</em> replaces the MD integrator with an autoregressive
        E(3)-equivariant transformer: from the last <i>k</i> frames it emits the frame
        <i>n</i>·δ<i>t</i> ahead, directly. Each frame is encoded with eSCN-style SO(2)
        convolutions — a Wigner-D rotation aligns every edge to the <i>z</i>-axis, which
        collapses the l<sub>max</sub> = 2 tensor product from O(L<sup>6</sup>) to
        O(L<sup>3</sup>) — and causal attention over time draws its logits from
        invariants only, so the stack stays exactly equivariant. Two heads, MSE regression
        and equivariant flow matching in displacement space, trained with pushforward
        unrolling on a curriculum so 10<sup>4</sup>-step rollouts stay on the data
        manifold; judged on RDF, VACF/VDOS, Li⁺ solvation-shell residence times and
        energy drift against the reference force field.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Vision–language chemistry</div>
      <div class="about-row-val">
        Fine-tuned VLMs read structures straight out of document images (image→SMILES).
        <em>VERDICT</em> turns several independent recognizers into a consensus engine that
        votes on molecular identity and abstains when they disagree — on real literature
        figures, knowing when to refuse is worth more than another point of accuracy.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/ouroboros-ocsr">Equivariant OCSR</a></div>
      <div class="about-row-val">
        <em>Ouroboros</em> carries the OCSR work forward with a symmetry prior instead of
        more data: steerable C<sub>N</sub> CNNs (escnn, N ∈ {4, 8, 16}) and
        group-equivariant self-attention as the image encoder, with the SMILES decoder
        held fixed. Rotations only, never reflections — mirroring a wedge/hash drawing
        inverts every stereocenter, so a D<sub>N</sub>-invariant encoder would be blind to
        chirality. Arms are FLOP-matched (10.3 GFLOPs per image; the parameter-matched C8
        would cost 127), equivariance holds to 10<sup>−6</sup> relative error on the 90°
        grid in fp32, and the hypotheses on the synthetic-to-real gap were pre-registered
        before the first training run. Recognition errors are then pushed through ETKDG
        and MACE-OFF to price what a wrong diastereomer costs in energy.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key"><a href="https://github.com/yaniguan/YLM">Irreps-to-text attention</a></div>
      <div class="about-row-val">
        Molecular language models — MolT5, 3D-MoLM, even EquiLLM — reduce geometry to
        invariants before the LLM sees it, so they can name a dipole but not point one.
        <em>YLM</em> lets text tokens query l ≥ 1 irreps directly: attention logits come
        from invariants, values carry spherical-harmonic features, and anything with a
        direction is only scaled or combined through Clebsch–Gordan products. Rotate the
        molecule by <i>R</i> and the answer rotates by D(<i>R</i>), by construction. Each
        token runs two streams, an invariant hidden state and an irreps side-stream;
        parity labels keep (R)- and (S)- apart; a <code>&lt;VEC&gt;</code> /
        <code>&lt;TENSOR&gt;</code> token hands off to an equivariant readout. Measured on
        TensorQA, 85k structure–question pairs with GFN2-xTB force and dipole labels;
        equivariance error below 10<sup>−9</sup> in float64.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Scientific multimodality</div>
      <div class="about-row-val">
        Text, figures and simulation output are three views of one chemistry that
        normally sit in three disconnected systems. Contrastive learning with cross-scale
        alignment puts them in a single latent space: the molecule drawn in a figure, the
        DFT numbers computed for it, and the way it behaves in an MD box become one
        object.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Chemistry-aware post-training</div>
      <div class="about-row-val">
        Reasoning traces distilled with GPT-5.5 supply the supervision, while
        chemistry-aware tokenization and a chemistry-aware latent softmax let the model see
        chemistry where a general tokenizer sees characters. Both feed LoRA SFT on
        Qwen3.6-27B and GLM-4.7.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Co-scientist</div>
      <div class="about-row-val">
        The pieces above compose into a tool-using agent for electrolyte and cell design:
        it reads the literature, queries the simulation stack, and proposes what to run
        next. What decides whether it can be trusted is the unglamorous half — leakage-safe
        benchmarks, and default-deny governed job submission.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-key">Equivariant models on GPUs</div>
      <div class="about-row-val">
        Equivariant networks spend their time in Clebsch–Gordan tensor products, so
        throughput and memory are designed, not discovered. The fully connected e3nn
        product with per-edge weights was ~40× too slow and gave way to channel-wise
        (uvu) products; activation memory is budgeted from saved-tensor bytes before a job
        is queued (the C8 attention encoder fits batch 137 on a 40 GB A100 in bf16); and
        the profiling stage pits eager PyTorch against <code>torch.compile</code> and
        cuEquivariance, and fp32 against tf32/bf16 with l ≥ 1 kept in fp32 — on V100s at
        SDSC Expanse and L40S/A100 nodes on UCLA Hoffman2.
      </div>
    </div>

  </div>

  <aside class="notes-card">
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
          models, and what building VERDICT taught me about SFT, DPO and LoRA.
        </span>
      </span>
      <span class="notes-card-cta">Read</span>
    </a>
  </aside>
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
        Molecular foundation models, multimodal chemistry models, electrolyte MD, and
        cell co-scientists for AI-driven battery development.
      </div>
    </div>

    <div class="about-row">
      <div class="about-row-date">2022 — present</div>
      <div class="about-row-val">
        <div class="about-role">
          <a href="https://sautet.chem.ucla.edu/">UCLA, Sautet Group</a>
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
