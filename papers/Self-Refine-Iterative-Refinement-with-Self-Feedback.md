---
title: Self-Refine - Iterative Refinement with Self-Feedback
authors:
- name: Aman Madaan
- name: Niket Tandon
- name: Prakhar Gupta
- name: Skyler Hallinan
- name: Luyu Gao
- name: Sarah Wiegreffe
- name: Uri Alon
- name: Nouha Dziri
- name: Shrimai Prabhumoye
- name: Yiming Yang
- name: Shashank Gupta
- name: Bodhisattwa Prasad Majumder
- name: Katherine Hermann
- name: Sean Welleck
- name: Amir Yazdanbakhsh
- name: Peter Clark
tags: [JIK Reference, Large Language Model, Iterative Refinement, Self-Feedback, Artificial Intelligence]
---

# Self-Refine: Iterative Refinement with Self-Feedback

<!--truncate-->
Like humans, large language models (LLMs) do not always generate the best output on their first try. Motivated by how humans refine their written text, we introduce **Self-Refine**, an approach for improving initial outputs from LLMs through iterative feedback and refinement. 

The main idea is to generate an initial output using an LLM; then, the same LLM provides feedback for its output and uses it to refine itself, iteratively. Self-Refine does not require any supervised training data, additional training, or reinforcement learning, and instead uses a single LLM as the generator, refiner, and feedback provider. 

We evaluate Self-Refine across 7 diverse tasks, ranging from dialog response generation to mathematical reasoning, using state-of-the-art (GPT-3.5, ChatGPT, and GPT-4) LLMs. Across all evaluated tasks, outputs generated with Self-Refine are preferred by humans and automatic metrics over those generated with the same LLM using conventional one-step generation.

<!-- truncate -->

## Key Characteristics
- **Iterative Feedback**: LLM refines its own output.
- **No Extra Training**: Does not require supervised data or RL.
- **Versatility**: Effective across diverse tasks (dialogue, math, etc.).
- **Performance**: Significant improvement over one-step generation.

Source: [arXiv:2303.17651](https://arxiv.org/abs/2303.17651)
