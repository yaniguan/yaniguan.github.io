---
layout: post
date: 2026-10-01 08:00:00-0400
inline: true
related_posts: false
---

Started three projects on equivariant networks for chemistry:
<a href="https://github.com/yaniguan/WignerFlow" target="_blank">WignerFlow</a>, an autoregressive
E(3)-equivariant transformer that generates MD trajectories in place of the integrator;
<a href="https://github.com/yaniguan/YLM" target="_blank">YLM</a>, irreps-to-text attention that lets
language tokens query l ≥ 1 geometric features directly; and
<a href="https://github.com/yaniguan/ouroboros-ocsr" target="_blank">Ouroboros</a>, steerable
SE(2)-equivariant encoders for chemical structure recognition. On the GPU side, channel-wise tensor
products replaced e3nn's fully connected ones for a ~40× speed-up, and the first training runs are
queued on V100 nodes at SDSC Expanse and UCLA Hoffman2.
