#### Slide 1
**
Hello, Everyone. My name is 정인 
We'll start with Section 5, which covers our Evaluation Setup.

**
#### Slide 2
In this study, the authors demonstrate the applicability of FONTE to industry-scale software by experimenting with SAP HANA.  
SAP HANA is a commercial database system with over ten million lines of C and C++ code. In its CI process, multiple commits that pass pre-submit tests are merged into the delivery branch and tested together as a single batch once a day.

This batch-testing approach helps reduce testing costs, but it also introduces challenges.  
When a batch test fails, it becomes unclear which commit actually caused the failure.  
The paper also notes that using bisection in this environment can be very time-consuming due to the heavy compilation and testing cost.
#### Slide 3
For the SAP HANA experiment, the authors set up the evaluation as follows.

They collected 23 batch testing failures that occurred between July and August 2022, along with the BICs identified by the existing bisection process, using internal CI logs.

Because SAP HANA does not measure test coverage for each batch but updates coverage periodically through a separate process, the experiment uses the latest line-level coverage to compute Ochiai scores.  
Since Ochiai only requires the lines covered by failing tests, there is no need to compute coverage information for the entire codebase.

All commits in each batch were submitted on the same day, so there is little temporal difference between them.  
For this reason, depth-based decay was not applied, and the other hyperparameters were set to α = 1 and τ = max, which showed the best performance for λ = 0 in the Defects4J experiment.
#### Slide 4
The performance results of applying FONTE to SAP HANA are as follows.

Each batch contains about 18.5 commits on average, and the evaluation measures how highly FONTE ranks the true BIC among these commits.

FONTE achieves a strong MRR of 0.600, and in terms of accuracy, more than half of the cases place the BIC within the top 2.  
Compared to the random baseline, the improvement is substantial: the MRR is about 5.5 times higher, and for Accuracy@5, the difference is 1 case versus 20 cases.

Overall, this shows that when there are roughly 18–19 candidate commits, FONTE is able to place the BIC almost always within the top 10, and in many cases within the top 1 or 2.
#### Slide 5
The study also compares weighted bisection, using FONTE’s commit scores, with standard bisection.

Among the 23 batch failures, weighted bisection reduced the number of iterations in 18 cases—about 78%—while it increased in 3 cases.  
Overall, this corresponds to roughly a 32% reduction in the number of required iterations.

Since a single iteration in SAP HANA can take several hours due to compilation and testing, this reduction implies a substantial decrease in the average cost of identifying the BIC.
#### Slide 6
This is the threats to validity section.
#### Slide 7
In terms of internal validity, the paper discusses two main points.

First, FONTE heavily depends on two relationships:  
the Cover relation between tests and code, and the Evolve relation between code and commits.  
To ensure correctness, the authors compared multiple code-history tools, evaluated their validity ratio and cost, and ultimately selected git log as the most reliable option.

Second, the reliability of baseline data was addressed by using Defects4J, a benchmark that provides well-validated links between real bug reports and buggy versions. This helps ensure that baseline methods receive accurate input data.
#### Slide 8
For external validity, the paper highlights two main points.

First, the generalizability of the results is strengthened by additionally applying FONTE to SAP HANA, a large-scale industrial C/C++ system. This demonstrates that FONTE can also work in real industry environments beyond open-source Java projects.

Second, the authors acknowledge a limitation: FONTE fundamentally assumes that failures are caused by bugs in executable source code. Therefore, it does not directly apply to bugs introduced through non-executable files such as configuration files or build scripts. They explicitly leave this issue as future work.
#### Slide 9
For construct validity, the paper discusses one main point.

Since the evaluation uses MRR and Accuracy@n—both absolute-rank metrics—the results may appear overly optimistic when the number of candidate commits is small.  
To address this, the authors provide the expected and worst values of a random ranking as baselines in every experiment.  
This allows us to see how much FONTE improves over random ranking, ensuring that its performance is not simply an artifact of having fewer candidates.
#### Slide 10
This is the conclusion section.
#### Slide 11
This paper proposes a BIC identification technique that can be used immediately when a failure is observed.

The approach consists of three main steps:

1. **Failure coverage** is used to narrow down the initial set of candidate commits.

2. **AST-based syntactic analysis** filters out semantic-preserving commits.

3. **Code-level suspiciousness scores** are effectively aggregated and translated into **commit-level scores.**
#### Slide 12
The key experimental results of the paper are as follows.

FONTE achieves an MRR of 0.481, significantly outperforming all existing baselines, including the latest state-of-the-art techniques.

It also successfully translates code-level suspiciousness into commit-level scores, enabling accurate ranking of BIC candidates.

Using FONTE’s commit scores, the weighted bisection reduces search iterations in 98% of cases, compared to standard bisection.

Finally, in a real industrial setting like SAP HANA’s batch-testing CI system, FONTE demonstrates a meaningful reduction in BIC identification cost.
#### Slide 13
This is the Strength & Weak
#### Slide 14
First, the strengths.  
FONTE is practical because it can be used immediately after a failure is observed.  
Applying weighted bisection significantly reduces the number of search iterations compared to the standard approach, which leads to meaningful debugging time reduction.  
In addition, FONTE preserves the true BIC by using conservative filtering — it removes only semantic-preserving commits, ensuring that real BICs are never discarded.  
Thanks to this design, FONTE becomes a practical and reusable framework.

As for the weaknesses:  
FONTE is sensitive to the accuracy of fault localization and the quality of commit-history tools.  
Core components such as Rank-based Voting Power and Depth-based Decay lack strong theoretical justification.  
The evaluation of real engineering cost is still limited, and although the paper identifies why weighted detection sometimes degrades performance, it does not yet offer concrete solutions.