---
title: Automatic Behavior Tree Expansion with LLMs for Robotic Manipulation
authors:
- name: Jonathan Styrud
- name: Matteo Iovino
- name: Mikael Norrlöf
- name: Mårten Björkman
- name: Christian Smith
tags: [JIK Reference, Robotics, Large Language Model, Behavior Tree, Robotic Manipulation, International Conference on Robotics and Automation 2025]
---

# Automatic Behavior Tree Expansion with LLMs for Robotic Manipulation

<!--truncate-->
Robotic systems for manipulation tasks are increasingly expected to be easy to configure for new tasks or unpredictable environments, while keeping a transparent policy that is readable and verifiable by humans. 

This paper proposes **BETR-XP-LLM** (BEhavior TRee eXPansion with Large Language Models), a method to dynamically and automatically expand and configure Behavior Trees as policies for robot control. 

The method utilizes an LLM to resolve errors outside the task planner's capabilities, both during planning and execution. It demonstrates the ability to solve various tasks and failures and permanently update the policy to handle similar problems in the future.

<!-- truncate -->

## Key Features
- **Dynamic Expansion**: Automatically grows the BT to handle new situations.
- **Error Resolution**: Uses LLMs to handle unexpected failures during execution.
- **Transparency**: Maintains the readability and verifiability inherent in Behavior Trees.
- **Permanent Updates**: The policy is updated to include solutions for previously encountered failures.

Source: [arXiv:2409.13356](https://arxiv.org/abs/2409.13356)
