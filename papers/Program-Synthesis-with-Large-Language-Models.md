---
title: Program Synthesis with Large Language Models
authors: [Jacob Austin, Augustus Odena, et al.]
tags: [LLM, Program Synthesis, Python, MBPP, MathQA]
---

# Program Synthesis with Large Language Models

This paper explores the limits of the current generation of large language models (LLMs) for program synthesis in general-purpose programming languages. 

The authors evaluate models ranging from 244M to 137B parameters on two new benchmarks: **MBPP** (Mostly Basic Programming Problems) and **MathQA-Python**. These benchmarks measure the ability to synthesize short Python programs from natural language descriptions.

Key findings include:
- Synthesis performance scales log-linearly with model size.
- Largest models (few-shot) solve 59.6% of MBPP tasks.
- Fine-tuning improves performance by approximately 10 percentage points.
- Human feedback in a dialogue format can halve the error rate.
- Models still struggle with semantic grounding (predicting program execution results).

<!-- truncate -->

## Key Datasets
- **MBPP**: 974 programming tasks for entry-level programmers.
- **MathQA-Python**: 23,914 problems evaluating synthesis from complex text.

## Insights
- **Scalability**: Performance increases predictably with model parameter count.
- **Human-in-the-loop**: LLMs can effectively incorporate natural language feedback to refine code.
- **Limitations**: Predicting the output of a program given specific input remains a significant challenge for these models.

Source: [arXiv:2108.07732](https://arxiv.org/abs/2108.07732)
