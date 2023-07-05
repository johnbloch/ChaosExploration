# ChaosExploration
AN EXPLORATION OF CHAOS  
John Bloch  
A Special Recursive Sequence  
A few months ago, my math teacher, Mr. Shah, told me about this simple looking  recursive sequence:  
x (1 ) n+1 = rxn ­ xn 
I decided to do some investigating. My first instinct was to write a p5.js program to qualitatively  visualize how this sequence evolves, depending on which values I pick for r and the sequence’s  first term ( x 1). As per Mr. Shah’s advice, I only looked at r values between 0 and 4, and first  terms between 0 and 1. My program graphed the first 100 terms of the sequence.  
The results were interesting.  
r = 0.5 and x 1 = 0.5  

This was what I had expected. However, something very strange happened when I increased the  value of r. 

r = 3.8 and x 1 = 0.5:  
When I first got a glimpse of this utter mayhem, I immediately thought that maybe something  had gone wrong with my program… but I realized that my program was functioning just fine. It  was performing the same exact operations as it had for the smaller r value, but for some reason,  there wasn’t any discernible pattern.  
At this point, my biggest question was this:  
How can such a seemingly simple recursive sequence behave in such a chaotic way?  
In order to get some insight into how changing the initial conditions of the equation might affect  the sequence’s behavior, I created a chart with sketches of the sequence for different values of r  and x 1.  
r  
x 1

There were two important things I took away from this chart:  
1. The first term of the sequence ( x 1) does not seem to impact the behavior of the sequence.  2. The value of r, however, does impact the behavior.  
a. When r is small, the behavior of the graph is fairly simple. However, as r  increases , we start to see the sequence bounce back and forth. Starting around  r=3.6, it seems totally random.  
In order to find out a) exactly what is happening as r increases, and b) for precisely what values  of r this strange behavior emerges, I needed a new way to visualize the sequence.  
A Different Type of Graph  
To get a better sense of how the sequence behaves in the long term for different r values, I wrote  a new program to generate a different type of graph. Instead of visualizing just one sequence  with one specific r value, this new graph would plot different r values (ranging from 0.2 to 3.8)  on the x-axis. Also, instead of plotting the first 100 terms of the sequence, this new graph would  plot the 10,000th term to the 10,100th term of the sequence on the y-axis for each r value. By  plotting a bunch of terms that are deep into the sequence, I would get some insight into how the  sequence behaves in the long term (i.e. Does it settle on a certain number? Does it bounce  between two numbers? Does it do something else?) depending on r .  
Already, I could see the parallels between this and my previous hand-drawn graph: the sequence  settles to one value for low r -values, but at around r = 3, the long term behavior begins to branch 
into two (meaning that the sequence bounces between two different values, rather than settling to  one value). And for r = 3.6 and r = 3.8, the sequence does not settle down to any pattern.  
In order to see how exactly this graph goes from something simple (bouncing between two  values) to something complicated, I created a more refined graph which plotted the r -values in  increments of 0.0001.  

Here’s the same graph, but we’ve zoomed in to just r -values between 3.4 and 3.6  With this graph (which is known as the logistic map), we can see how we go from simply  bouncing between two numbers ( r = 3.4) to chaos ( r = 3.6). The sequence goes from bouncing 
between 2 numbers, to 4 numbers, to 8, to 16, and so on. These “forks'' in the graph are known as  bifurcations. When the long term sequence bounces between 2 numbers, this is known as a  “period 2 cycle,” and when it’s bouncing between 4 numbers, it’s a “period 4 cycle,” and so on.  Moreover, the r -values at which the graph bifurcates seem closer with each subsequent  bifurcation -- the first bifurcation is at around r = 3.45, the next one is near r = 3.54, then r =  3.56, and so on. I later learned that since these bifurcation points gradually get closer and closer  together, starting at approximately r = 3.57, the logistic map “stops” bifurcating (although it  actually bifurcates forever…). The area of the graph after this r -value is known as the chaotic  region.  
Feigenbaum’s Constant  
In 1975, physicist Mitchell Feigenbaum made an important discovery about these r -values. He  noticed that they occur in a certain ratio.  
Visualization of the r -values at which the logistic map bifurcates  
- The vertical green lines highlight where the graph bifurcates  
- The horizontal lines represent the different regions of the graph (period 2, period 4, etc.)  Feigenbaum noted that the ratio between the length of the period 2 region and the length of the  period 4 region was similar to that of the length of the period 4 region and the length of the  period 8 region, and so on. As this process continues, these ratios approach approximately 4.669.  
This number is known as the Feigenbaum Constant -- the rate at which the logistic map  bifurcates. 
If we perform the calculations to find the ratios between the first few regions of the logistic map,  we can derive Feigenbaum’s Constant:  
In order to find the length of each region (period 2, period 4, etc.), we need to use the r -values  where the logistic map bifurcates.  
Here are the first few r -values where the graph bifurcates:  
period 2 length=3.4495­3 

period 4 length 
3.5441­3.4495 = 4.7515856237 

period 4 length= 3.5645­3.5441 

period 8 length 
3.5441­3.4495 = 4.637254902 

Actual constant = 4.669201609…  
Feigenbaum’s Constant is a universal constant, meaning it holds true for not only this specific  recursive sequence, but many others.  
For example, consider this recursive sequence:  
x in(πx ) 
n+1= r *s n 
If we perform the same calculations with its bifurcation points, we also get a ratio near  Feigenbaum’s Constant. 
Bifurcation diagram of a different recursive sequence: x in(πx ) 
n+1 = r *s n 
Note how even in the midst of all the chaotic behavior we see regions of stability!  
R -values of first few bifurcation points  
period 2 length=0.8333­0.72 

period 4 length 
0.8587­0.8333 = 4.4606299213 

period 4 length= 0.8641­0.8587 

period 8 length 
0.8587­0.8333 = 4.7037037037

Algebraically Understanding The Logistic Map  
Another interesting piece about the logistic map is that many of its features can be explained  algebraically.  
First consider just the first, simplest, portion of the logistic map (1 < r < 3):  In order to understand algebraically why this part of the logistic map looks the way it does, we  must first express the recursive sequence as a function.  
So, we go from this:  
x (1 ) n+1 = rxn ­ xn 
To this:  
f(x) = rx (1 ­ x ) 
With this new function, any input x will output the next term of the sequence. Moreover, since  we are looking at the long term (very large values of n ) behavior of the sequence, we know from  the logistic map that for 1 < r < 3 the sequence will settle down to ONE number. From this, we  can conclude that in the long term, any term will be equal to the next term . In other words, any  input x will be equal to its output. 
Thus, we can rewrite the function like this:  
x = rx (1 ­ x ) 
If we solve for x:  
x =rr­1 
If we graph this on Desmos, we see that it looks like the beginning of our logistic map!  This is because it is ! For any r -value between 1 and 3 that we plug into that equation, the  equation will output the value of the one term that the sequence settles to.  For example, if we plug in r = 2.5 to the function, we get x = 0.6. If we run the sequence for r =  2.5 on my program , we can see in the console that the sequence does in fact settle down to 0.6.  
We can also algebraically see the period 2 cycle with the same method!  
Previously, we said that f ( x ) = x , because we know that the sequence settles down to 1 number  (any term will be equal to the next term). However, since with period 2, we know that the  sequence settles down to a 2-number cycle, we can say that f ( f ( x )) = x . This equation states that  any term will be equal to the term after the next term, which we know to be true for the period 2  cycle.  
Here’s the algebra for the period 2 cycle:  
x = f(f(x)) 
x = r (x) 1 (x)) *f *( ­ f 
x = r(rx(1 ­ x))(1 ­ (rx(1 ­ x)))
If we graph that equation on Desmos, it gives us the period 2 region of the logistic map!  
We can also see that, as seen in the logistic map, the first bifurcation happens at r = 3.  
In theory, we could repeat this process for each subsequent region of the logistic map. For  example, the period 4 region could be graphed using this equation:  
x = f(f(f(f(x))) 
Significance of the Logistic Map  
We saw that, for certain r -values, our “simple” recursive sequence produced very  complicated and seemingly random behavior. The study of this type of behavior is called chaos  theory. The logistic map was one of the earlier examples of how simple equations can yield  chaotic behavior (in fact, it was one of the first methods of using computers to generate  “random” numbers). This idea - that very small changes within a system can result in drastic  differences - lies at the heart of chaos theory. We saw in the logistic map that as we changed the  value of r , there were substantial changes in the behavior of the sequence. This idea of minor  changes yielding very different results is often referred to as the Butterfly Effect -- the idea that a  butterfly flapping its wings in China could cause a storm in New York the next week.  
Chaos theory is an interdisciplinary field, meaning that it applies to a wide range of  studies. One example of this is irregular heartbeat patterns: scientists performing a study on heart  fibrillations (irregular patterns of heartbeats) in rabbits were actually able to use chaos theory to  determine when to deliver electric shocks to return the rabbits’ heartbeats back to normal  rhythms. The irregular rhythm of water dripping from a faucet can be modeled using chaos  theory. A boiling pot of water is yet another example of chaos in the real world. There’s more:  clouds, blood vessels, moth populations, and even the stock market can all be better understood  using chaos theory. Chaos is all around us. 
