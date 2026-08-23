---
layout: note
title: Real data, not more synthetic data, closes the OCSR gap
description: What 21 fine-tuned recognizers say about mixing synthetic and real training images
date: 2026-08-22 09:00:00-0700
tags: [vlm, sft, lora]
---

A short summary of what we found in
[Real Data Closes Synthetic-to-Real Gap in Optical Chemical Structure Recognition](https://arxiv.org/abs/2608.09100).

Optical chemical structure recognition looks solved if you only test on rendered
molecules. The starting recognizer, Qwen2.5-VL-7B, reaches over 91% accuracy on
synthetic images — and below 16% on the ACS, CLEF-IP and USPTO benchmarks, which are
real document crops. That gap is the whole problem: millions of structures exist only as
drawings inside patents and papers.

So we fine-tuned 21 recognizers on mixtures of synthetically rendered structures and
labeled real depictions from patents, journal figures and hand-drawn collections, varying
three things independently: the base VLM, the fraction of real training data, and whether
the vision tower was adapted.

## Real data is the variable that matters

For Qwen2.5-VL, ACS exact match goes from 0.15 with no real data, to 0.37 at 9.5% real
data, to 0.46 at 50.2%. A tenth of the training mixture being real is worth more than
anything else we varied — which is a useful thing to know when labeling real depictions
is the expensive part.

## Vision-tower LoRA is base-dependent

Adapting the vision tower is usually treated as a knob you turn on. It isn't:

- Qwen2.5-VL: **+0.00**, paired _p_ = 1.00 — no effect at all.
- InternVL3-8B: **+22.8 to +34.6 points**.
- GLM-4.1V-9B: a modest gain.

Same task, same data, opposite conclusions depending on the backbone. Any claim of the
form "vision LoRA helps VLM fine-tuning" needs the base model attached to it.

## Choose the base and the mixture together

The spread between base models is largest with no real data (0.21) and shrinks to 0.06 at
70% real data — and the _ranking_ changes along the way. Picking a backbone on a
synthetic-only ablation and then scaling up real data can leave you on the wrong model.

The strongest recognizer ends at 0.96 exact match on clean renders and 0.49, 0.65, 0.84
and 0.76 on ACS, CLEF-IP, UOB and USPTO respectively. Real documents are still far from
solved — which is why the production path we ship,
[VERDICT](/publications/), is an ensemble that abstains rather than a single model that
always answers.
