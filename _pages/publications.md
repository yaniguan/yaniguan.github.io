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
Publications come from \_bibliography/papers.bib via jekyll-scholar.
Everything below is emitted at column 0 on purpose: indented HTML would be
parsed as a markdown code block.
{%- endcomment -%}

{% for group in site.data.software.groups %}

<section class="about-section">
<h2 class="about-section-title">{{ group.title }}</h2>
{% for item in site.data.software.items %}{% if item.group == group.id %}
<div class="lst-item">
<div class="lst-title">{% if item.url %}<a href="{{ item.url }}">{{ item.name }}</a>{% else %}{{ item.name }}{% endif %}{% if item.tagline %} <span class="lst-sub">— {{ item.tagline }}</span>{% endif %}</div>
{% if item.description %}<p class="lst-desc">{{ item.description }}</p>{% endif %}
{% if item.stack %}<div class="lst-meta">{{ item.stack }}</div>{% endif %}
</div>
{% endif %}{% endfor %}
</section>
{% endfor %}

<section class="about-section">
<h2 class="about-section-title">Publications</h2>
<p class="lst-meta" style="margin: -0.9rem 0 1.4rem">410 citations · h-index 9 · i10-index 9 — <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a></p>
{% include bib_search.liquid %}
<div class="publications">{% bibliography %}</div>
</section>
