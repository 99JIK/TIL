---
title: Comparison between Behavior Trees and Finite State Machines
authors:
- name: Matteo Iovino
- name: Julian Förster
- name: Pietro Falco
- name: Jen Jen Chung
- name: Roland Siegwart
- name: Christian Smith
tags: [Behavior Tree, State Machine, Robotics, Mobile Manipulation]
---

# Comparison between Behavior Trees and Finite State Machines

<!--truncate-->
Behavior Trees (BTs) were first conceived in the computer games industry as a tool to model agent behavior, but they received interest also in the robotics community as an alternative policy design to Finite State Machines (FSMs). 

The advantages of BTs over FSMs had been highlighted in many works, but there is no thorough practical comparison of the two designs. Such a comparison is particularly relevant in the robotic industry, where FSMs have been the state-of-the-art policy representation for robot control for many years. 

In this work we shed light on this matter by comparing how BTs and FSMs behave when controlling a robot in a mobile manipulation task. The comparison is made in terms of reactivity, modularity, readability, and design. We propose metrics for each of these properties, being aware that while some are tangible and objective, others are more subjective and implementation dependent. 

The practical comparison is performed in a simulation environment with validation on a real robot. We find that although the robot's behavior during task solving is independent on the policy representation, maintaining a BT rather than an FSM becomes easier as the task increases in complexity.

<!-- truncate -->

## Findings
- **Independence of Behavior**: The actual task execution behavior is independent of the policy representation.
- **Maintainability**: Maintaining a BT is easier than an FSM as task complexity increases.
- **Comparison Metrics**: Reactivity, modularity, readability, and design.

Source: [arXiv:2405.16137](https://arxiv.org/abs/2405.16137)
