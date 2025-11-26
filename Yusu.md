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
#### Slide 7
- In this part, I will introduce the core idea of FONTE and explain how it fundamentally differs from existing BIC identification approaches.
- First, traditional methods such as bisection and IR-based techniques try to directly connect a failure with a commit.  
    For example, they test different commits through repeated builds, or compare bug reports with commit messages using text similarity.
- However, FONTE takes a different perspective.  
    It does not directly match failure to commits.  
    Instead, it introduces a structured two-step relationship mapping:  
    from Failure to Code, and then from Code to Commit.
- So the flow becomes:  
    Failure → Code → Commit, rather than Failure → Commit.
- Let me explain each step.
#### Slide 8
- In the first step, FONTE builds the relationship between failure and code elements.  
    This is done using Fault Localization techniques, such as Spectrum-Based Fault Localization and IR-based Fault Localization.  
    These techniques analyze failing test executions and assign a suspiciousness score to each code element, such as a statement or a method.
- An important advantage here is that FONTE is not tied to a specific fault localization method.  
    As long as a new technique can provide suspiciousness scores, it can be integrated into FONTE seamlessly.  
    So FONTE is designed to evolve together with future advances in fault localization.
#### Slide 9
- In the second step, FONTE establishes the relationship between code elements and commits.  
    It uses version control history and history tracking tools such as git log, CodeShovel, and CodeTracker to trace how each piece of code has evolved over time.
- This allows FONTE to identify which commits modified or introduced the suspicious code elements.
#### Slide 10
- Finally, FONTE combines these two relationships to derive a failure-to-commit mapping.  
    A commit is considered more suspicious if it recently changed code that is highly related to the observed failure.
- In this way, FONTE extends traditional fault localization from the spatial domain — where the problem is in the code — into the temporal domain — when the problem was introduced in the commit history.
#### Slide 11
This is the background section.
