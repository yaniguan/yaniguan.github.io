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
    <svg viewBox="0 0 900 348" role="img" aria-labelledby="fig-title fig-desc">
      <title id="fig-title">How the work fits together</title>
      <desc id="fig-desc">
        Multi-scale simulation feeds a multimodal representation of chemistry, which is
        post-trained into a co-scientist that proposes the next simulation.
      </desc>
      <defs>
        <marker id="fig-arrow" viewBox="0 0 8 7" refX="6.4" refY="3" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0.4,0.5 L6.4,3 L0.4,5.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </marker>
      </defs>

      <!-- Panel A: simulation -->
      <text class="fig-h" x="10" y="22">MULTI-SCALE SIMULATION</text>
      <rect class="fig-panel" x="10" y="32" width="228" height="226" rx="6" />

      <rect class="fig-box" x="28" y="46" width="192" height="38" rx="4" />
      <text class="fig-t" x="38" y="62">DFT</text>
      <text class="fig-s" x="38" y="76">electrons, interfaces</text>

      <rect class="fig-box" x="28" y="98" width="192" height="38" rx="4" />
      <text class="fig-t" x="38" y="114">MD · polarizable FF</text>
      <text class="fig-s" x="38" y="128">structure, transport, solvation</text>

      <rect class="fig-box" x="28" y="150" width="192" height="38" rx="4" />
      <text class="fig-t" x="38" y="166">kMC</text>
      <text class="fig-s" x="38" y="180">surface kinetics</text>

      <rect class="fig-box" x="28" y="202" width="192" height="38" rx="4" />
      <text class="fig-t" x="38" y="218">P2D · cell model</text>
      <text class="fig-s" x="38" y="232">device response</text>

      <path class="fig-line" d="M124,84 V96" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M124,136 V148" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M124,188 V200" marker-end="url(#fig-arrow)" />

      <!-- Panel A to B -->
      <path class="fig-line" d="M244,145 H280" marker-end="url(#fig-arrow)" />

      <!-- Panel B: multimodality -->
      <text class="fig-h" x="286" y="22">SCIENTIFIC MULTIMODALITY</text>
      <rect class="fig-panel" x="286" y="32" width="306" height="226" rx="6" />
      <text class="fig-h" x="296" y="50">ONE CHEMISTRY, THREE MODALITIES</text>

      <rect class="fig-box" x="296" y="58" width="92" height="40" rx="4" />
      <text class="fig-t" x="342" y="76" text-anchor="middle">text</text>
      <text class="fig-s" x="342" y="90" text-anchor="middle">papers</text>

      <rect class="fig-box" x="396" y="58" width="92" height="40" rx="4" />
      <text class="fig-t" x="442" y="76" text-anchor="middle">figures</text>
      <text class="fig-s" x="442" y="90" text-anchor="middle">VLM · VERDICT</text>

      <rect class="fig-box" x="496" y="58" width="92" height="40" rx="4" />
      <text class="fig-t" x="542" y="76" text-anchor="middle">simulations</text>
      <text class="fig-s" x="542" y="90" text-anchor="middle">DFT → cell</text>

      <path class="fig-line-soft" d="M342,98 V104 M442,98 V104 M542,98 V104 M342,104 H542" />
      <path class="fig-line" d="M442,104 V122" marker-end="url(#fig-arrow)" />

      <rect class="fig-box" x="296" y="124" width="292" height="32" rx="4" />
      <text class="fig-t" x="442" y="144" text-anchor="middle">contrastive alignment across scales</text>

      <path class="fig-line" d="M442,156 V168" marker-end="url(#fig-arrow)" />

      <rect class="fig-box" x="296" y="170" width="292" height="32" rx="4" />
      <text class="fig-t" x="442" y="190" text-anchor="middle">shared chemistry latent space</text>

      <path class="fig-line" d="M442,202 V214" marker-end="url(#fig-arrow)" />

      <rect class="fig-box" x="296" y="216" width="292" height="32" rx="4" />
      <text class="fig-t" x="442" y="236" text-anchor="middle">multimodal RAG over all three</text>

      <!-- Panel B to C -->
      <path class="fig-line" d="M598,145 H634" marker-end="url(#fig-arrow)" />

      <!-- Panel C: post-training -->
      <text class="fig-h" x="640" y="22">POST-TRAINING &amp; CO-SCIENTIST</text>
      <rect class="fig-panel" x="640" y="32" width="250" height="226" rx="6" />

      <rect class="fig-box" x="656" y="46" width="218" height="38" rx="4" />
      <text class="fig-t" x="666" y="62">reasoning traces</text>
      <text class="fig-s" x="666" y="76">distilled with GPT-5.5</text>

      <rect class="fig-box" x="656" y="98" width="218" height="38" rx="4" />
      <text class="fig-t" x="666" y="114">chemistry-aware tokens</text>
      <text class="fig-s" x="666" y="128">+ chemistry-aware latent softmax</text>

      <rect class="fig-box" x="656" y="150" width="218" height="38" rx="4" />
      <text class="fig-t" x="666" y="166">SFT · LoRA</text>
      <text class="fig-s" x="666" y="180">Qwen3.6-27B · GLM-4.7</text>

      <rect class="fig-box-em" x="656" y="202" width="218" height="40" rx="4" />
      <text class="fig-t-em" x="666" y="220">CO-SCIENTIST</text>
      <text class="fig-s" x="666" y="234">reads, plans, submits jobs</text>

      <path class="fig-line" d="M765,84 V96" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M765,136 V148" marker-end="url(#fig-arrow)" />
      <path class="fig-line" d="M765,188 V200" marker-end="url(#fig-arrow)" />

      <!-- Feedback loop -->
      <path class="fig-line" d="M765,244 V296 Q765,304 757,304 H132 Q124,304 124,296 V262" marker-end="url(#fig-arrow)" />
      <text class="fig-s" x="444" y="322" text-anchor="middle">proposes the next formulation — and runs the simulations that check it</text>
    </svg>

  </figure>

  <p class="about-figure-hint">Scroll the diagram sideways →</p>

  <p class="about-figure-caption">
    Science on the left, AI enablement on the right. Simulation produces the data,
    multimodal alignment turns it into representations, and the co-scientist closes the
    loop by deciding what to simulate next.
  </p>

  <div class="about-rows">

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
      <div class="about-row-key">Vision–language chemistry</div>
      <div class="about-row-val">
        Fine-tuned VLMs read structures straight out of document images (image→SMILES).
        <em>VERDICT</em> turns several independent recognizers into a consensus engine that
        votes on molecular identity and abstains when they disagree — on real literature
        figures, knowing when to refuse is worth more than another point of accuracy.
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
