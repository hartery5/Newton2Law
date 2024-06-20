# Newton2Law
A simple modified Atwood machine simulation to use for an interactive teaching demo. [Try it here!](https://hartery5.github.io/Newton2Law/)

## Background
The purpose of this demonstration is two-fold:

### (1) Free Body Diagrams
To understand the motion of an object we need to know the external forces exerted on the object. In a simple Newtonian framework, forces can be exerted either from direct contact with another object (e.g. the normal force, tension, air resistance, friction, etc.) or a fundamental force "at-a-distance" (e.g. gravity, Lorentz, strong, etc.).

By isolating an object from its surroundings we can identify points of contact with the surroundings and assign labels to each force. In this experiment, you will observe the following contact forces:
- $`\vec{F_T}`$, Tension
- $`\vec{F_N}`$, Normal
- $`\vec{F_k}`$, Kinetic friction
- $`\vec{F_s}`$, Static friction

And the following non-contact force:
- $`F_g`$, Weight

You will be able to vary the following quantities:
- $`m_1`$, the mass of the cart on the table
- $`m_2`$, the mass of the box suspended from the pulley
- $`\mu`$, the coefficient of friction

The goal of this exercise is to allow you to utilize the scientific method to explore relationships between the independent variables you can control and the dependent variable:
- $a_1$, the acceleration of the cart on the table

This is accomplished by simultaneous plotting of x-t, v-t, and a-t graphs. 

### (2) Newton's 1st and 2nd Law
How does a free-body diagram help us understand motion? Imagine two people on either side of a crate of apples. They are both pushing the crate in opposite directions. If they each push with equal force, the box surely does not move. The same is true for the cart on the table. When the force of friction matches the force of tension, the cart won't move along the horizontal axis. Similarly, the normal force counteracts the force of gravity such that the cart doesn't move along the vertical axis. This forms one-half of the commonly quoted version of Newton's 1st Law: "If there is no net force acting on an object, then an object at rest will remain at rest." We will explore the other half of this statement in another lecture.

#### Experiment 1
Well, what happens when there is a net force acting on an object? The object accelerates! As an experiment, keep m$`_1`$ at a constant value and remove friction by setting $`\mu`$=0. Then, try a few experiments varying the mass of m$`_2`$. First, notice which forces change in magnitude as m$`_2`$ varies (AND, which forces do not change). How would you describe the relationship between the acceleration of m$`_1`$ and the mass of m$`_2`$? Proportional? Inversely Proportional? Linear? Non-Linear?

#### Experiment 2
Now keep m$`_2`$ constant and vary m$`_1`$. How would you describe the relationship between the acceleration of m$`_1`$ and its own mass? Proportional? Inversely Proportional? Linear? Non-Linear? 

#### Newton's 2nd Law
This latest experiment tells us something rather interesting: if the net force exerted on an object remains constant, then the acceleration of an object is inversely proportional to its own mass! This makes intuitive sense: my cat can knock a book off the shelf with a light push, but the same push could not tip over the bookshelf (thankfully...). We can summarize Newton's 2nd Law, thusly:

$$\vec{a} = \frac{\vec{F_{net}}}{m}$$

Notice my purposeful use of vector notation. The object will accelerate in the direction of the net (or unbalanced) force.

#### Experiment 3
You should leave this experiment until we've explored friction in subsequent lectures. A final experiment you can conduct is to vary $`\mu`$ while keeping m$`_1`$=750 g and m$`_2`$ = 30 g. It helps to elaborate on what $`\mu`$ represents. $`\mu`$  characterizes the amount of friction that exists between objects: $`\mu`$=0, represents no friction while $`\mu`$=1 represents a lot of friction. It will help your intuition to set $`\mu`$=0.1 initially. 

Notice that at this maximum value of $`\mu`$, the force of friction equals the force of tension: in other words, there is sufficient friction to keep the object from moving altogether! We call this static friction (not for "static" electricity, as it is often used in NA, but for the lack of motion). 

##### Sub-Experiment A
Begin decreasing the value of $\mu$.

Notice that as you decrease the value of $\mu$, static friction remains equal and opposite to the external force that wants to set the object in motion over a range of values of $`\mu`$. However, as you continue to decrease $\mu$, you can observe a threshold where the force of friction becomes "kinetic", $F_k$: in other words, the object will slide when released. 

##### Sub-Experiment B
Continue to decrease the value of $\mu$ now that the object experiences kinetic friction.

Notice that the force of kinetic friction *is* proportional to $`\mu`$: as you decrease its value, the force of kinetic friction decreases.

##### Sub-Experiment C
Set the value of $`\mu`$ to some value where kinetic friction is acting. Vary $`m_1`$.

Notice that $F_{k}$ is proportional to the weight of the object.

From these sub-experiments, you should take away the following:

(1) If the sum of the other external forces parallel to the plane of contact is less than some critical threshold, $F_{s,max}$, then the force of static friction will be equal and opposite to the sum of the other external forces parallel to the plane of contact.

(2) If the sum of the other external forces exceeds $F_{s,max}$, then the object will begin to slide, encountering kinetic friction, $F_{k}$.

(3) The amount of kinetic friction (AND the threshold between static and kinetic friction) depends on the weight of the object.

We can summarize these observations in the following set of equations:

$$F_{s,max} = \mu_s F_{N}$$
$$F_{k} = \mu_k F_{N}$$

In principle, there are two different coefficients of friction for an object: static (s) and kinetic (k). They are often close in value and typically $`\mu_k < \mu_s`$.

## Math
I would suggest revisiting this once we have made more headway in Chapter 5. The mathematics is rather tedious and it involves introducing many things, which are better understood if they are spread across many lectures. 

We will analyze the system as it slides with kinetic friction. For the cart on the table, the net force results from the sum of all forces:

$$ \vec{F_{net,1}} = \sum_i \vec{F_{i,1}} = \vec{F_{N,1}} +  \vec{F_{k,1}} + \vec{F_{g,1}} + \vec{F_{T,1}}$$

It is convenient to express Newton's Laws along our independent axes of motion, y and x. 

$$ \vec{F_{net,1,x}} = \sum_i \vec{F_{i,1,x}} $$

$$ \vec{F_{net,1,x}} = \vec{F_{N,1,x}} +  \vec{F_{k,1,x}} + \vec{F_{g,1,x}} + \vec{F_{T,1,x}} $$

$$ \vec{F_{net,1,x}} = \vec{F_{k,1,x}} + \vec{F_{T,1,x}} $$

Briefly:

$$ \vec{F_{net,1,y}} = \vec{F_{N,1,y}} + \vec{F_{g,1,y}}$$

Applying Newton's 2nd Law:

$$+\vec{F_{k,1,x}} + \vec{F_{T,1,x}} = m_1\vec{a_{1,x}}$$

$$+\vec{F_{N,1,y}} + \vec{F_{g,1,y}} = m_1\vec{a_{1,y}}$$

We now switch from vector components to signed scalar components. Sign conventions will be standard (x increases rightward, y increases upward). Doing so, we find:

$$ F_{net,1,x} = -F_{k,1} + F_{T,1} = m_1a_{1,x}$$

$$ F_{net,1,y} = +F_{N,1} - F_{g,1} = m_1a_{1,y}$$

Our physical intuition tells us that the object accelerates along the x-axis, so:

$$ -F_{k,1} + F_{T,1} = m_1a_{1,x}$$

$$ +F_{N,1} - F_{g,1} = 0$$

Phew... it's worth going through that formal exercise at least once. But, for object two we'll be a bit quicker about it:

$$ +F_{T,2} - F_{g,2} = -m_2a_{2,y}$$

Notice that acceleration takes on a sign based on our convention! $a_2$ is the magnitude of the acceleration of object 2. 

We might have too many variables... however, we can recognize something about connected objects: $`a_{1,x}=a_{2,y}=a`$. Further, the tension in an ideal, massless string is equal at all points: $`F_{T,1}=F_{T,2}=F_T`$. We simplify our system as follows:

$$-F_{k,1} + F_{T} = m_1a$$

$$ +F_{N,1} - F_{g,1} = 0$$

$$ +F_{T} - F_{g,2} = -m_2a$$

Next, we can realize that we can express the magnitudes of some forces with respect to our independent variables, namely:

$$ F_{k} = \mu F_N $$

$$ F_g = m g$$

So, 

$$-\mu~F_{N,1} + F_{T} = m_1a$$

$$ +F_{N,1} - m_1g = 0$$

$$ +F_{T} - m_2g = -m_2a$$

Equation (2) can be substituted into Equation (1) to form a system of just two equations:

$$-\mu~m_1g + F_{T} = m_1a$$

$$ +F_{T} - m_2g = -m_2a$$

Re-arrange each equation for $`F_{T}`$:

$$F_{T} = m_1a + \mu~m_1g$$

$$F_{T} = m_2g - m_2a$$

Substitution:

$$m_1a + \mu~m_1g = m_2g - m_2a$$

Bring all terms with $a$ to LHS and all other terms to RHS:

$$m_1a + m_2a  = m_2g - \mu~m_1g$$

Group:

$$a(m_1 + m_2)  = g(m_2 - \mu~m_1)$$

Divide:

$$a  = g\left(\frac{m_2 - \mu~m_1}{m_1+m_2}\right)$$

It's convenient to factor out $m_1$ from the numerator and denominator:

$$a  = g\left(\frac{\frac{m_2}{m_1} - \mu}{\frac{m_2}{m_1}+1}\right)$$

When m$`_1`$ >> m$`_2`$ (i.e. $`\frac{m_2}{m_1}\simeq0`$) and $\mu$=0, it can be shown that:

$$ a_1 = \frac{m_2}{m_1}g $$

where g = 9.8 m/s$`^2`$ is the acceleration due to gravity at sea level. This should verify your prior observations from Experiment 1 and 2 that $`a_1~\propto~m_2`$ and $`a_1~\propto~\frac{1}{m_1}`$.


