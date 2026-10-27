---
layout: plain
permalink: /notes/
title: Notes
description: >
  Short write-ups — mostly on LLM pretraining and post-training, alignment,
  vision–language models, and the systems I build around them.
nav: false
---

{%- comment -%}
To add a note: drop a file in \_posts/ named YYYY-MM-DD-slug.md with
`layout: note`, a `title`, and a one-line `description` (used as the summary
below). Nothing here needs editing. HTML is emitted at column 0 on purpose.
{%- endcomment -%}

{% if site.posts.size == 0 %}

<p class="lst-desc">Nothing published yet.</p>
{% else %}
<div class="about-rows">
{%- assign shown_series = '' -%}
{% for post in site.posts %}
{%- if post.series -%}
{%- unless shown_series contains post.series -%}
{%- assign shown_series = shown_series | append: post.series | append: ' ' -%}
{% include note_series_block.liquid series=post.series %}
{%- endunless -%}
{%- continue -%}
{%- endif -%}
<div class="about-row">
<div class="about-row-date">{{ post.date | date: '%b %Y' }}</div>
<div class="about-row-val">
<div class="about-role"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
{{ post.description }}
</div>
</div>
{% endfor %}
</div>
{% endif %}
