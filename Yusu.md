#### Slide 1
Hi everyone, My name is 노유수  
Today I will present about, “Identifying Bug-Inducing Commits by Combining Fault Localization and Code Change Histories.”
#### Slide 2
This is the introduction section.
#### Slide 3
- Before getting into the details, let me briefly introduce the paper.
- This work was done by Gabin An et al, from the School of Computing at KAIST, South Korea.
- It was published at ICSE 2023, and an extended version was released in February 2025 on arXiv.
#### Slide 4
- I gonna explain the concept of a Bug Inducing Commit, or BIC.
- A BIC is the commit that actually introduces buggy code into the system.  
    Even if the bug does not cause an immediate failure, it can eventually lead to program failure later in the development cycle.
- Identifying a BIC is very important for three reasons.
-  First, it supports faster bug triage(트리아지). Since studies show that developers often fix their own bugs, knowing the BIC helps assign the issue to the right person quickly.
- Second, it enables more efficient debugging. In some cases, simply reverting the BIC can fix the bug, and it also improves the accuracy of fault localization techniques.
- Third, it can reduce testing cost, especially in batch testing environments, because it helps narrow down suspicious commits without rerunning too many tests.
- In CI/CD environments where code changes happen frequently and in parallel, finding the real BIC is not easy.  
    That is why automatic BIC identification techniques, like the one introduced in this work, are highly important.
#### Slide 5
- On this slide, I explain the main limitations of existing approaches for identifying Bug Inducing Commits.
- First, bisection-based methods perform a binary search over the commit history.  
    They repeatedly check out old versions, build the program, and run failing tests.  
    While this approach is intuitive, it has a very high computational cost, especially for large projects where building and testing each version is expensive.
- Second, we have IR-based techniques.  
    These treat the bug report as a query and commits as documents, and then calculate textual similarity between them.  
    Although they are lightweight, they heavily depend on the quality of the bug report and can only capture textual information.  
    As a result, they are weak at handling complex behavior-level failures and runtime issues.
#### Slide 6
- Third, there are SZZ-based methods.  
    These work by tracing back from a Bug Fixing Commit, or BFC, to find the commit that introduced the bug.  
    However, since they require the existence of a fixing commit, they cannot be used during the early debugging phase, when the bug has not yet been fixed.
- So overall, existing methods are either too expensive, too text-dependent, or simply unavailable when developers need them most.  
    This is why a new approach like FONTE is required.
    

  
**