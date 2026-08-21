---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<style>
/* Hide topic labels on the full publications list */
.publications .col-sm-2.abbr abbr.badge,
.publications .col-sm-2.abbr .badge {
  display: none;
}
.pub-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  border: 1px solid var(--global-divider-color, #e8e8e8);
  background: var(--global-bg-color, #fff);
  margin-bottom: 1.5rem;
}
.pub-stats {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.pub-stat-item { text-align: center; }
.pub-stat-num {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--global-theme-color, #4682B4);
  line-height: 1;
}
.pub-stat-label {
  font-size: 0.7rem;
  color: var(--global-text-color-light, #999);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}
.pub-stat-divider {
  width: 1px;
  height: 2rem;
  background: var(--global-divider-color, #e8e8e8);
  flex-shrink: 0;
}
.scholar-link {
  font-size: 0.82rem;
  color: var(--global-theme-color, #4682B4);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: auto;
}
.scholar-link:hover { text-decoration: underline; }
.research-groups {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2rem;
}
.rgroup {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
}
.rgroup-label {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--global-text-color-light, #999);
  width: 7rem;
  flex-shrink: 0;
}
.rtag {
  font-size: 0.78rem;
  padding: 0.28em 0.8em;
  border-radius: 4px;
  font-weight: 500;
  line-height: 1.5;
}
.rtag-blue {
  background: rgba(70,130,180,0.09);
  color: #2e6da4;
  border: 1px solid rgba(70,130,180,0.28);
}
.rtag-green {
  background: rgba(32,160,100,0.09);
  color: #1a7a50;
  border: 1px solid rgba(32,160,100,0.28);
}
.rtag-orange {
  background: rgba(210,100,20,0.09);
  color: #b05a10;
  border: 1px solid rgba(210,100,20,0.28);
}
.sw-heading {
  font-size: 1.4rem;
  font-weight: 500;
  margin: 2rem 0 1rem;
  color: var(--global-theme-color, #4682B4);
}
.sw-item {
  border-left: 3px solid var(--global-theme-color, #4682B4);
  padding: 0.1rem 0 0.1rem 1rem;
  margin-bottom: 1.25rem;
}
.sw-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 0.25rem;
}
.sw-name { font-weight: 700; font-size: 0.95rem; color: var(--global-theme-color, #4682B4); }
.sw-tagline { font-size: 0.85rem; color: var(--global-text-color, #333); font-weight: 500; }
.sw-desc { font-size: 0.85rem; color: var(--global-text-color, #444); line-height: 1.6; margin: 0 0 0.35rem; }
.sw-stack { font-size: 0.72rem; color: var(--global-text-color-light, #999); letter-spacing: 0.02em; }
</style>

<div class="pub-header">
  <div class="pub-stats">
    <div class="pub-stat-item">
      <div class="pub-stat-num">410</div>
      <div class="pub-stat-label">Citations</div>
    </div>
    <div class="pub-stat-divider"></div>
    <div class="pub-stat-item">
      <div class="pub-stat-num">9</div>
      <div class="pub-stat-label">h-index</div>
    </div>
    <div class="pub-stat-divider"></div>
    <div class="pub-stat-item">
      <div class="pub-stat-num">9</div>
      <div class="pub-stat-label">i10-index</div>
    </div>
  </div>
  <a href="https://scholar.google.com/citations?user=eb_DB84AAAAJ&hl=en" target="_blank" class="scholar-link">
    <i class="ai ai-google-scholar"></i> Google Scholar
  </a>
</div>

<div class="research-groups">
  <div class="rgroup">
    <span class="rgroup-label">Electrochemistry</span>
    <span class="rtag rtag-blue">Water–Solid Interface</span>
    <span class="rtag rtag-blue">Electrode Degradation &amp; Aging</span>
    <span class="rtag rtag-blue">Reactivity &amp; Impurity Tuning</span>
    <span class="rtag rtag-blue">Bifunctional Electrocatalysts</span>
  </div>
  <div class="rgroup">
    <span class="rgroup-label">Machine Learning</span>
    <span class="rtag rtag-green">Molecular Foundation Models</span>
    <span class="rtag rtag-green">VLM &amp; Multimodal Retrieval</span>
    <span class="rtag rtag-green">LLM Post-training &amp; Alignment</span>
    <span class="rtag rtag-green">Agentic AI for Science</span>
    <span class="rtag rtag-green">ML for Catalysis</span>
  </div>
  <div class="rgroup">
    <span class="rgroup-label">Energy Storage</span>
    <span class="rtag rtag-orange">Electrolyte Engineering</span>
    <span class="rtag rtag-orange">Polarizable Force Fields &amp; High-throughput MD</span>
    <span class="rtag rtag-orange">Li–S Batteries</span>
    <span class="rtag rtag-orange">Zinc–Air Batteries</span>
  </div>
</div>

<h2 class="sw-heading">Software &amp; Systems</h2>

<div class="sw-item">
  <div class="sw-header">
    <span class="sw-name">VERDICT</span>
    <span class="sw-tagline">· Verified Ensemble Recognition and Decoding for Image-to-Chemical Transcription</span>
  </div>
  <p class="sw-desc">A consensus optical chemical structure recognition service: four independent recognizers — DECIMER, MolScribe, MolNexTR and a fine-tuned GLM-4.1V — vote by molecular identity (InChIKey), and the selected structure must additionally survive chemical parsing and an image round-trip before it is accepted. Returns one canonical SMILES with a confidence tier, an explicit abstention path, and a per-engine audit trace; ships with a Chrome extension that turns any molecule drawing on a page into a structure lookup. On ACS figures the four-engine quorum accepts 88.5% of crops at 86.2% precision on accepted answers.</p>
  <div class="sw-stack">Python · PyTorch · RDKit · HTTP service (per-engine workers) · Chrome extension</div>
</div>

<div class="sw-item">
  <div class="sw-header">
    <span class="sw-name">Molecule Multimodal RAG</span>
    <span class="sw-tagline">· retrieval across text, figures, and multi-scale simulation</span>
  </div>
  <p class="sw-desc">A molecular knowledge graph that treats depictions and simulations as first-class retrieval modalities alongside text. Literature full text and figures are harvested, segmented and passed through OCSR, so every record carries a structure keyed on its parent InChIKey together with the DOI, figure, crop and engine votes that produced it. Retrieval combines semantic text search, structure-similarity and exact-InChIKey lookup, and structural retrieval over multi-scale simulation records — DFT properties and MD trajectory observables — which is what lets a literature molecule be joined to the formulations it appears in.</p>
  <div class="sw-stack">Python · RDKit · OPSIN · SQLite/FTS5 hybrid retrieval · graph expansion</div>
</div>

<div class="sw-item">
  <div class="sw-header">
    <span class="sw-name"><a href="https://github.com/yaniguan/ChatDFT" target="_blank" style="color:inherit;">ChatDFT</a></span>
    <span class="sw-tagline">· LLM + HPC agentic platform for quantum-chemistry workflows</span>
  </div>
  <p class="sw-desc">An agent system that turns a natural-language request into a complete DFT campaign: intent extraction, retrieval-augmented planning, input generation, HPC job scheduling, and result interpretation, with structured evaluation loops around each stage.</p>
  <div class="sw-stack">Python · LLM agents · RAG · REST API · HPC schedulers</div>
</div>

<div class="sw-item">
  <div class="sw-header">
    <span class="sw-name"><a href="https://github.com/yaniguan/ChemVisionAgent" target="_blank" style="color:inherit;">ChemVisionAgent</a></span>
    <span class="sw-tagline">· multimodal agent for chemistry data extraction</span>
  </div>
  <p class="sw-desc">Extracts structured chemical data — molecules, conditions and measurements — from figures, tables and scanned documents, pairing vision models with rule-based chemical validation.</p>
  <div class="sw-stack">Python · Vision-language models · RDKit</div>
</div>

<h2 class="sw-heading">Publications</h2>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
