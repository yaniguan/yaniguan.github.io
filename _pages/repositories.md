---
layout: page
permalink: /software/
title: Software
description: Open-source work in LLMs, agentic AI, and computational chemistry.
nav: true
nav_order: 4
---

<style>
.project-card {
  border: 1px solid var(--global-divider-color, #e8e8e8);
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: var(--global-bg-color, #fff);
}
.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.10);
}
.project-card .card-body { padding: 1.5rem; }
.project-card .card-title { font-weight: 700; font-size: 1.1rem; margin-bottom: 0; }
.project-card .card-text { font-size: 0.875rem; color: var(--global-text-color-light, #666); }
.project-card .highlights { font-size: 0.82rem; padding-left: 1.1rem; color: var(--global-text-color, #333); }
.project-card .highlights li { margin-bottom: 0.25rem; }
.tech-badge {
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.25em 0.65em;
  border-radius: 20px;
  border: 1px solid var(--global-theme-color, #6C63FF);
  color: var(--global-theme-color, #6C63FF);
  background: transparent;
  display: inline-block;
  margin: 0.15rem 0.1rem;
}
.featured-badge {
  font-size: 0.7rem;
  padding: 0.2em 0.7em;
  border-radius: 20px;
  background-color: var(--global-theme-color, #6C63FF);
  color: #fff;
  font-weight: 600;
}
.gh-btn {
  font-size: 0.8rem;
  padding: 0.35em 1em;
  border-radius: 20px;
  border: 1px solid var(--global-theme-color, #6C63FF);
  color: var(--global-theme-color, #6C63FF);
  background: transparent;
  text-decoration: none;
  display: inline-block;
  transition: background 0.15s, color 0.15s;
}
.gh-btn:hover {
  background: var(--global-theme-color, #6C63FF);
  color: #fff;
  text-decoration: none;
}
.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--global-text-color-light, #999);
  margin-bottom: 1.25rem;
}
.mini-card {
  border: 1px solid var(--global-divider-color, #e8e8e8);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  background: var(--global-bg-color, #fff);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
}
.mini-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.mini-card .mini-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--global-theme-color, #6C63FF);
  text-decoration: none;
}
.mini-card .mini-title:hover { text-decoration: underline; }
.mini-card .mini-desc { font-size: 0.8rem; color: var(--global-text-color-light, #666); margin: 0.3rem 0 0.6rem; }
</style>

<p class="section-label">★ Featured</p>

<div class="row g-4 mb-5">

  <!-- ChatDFT -->
  <div class="col-md-6">
    <div class="project-card card h-100 border-0">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="card-title">ChatDFT</span>
          <span class="featured-badge">Featured</span>
        </div>
        <p class="card-text mb-3">
          An LLM-powered agentic platform that fully automates quantum chemistry workflows — from natural-language task input to DFT job submission, monitoring, and result analysis on HPC clusters.
        </p>
        <div class="mb-3">
          <span class="tech-badge">Python</span>
          <span class="tech-badge">LLM</span>
          <span class="tech-badge">RAG</span>
          <span class="tech-badge">Fine-tuning</span>
          <span class="tech-badge">Agentic AI</span>
          <span class="tech-badge">HPC</span>
        </div>
        <ul class="highlights mb-3">
          <li>Reduced quantum chemistry setup-to-results time by <strong>70%</strong></li>
          <li>Integrated RAG retrieval + SFT/RLHF fine-tuning pipeline</li>
          <li>Automated HPC job scheduling, monitoring, and error recovery</li>
        </ul>
        <a href="https://github.com/yaniguan/ChatDFT" target="_blank" class="gh-btn">
          <i class="fab fa-github me-1"></i>GitHub
        </a>
      </div>
    </div>
  </div>

  <!-- ChemVisionAgent -->
  <div class="col-md-6">
    <div class="project-card card h-100 border-0">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="card-title">ChemVisionAgent</span>
          <span class="featured-badge">Featured</span>
        </div>
        <p class="card-text mb-3">
          A multimodal AI agent that extracts structured data from chemistry literature — parsing figures, tables, and reaction schemes using vision-language models to accelerate materials discovery.
        </p>
        <div class="mb-3">
          <span class="tech-badge">Python</span>
          <span class="tech-badge">Multimodal LLM</span>
          <span class="tech-badge">Vision</span>
          <span class="tech-badge">Agentic AI</span>
          <span class="tech-badge">NLP</span>
        </div>
        <ul class="highlights mb-3">
          <li>Automated figure & table parsing from scientific PDFs</li>
          <li>Structured JSON output for downstream ML pipelines</li>
          <li>Supports multi-step reasoning across multimodal inputs</li>
        </ul>
        <a href="https://github.com/yaniguan/ChemVisionAgent" target="_blank" class="gh-btn">
          <i class="fab fa-github me-1"></i>GitHub
        </a>
      </div>
    </div>
  </div>

</div>

<p class="section-label">Other Projects</p>

<div class="row g-3">

  <div class="col-sm-6 col-md-4">
    <div class="mini-card">
      <a href="https://github.com/yaniguan/hpc_monitor" target="_blank" class="mini-title">
        <i class="fab fa-github me-1"></i>hpc_monitor
      </a>
      <p class="mini-desc">Real-time monitoring dashboard for HPC job queues and resource utilization.</p>
      <span class="tech-badge">Python</span>
      <span class="tech-badge">HPC</span>
      <span class="tech-badge">Slurm</span>
    </div>
  </div>

  <div class="col-sm-6 col-md-4">
    <div class="mini-card">
      <a href="https://github.com/yaniguan/ChatBot" target="_blank" class="mini-title">
        <i class="fab fa-github me-1"></i>ChatBot
      </a>
      <p class="mini-desc">Conversational AI chatbot project.</p>
      <span class="tech-badge">Python</span>
      <span class="tech-badge">NLP</span>
    </div>
  </div>

  <div class="col-sm-6 col-md-4">
    <div class="mini-card">
      <a href="https://github.com/yaniguan/bookmark_with_extensions" target="_blank" class="mini-title">
        <i class="fab fa-github me-1"></i>bookmark_with_extensions
      </a>
      <p class="mini-desc">Browser extension for enhanced bookmark management.</p>
      <span class="tech-badge">JavaScript</span>
      <span class="tech-badge">Extension</span>
    </div>
  </div>

</div>
