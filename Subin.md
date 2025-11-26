#### Slide 1
Hello, Everyone. My name is 정인
I'll start with Section 5, which covers Evaluation Setup.
#### Slide 2
To build a reliable evaluation, the authors first needed a solid dataset.
They started with Defects4J, which has over 800 real Java bugs.
However, it doesn't provide the ground-truth BIC information.
So, they began with an existing dataset of 91 BICs, refined it down to 67 by removing irrelevant or inaccurate data, and then manually identified an additional 139 new BICs.
This resulted in a final, high-quality dataset of 206 ground-truth BICs for their evaluation.
#### Slide 3
Let's look at the implementation described in the paper. 
For the 'Cover Relation' between tests and code, the study used Cobertura to get statement-level coverage. 
For the 'Evolve Relation' between code and commits, the authors used git log to track change history, which they found to be faster and more accurate than other tools. 
Finally, they integrated two well-known Fault Localization (FL) techniques to compare their impact: the spectrum-based method Ochiai, and the IR-based method Blues.
#### Slide 4
The authors' evaluation was guided by three core Research Questions. 
First (RQ1), how accurately does FONTE find BICs? 
They broke this down into its filtering performance, its final ranking performance, and the impact of its key features. 
Second (RQ2), does FONTE actually outperform existing state-of-the-art approaches? 
And third (RQ3), is the paper's proposed 'weighted bisection' method more efficient than standard bisection for finding the BIC?
#### Slide 5
**

Now, let's move on to Section 6 and discuss the results of these experiments.
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