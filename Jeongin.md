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
Now, let's move on to Section 6 and discuss the results of these experiments.
#### Slide 6
First, for RQ1-1: How well do the authors' filters work? The results were excellent. 
Their two filtering stages—Failure-Irrelevant and Semantic-Preserving—dramatically reduced the search space. 
On average, they only had to analyze about 11% of the original commit history.
They also confirmed that using git log for history tracking was the right choice, as it was fast and, most importantly, had a 100% validity ratio, meaning it never accidentally filtered out the true BIC.
#### Slide 7
Next, RQ1-2: How good is FONTE's final ranking? 
As you can see from the chart, FONTE combined with SBFL achieved a Mean Reciprocal Rank (MRR) of 0.481. 
This is significantly better than the random baseline. 
To put this in perspective, this means FONTE placed the correct BIC in the number one spot 32% of the time, and within the top 5 spots over 70% of the time. 
The IRFL combination was also strong, but SBFL performed slightly better in the authors' dataset.
#### Slide 8
This leads to an important finding about the impact of the FL technique. 
The reason FONTE performed better with SBFL was simply that, for this particular dataset, SBFL was more accurate at the code level, outperforming IRFL on 60% of the bugs. 
This is a key conclusion from the paper: FONTE's performance is directly tied to the accuracy of the underlying FL tool. 
As better FL techniques are developed, the authors suggest FONTE's performance will automatically improve with them.
#### Slide 9
For RQ1-3, the authors conducted an ablation study to see which parts of FONTE mattered most. 
The results are clear. When they removed 'Rank-based Voting', which translates FL scores into ranks, performance dropped by 7.3%. 
When they removed 'Depth-based Decay', which penalizes older commits, performance also dropped by 7.3%. 
And when they removed both, the performance drop was nearly 14%. 
This result confirms that both of these features are critical components of FONTE's success.
#### Slide 10
So, how does FONTE stack up against other State-of-the-Art (SOTA) tools? This is RQ2. 
As the graph shows, FONTE significantly outperforms all of them. 
The authors' best model, FONTE with SBFL, achieved an MRR of 0.481. 
This is at least 45% better than the next best baseline, Bug2Commit, and even further ahead of others. 
It's also important to note that many of these other tools, marked with a dagger, require bug reports, whereas this SBFL-based approach does not.
#### Slide 11
Finally, RQ3 looked at the efficiency of the authors' 'Weighted Bisection' method, which uses FONTE's scores to guide the search. 
When searching the entire commit history, their method reduced the number of bisection steps in 98% of cases, saving an average of 6.3 steps. 
Even on the already-reduced search space, it still saved steps in 65% of cases. 
This confirms it is a much more efficient way to pinpoint the BIC than a standard binary search.
#### Slide 12
To put this work in context, let's briefly look at Section 9: Related Work.
#### Slide 13
Existing BIC identification techniques fall into two main categories. 
First, IR-based techniques like Bug2Commit rely on textual similarity between bug reports and commits.
FONTE is different because it doesn't require these textual artifacts. 
Second, FL-Score-based techniques have tried to use fault localization, but they haven't effectively mapped these scores to the commit history. 
The authors state that FONTE's main contribution is providing a robust algorithm that successfully bridges this gap, ranking the commit history itself based on code-level fault data.
Thank you for your attention. Next, Soo-bin Park will continue the presentation with the Conclusion and Application section.