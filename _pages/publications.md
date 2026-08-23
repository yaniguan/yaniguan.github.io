---
layout: plain
permalink: /publications/
title: Papers & Code
description: Peer-reviewed papers, preprints, and the software I build alongside them.
page_class: list-page
nav: true
nav_order: 2
---

{%- comment -%}
Software comes from \_data/software.yml — add an entry there, not here.
Publications come from \_bibliography/papers.bib via jekyll-scholar, split by
entry type and sorted by the scholar `sort_by` in \_config.yml. The sub-headings
are emitted as <h2 class="bibliography"> on purpose: that is the hook the
theme's bibsearch uses to hide a heading whose entries are all filtered out.

Only real jekyll-scholar switches may be used here (--file, --query,
--group_by, --max, --offset): an unknown one silently drops every switch after
it. Everything is emitted at column 0 — indented HTML becomes a code block.
{%- endcomment -%}

{% for group in site.data.software.groups %}

<section class="about-section">
<h2 class="about-section-title">{{ group.title }}</h2>
<div class="about-rows">
{% for item in site.data.software.items %}{% if item.group == group.id %}
<div class="about-row">
<div class="about-row-key">{% if item.url %}<a href="{{ item.url }}">{{ item.name }}</a>{% else %}{{ item.name }}{% endif %}</div>
<div class="about-row-val">
{% if item.tagline %}<div class="sw-lead">{{ item.tagline }}</div>{% endif %}
{{ item.description }}
{% if item.stack %}<div class="lst-meta">{{ item.stack }}</div>{% endif %}
</div>
</div>
{% endif %}{% endfor %}
</div>
</section>
{% endfor %}

<section class="about-section">
<h2 class="about-section-title">Publications</h2>
<p class="lst-meta" style="margin: -0.9rem 0 1.2rem">410 citations · h-index 9 · i10-index 9 — <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a></p>
{% include bib_search.liquid %}
<div class="publications">
<h2 class="bibliography">Papers &amp; preprints</h2>
{% bibliography --query @article --group_by none %}
<h2 class="bibliography">Conference</h2>
{% bibliography --query @inproceedings --group_by none %}
<h2 class="bibliography">Thesis</h2>
{% bibliography --query @mastersthesis --group_by none %}
</div>
</section>
