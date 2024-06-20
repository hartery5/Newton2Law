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

### (2) Experiments
To conduct an experiment, press "go". Position, velocity, and acceleration data will appear in each of the plots. A summary of the selected values and the resulting acceleration will appear to the right. After each experiment, click "reset".

#### Experiment 1
Set $`m_1`$ = 750 g, $`m_2`$ = 50 g, and $\mu$ = 0.1.

Compare the magnitude of $F_s$ and $F_T$. Are they equal, or is one force larger than the other?

What is the resulting acceleration of the cart?

#### Experiment 2
Keep m$`_1`$ = 750 g and remove friction by setting $`\mu`$=0. 

Try a few experiments varying the mass of m$`_2`$. 

How would you describe the motion? Motionless? Constant Velocity? Constant Acceleration?

Notice which forces change in magnitude as m$`_2`$ varies (AND, which forces do not change). 

How would you describe the relationship between the acceleration of m$`_1`$ and the mass of m$`_2`$? Proportional? Inversely Proportional? Linear? Non-Linear?

#### Experiment 3
Now keep m$`_2`$ = 50 g and vary m$`_1`$. 

Notice which forces change in magnitude as m$`_1`$ varies (AND, which forces do not change). 

How would you describe the relationship between the acceleration of m$`_1`$ and its own mass? Proportional? Inversely Proportional? Linear? Non-Linear? 

#### Experiment 4
You should leave this experiment until we explore friction in subsequent lectures.

It helps to elaborate on what $`\mu`$ represents. $`\mu`$ is a dimensionless quantity, independent of size and mass, which characterizes the amount of friction that exists between two objects: $`\mu`$=0, represents no friction while $`\mu`$=1 represents a lot of friction. An object can encounter static friction when it is at rest, and kinetic friction when it slides.

##### Sub-Experiment A
Set m$`_1`$=750 g and m$`_2`$ = 10 g and $\mu$ = 0.04.

Begin increasing the value of $m_2$, but keep below 40 g.

Notice what happens to $F_s$ and $F_T$ as $m_2$ is varied in this range.

##### Sub-Experiment B
Increase $m_1$ to 40 g.

Notice what happens to $F_k$ and $F_T$ as $\mu$ is varied in the range 0 - 0.05.

##### Sub-Experiment C
Set $\mu$ = 0.01.

Notice what happens to $F_k$ and $F_T$ as $m_2$ is varied.

##### Sub-Experiment D
Set the value of $`\mu`$=0.04.

Vary $`m_1`$.

Notice what happens to $F_{k}$ as $`m_1`$ is varied.

## Math
I would suggest revisiting this once we have made more headway in Chapter 5. The tedium of vector mathematics is presented in its entirety for clarity (to whom?).

We will analyze the cart on the table as it slides frictionlessly across the table (see advanced exercise for friction). The net force results from the sum of all forces:

$$ \vec{F_{net,1}} = \sum_i \vec{F_{i,1}} $$ 

$$ \vec{F_{net,1}} = \vec{F_{N,1}} + \vec{F_{g,1}} + \vec{F_{T,1}}$$

It is convenient to express Newton's Laws along our independent axes of motion, y and x. Along x:

$$ \vec{F_{net,1,x}} = \sum_i \vec{F_{i,1,x}} $$

$$ \vec{F_{net,1,x}} = \vec{F_{N,1,x}} + \vec{F_{g,1,x}} + \vec{F_{T,1,x}} $$

It is obvious that both the normal force and weight force have no component along the x-axis:

$$ \vec{F_{net,1,x}} = \vec{F_{T,1,x}} $$

Similar analysis along the y-axis yields:

$$ \vec{F_{net,1,y}} = \vec{F_{N,1,y}} + \vec{F_{g,1,y}}$$

Applying Newton's 2nd Law:

$$\vec{F_{T,1,x}} = m_1\vec{a_{1,x}}$$

$$+\vec{F_{N,1,y}} + \vec{F_{g,1,y}} = m_1\vec{a_{1,y}}$$

We now switch from vector components to signed scalar components. Sign conventions will be standard (x increases rightward, y increases upward). Doing so, we find:

$$ +F_{T,1,x} = m_1a_{1,x}$$

$$ +F_{N,1,y} - F_{g,1,y} = m_1a_{1,y}$$

We physically observe that $a_{1,y} = 0$:

$$ +F_{T,1,x} = m_1a_{1,x}$$

$$ +F_{N,1,y} - F_{g,1,y} = 0$$

Phew... it's worth going through that formal exercise at least once. But, for object two we'll be a bit quicker about it:

$$ +F_{T,2,y} - F_{g,2,y} = -m_2a_{2,y}$$

Notice that acceleration takes on a sign based on our convention! $a_{2,y}$ is the magnitude of the acceleration of object 2 along the vertical axis. 

We might have too many variables... however, we can recognize something about connected objects: $`a_{1,x}=a_{2,y}=a`$. Further, the tension in an ideal, massless string is equal at all points: $`F_{T,1,x}=F_{T,2,y}=F_T`$. We simplify our system as follows:

$$ F_{T} = m_1a$$

$$ +F_{N,1,y} - F_{g,1,y} = 0$$

$$ +F_{T} - F_{g,2} = -m_2a$$

Recall that weight is the product of an object's mass and the acceleration due to gravity:

$$ F_g = m g$$

We also observe that since gravity only acts along the y-axis:

$$ F_g = F_{g,1,y} $$

So, 

$$ +F_{T} = m_1a$$

$$ +F_{N,1,y} - m_1g = 0$$

$$ +F_{T} - m_2g = -m_2a$$

Equation (2) doesn't yield anything interesting. However, Equation (1) can be substituted into Equation (3):

$$ m_1a - m_2g = -m_2a$$

Bring all terms with $a$ to LHS and all other terms to RHS:

$$m_1a + m_2a  = m_2g$$

Group:

$$a(m_1 + m_2)  = m_2g$$

Divide:

$$a  = g\left(\frac{m_2}{m_1+m_2}\right)$$

It's convenient to factor out $m_1$ from the numerator and denominator:

$$a  = g\left(\frac{\frac{m_2}{m_1}}{\frac{m_2}{m_1}+1}\right)$$

When $m_1~\gg~m_2$ (i.e. $`\frac{m_2}{m_1}\simeq0`$), it can be shown that:

$$ a \simeq \frac{m_2}{m_1}g $$

where g = 9.8 m/s$`^2`$ is the acceleration due to gravity at sea level. This should verify your prior observations from Experiment 1 and 2 that $`a_1~\propto~m_2`$ and $`a_1~\propto~\frac{1}{m_1}`$.

## Advanced Task
Express the acceleration of cart 1 in terms of $m_1$, $m_2$ and $\mu$ by taking kinetic friction into consideration. You should find:

$$ a = g \left(\frac{\frac{m_2}{m_1} - \mu}{\frac{m_2}{m_1} + 1}\right) $$

Notice that the original result is recovered if $\mu=0$, as desired.


