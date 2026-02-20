---
title: LLM-BT - Performing Robotic Adaptive Tasks based on Large Language Models and Behavior Trees
authors: [Yunhan Lin, et al.]
tags: [Robotics, LLM, Behavior Trees, Adaptive Tasks, ICRA 2024]
---

# LLM-BT: Performing Robotic Adaptive Tasks based on Large Language Models and Behavior Trees

Handling external disturbances during complex robotic tasks remains a challenge. This paper proposes a novel method, **LLM-BT**, to achieve robotic adaptive tasks by combining Large Language Models (LLMs) and Behavior Trees (BTs).

The process involves:
1. **Reasoning**: Using ChatGPT to reason through descriptive task steps.
2. **Environment Understanding**: Constructing semantic maps via object recognition.
3. **Parsing**: A BERT-based Parser module converts descriptive steps into initial BTs.
4. **Dynamic Updating**: A BTs Update algorithm expands the tree to handle environmental changes and disturbances.

Unlike other LLM-based methods, LLM-BT outputs variable BTs that can add and execute new actions dynamically, making the system robust to external disturbances.

<!-- truncate -->

## System Components
- **ChatGPT**: High-level reasoning and task planning.
- **Semantic Mapping**: Object recognition for environment awareness.
- **BERT-based Parser**: Translates natural language steps into structured BT nodes.
- **Update Algorithm**: Ensures robustness by dynamically modifying the BT during execution.

Source: [arXiv:2404.05134](https://arxiv.org/abs/2404.05134)
