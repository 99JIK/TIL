---
title: Robot Behavior-Tree-Based Task Generation with Large Language Models
authors:
- name: Yue Cao
- name: C.S. George Lee
tags: [JIK Reference, Robotics, Behavior Tree, Large Language Model, Task Generation]
---

# Robot Behavior-Tree-Based Task Generation with Large Language Models

<!--truncate-->
Nowadays, the behavior tree is gaining popularity as a representation for robot tasks due to its modularity and reusability. Designing behavior-tree tasks manually is time-consuming for robot end-users, thus there is a need for investigating automatic behavior-tree-based task generation. 

Prior behavior-tree-based task generation approaches focus on fixed primitive tasks and lack generalizability to new task domains. To cope with this issue, we propose a novel behavior-tree-based task generation approach that utilizes state-of-the-art large language models. 

We propose a **Phase-Step prompt design** that enables a hierarchical-structured robot task generation and further integrate it with behavior-tree-embedding-based search to set up the appropriate prompt. In this way, we enable an automatic and cross-domain behavior-tree task generation. 

Our approach does not require a set of pre-defined primitive tasks. End-users only need to describe an abstract desired task and our proposed approach can swiftly generate the corresponding behavior tree.

<!-- truncate -->

## Innovation
- **Phase-Step Prompt Design**: Hierarchical task generation.
- **Cross-Domain Capability**: No need for pre-defined primitive tasks.
- **Ease of Use**: Generates BTs from abstract natural language descriptions.

Source: [arXiv:2302.12927](https://arxiv.org/abs/2302.12927)
