---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate · <a href='https://sautet.chem.ucla.edu/' target='_blank'>Sautet Group</a> · UCLA &nbsp;|&nbsp; Research Intern · <a href='https://www.ses.ai/' target='_blank'>SES AI Corp</a>

profile:
  align: right
  image: profile.jpg
  image_circular: false
  more_info: >
    <p>Los Angeles, CA 90034</p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit:

latest_posts:
  enabled: false
---

Hi, I'm Yani — a Ph.D. candidate in Chemical and Biomolecular Engineering at UCLA, working at the intersection of **computational chemistry**, **molecular foundation models**, and **agentic AI**.

<style>
.about-chips { margin: 1rem 0 0.5rem; }
.chip-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; }
.chip-section-label {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--global-text-color-light, #999);
  width: 4rem;
  flex-shrink: 0;
}
.achip {
  font-size: 0.75rem;
  padding: 0.22em 0.7em;
  border-radius: 4px;
  font-weight: 500;
  background: rgba(70,130,180,0.08);
  color: var(--global-theme-color, #4682B4);
  border: 1px solid rgba(70,130,180,0.22);
  line-height: 1.5;
}
.achip-tool {
  background: rgba(80,80,80,0.06);
  color: var(--global-text-color, #444);
  border: 1px solid rgba(80,80,80,0.18);
}
.exp-list {
  clear: right;
  margin-top: 1.5rem;
}
.exp-item {
  border-left: 3px solid var(--global-theme-color, #4682B4);
  padding: 0.1rem 0 0.1rem 1rem;
  margin-bottom: 1.25rem;
}
.exp-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 0.3rem;
}
.exp-org { font-weight: 700; color: var(--global-theme-color, #4682B4); font-size: 0.95rem; }
.exp-role { font-size: 0.85rem; color: var(--global-text-color, #333); font-weight: 500; }
.exp-date { font-size: 0.78rem; color: var(--global-text-color-light, #999); margin-left: auto; }
.exp-body { font-size: 0.85rem; color: var(--global-text-color, #444); margin: 0; line-height: 1.6; }
.exp-body li { margin-bottom: 0.15rem; }
</style>

<div class="about-chips">
  <div class="chip-row">
    <span class="chip-section-label">Research</span>
    <span class="achip">Electrolytes &amp; Energy Storage</span>
    <span class="achip">Molecular Foundation Models</span>
    <span class="achip">Multimodal AI for Chemistry</span>
    <span class="achip">Agentic AI &amp; Co-Scientists</span>
  </div>
  <div class="chip-row" style="margin-top:0.5rem">
    <span class="chip-section-label">Methods</span>
    <span class="achip achip-tool">Pretraining &amp; Post-training (LoRA / SFT)</span>
    <span class="achip achip-tool">VLM &amp; Multimodal RAG</span>
    <span class="achip achip-tool">Polarizable-FF MD &amp; FF Fitting</span>
    <span class="achip achip-tool">Trajectory World Models</span>
    <span class="achip achip-tool">DFT</span>
    <span class="achip achip-tool">HPC / Kubernetes Workflows</span>
  </div>
</div>

<div class="exp-list">

  <div class="exp-item">
    <div class="exp-header">
      <span class="exp-org"><a href="https://www.ses.ai/" style="color:inherit;text-decoration:none;">SES AI Corp</a></span>
      <span class="exp-role">· Research Intern</span>
      <span class="exp-date">2026</span>
    </div>
    <ul class="exp-body">
      <li><strong>Molecular foundation models:</strong> continued pretraining, post-training, and alignment of open-source 2D/3D molecular backbones on a ~150M-molecule corpus — steering a general-chemistry foundation toward <em>electrolyte-aware</em> molecule and property representations</li>
      <li><strong>Multimodal chemistry:</strong> fine-tuned VLMs for optical chemical structure recognition (image&rarr;SMILES) with the <em>VERDICT</em> multi-model consensus engine, a multimodal molecule RAG retrieving across text, figures, and structures, and a literature-mining pipeline that builds the VLM SFT corpus</li>
      <li><strong>Electrolyte MD:</strong> polarizable force-field fitting and benchmarking for Na-ion chemistries, plus Li-ion electrolyte MD on HPC/Kubernetes — structure and coordination, transport, and solvation thermodynamics</li>
      <li><strong>Trajectory representation learning:</strong> a three-head encoder over MD trajectories with latent-space pretraining objectives and a hierarchical frames&rarr;center-of-mass&rarr;atom decoder — a <em>world model</em> for microscopic molecular motion</li>
      <li><strong>Cell co-scientist:</strong> reasoning traces distilled from multi-scale cell DOE simulations, aligned with multimodal evidence and contrastive learning <em>across</em> scales, then used to fine-tune tool-using electrolyte and cell <em>co-scientists</em> (LoRA SFT of Qwen3.6-27B and GLM-5.2 / GLM-4.7) with leakage-safe benchmarks and default-deny governed job submission</li>
    </ul>
  </div>

  <div class="exp-item">
    <div class="exp-header">
      <span class="exp-org"><a href="https://sautet.chem.ucla.edu/" style="color:inherit;text-decoration:none;">UCLA Sautet Group</a></span>
      <span class="exp-role">· Ph.D. Research</span>
      <span class="exp-date">2022 – present</span>
    </div>
    <ul class="exp-body">
      <li><strong>Electrolyte–electrode interface:</strong> atomic-scale modeling of electrochemical double-layer structure, capacitance, and solvent organization at the water–solid interface</li>
      <li><strong>Electrode degradation & aging:</strong> mechanistic study of metal dissolution and trace-impurity effects on long-term electrode stability and reaction selectivity</li>
      <li><strong>AI for science:</strong> <a href="https://github.com/yaniguan/ChatDFT">ChatDFT</a> (LLM + HPC agentic platform) · <a href="https://github.com/yaniguan/ChemVisionAgent">ChemVisionAgent</a> (multimodal agent for chemistry data extraction)</li>
    </ul>
  </div>

  <div class="exp-item">
    <div class="exp-header">
      <span class="exp-org"><a href="https://www.dp.tech/en" style="color:inherit;text-decoration:none;">DP Technology</a></span>
      <span class="exp-role">· Algorithm Researcher Intern</span>
      <span class="exp-date">2022</span>
    </div>
    <ul class="exp-body">
      <li><strong>AI infrastructure:</strong> designed and deployed production ML pipelines for neural network potentials; built scalable scientific computing workflows</li>
      <li><strong>Open-source community:</strong> led developer community operations, documentation, and project management for the DeePMD ecosystem</li>
    </ul>
  </div>

  <div class="exp-item">
    <div class="exp-header">
      <span class="exp-org"><a href="https://www.hebut.edu.cn/" style="color:inherit;text-decoration:none;">Hebei University of Technology</a></span>
      <span class="exp-role">· Undergraduate Research</span>
      <span class="exp-date">2018 – 2022</span>
    </div>
    <ul class="exp-body">
      <li>Multidisciplinary researcher across <strong>multi-scale simulation</strong> (DFT-KMC), <strong>machine learning for catalysis</strong>, and <strong>electrochemical experiments</strong> — 3 first-author publications</li>
      <li>Designed and characterized bifunctional electrocatalysts for Li–S and Zn–air batteries</li>
    </ul>
  </div>

</div>
