---
title: "An Expressiveness Hierarchy of Behavior Trees and Related Architectures"
authors: ["Oliver Biggar", "Mohammad Zamani", "Peta Corke"]
tags: [Behavior Trees, Expressiveness, Formal Analysis, FSM, Decision Trees, IEEE RA-L]
---

# An Expressiveness Hierarchy of Behavior Trees and Related Architectures

Behavior Tree(BT)와 관련 제어 아키텍처들의 표현력(expressiveness)을 형식적으로 비교하는 계층 구조를 제시한다. IEEE Robotics and Automation Letters 게재 논문.

<!-- truncate -->

## 핵심 기여

- **표현력(Expressiveness) 개념 형식화**: 어떤 아키텍처가 다른 아키텍처를 표현할 수 있는지를 정의하는 수학적 프레임워크 구축
- **표현력 계층 도출**: BT, Decision Tree(DT), Teleo-reactive Program(TR), Finite State Machine(FSM) 간의 표현력 계층 관계 증명
- **보조 변수의 역할**: 보조 변수(auxiliary variable) 유무에 따라 BT의 표현력이 달라짐을 규명 → 가독성-표현력 트레이드오프 존재
- **설계 지침 도출**: 실제 BT 설계 시 어느 수준의 복잡도가 필요한지 이론적 근거 제공

## 의의

"BT가 FSM보다 나은가?"라는 실용적 질문에 이론적 답변을 제공한다. BT 설계 시 구조적 한계를 인식하고 적절한 아키텍처를 선택하는 근거가 된다.

Source: [arXiv:2104.07919](https://arxiv.org/abs/2104.07919)
