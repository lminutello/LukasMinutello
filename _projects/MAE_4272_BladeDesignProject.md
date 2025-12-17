---
layout: project
title: Turbine Blade Design
description: Turbine blade design project for MAE 4272 
technologies: [MATLAB, python]
image: /assets/images/function-graph.png
---


The objective of this project was to design a blade for a three bladed turbine. Teams were given several geometric and operational constraints as well as probability distribution of windspeeds.

(Image of windspeed graph here)

Our teams' approach was to maximize power generation. The first step was to solve for the operating parameters where most power would be generated. The first of those parameters was windspeed, which was we derived wind probability distribution using the relationship between windspeed and power (P α U^3). The second was rotational velocity, which we derived from windspeed and a selected tip speed ratio of around 6.7 (ideal range is 6-8). The optimal operating paramters were found to be a windspeed of U = 5.3m/s and a rotation rate of ω = 1900RPM.

The next step was to select an airfoil for the blade. Given our windspeed and rotation rate, reynolds numbers were calculated at different lengths along the blade, and all were below 50000, which is within the low Re range for airfoils. NACA 4412 was selected which provided a high Cl/Cd ratio at low Re.

![Alt text describing the image](/assets/images/function-graph.png)
(pitch and taper graphs here)
(Twist and taper cad shown here)

After the optimal operting parameters and airfoil were selected, the geometry of the blade was defined. There are two main geometric considerations: the chord taper (how long the airfoil is at root vs. tip) and the pitch change (twist) along the length of the blade. Our method of designing the chord taper was simple and didn't account for the optimal operating parameters. We simply defined the taper as being proportional to the square root of one minus the radius (c(r) ∝ (1-r)^½). The twist was defined by first splitting the airfoil into a set number of quantized cross sections along the length and then changing the angle of attack of each of those cross sections until the total amount of useful force (in the rotation plane of the tubine) was generated.

After the geometry is designed, we needed to ensure that the blade wouldn't brake under load. For our load conditions for this structural analysis, we used a windpseed greater than the optimal power speed to account for the higher windspeeds in the probability distribution. We accounted for about two standard deviations above the mean, which came out to be about U = 7m/s. Rotation rate remained at 1900RPM for this analysis as it is assumed that the turbine torque brake/generator changes it resisting torque to reduce rotation rate. Bending moments about the chord at the root and about the connection point to the turbine center were the limiting load locations, but still had FOSs far above 1.

(include images of blades in the wind tunnel)

To actually test the blade, three of the blades were attatched to a center hub piece which was then mounted to a torque brake inside of a wind tunnel. The windspeed and the torque brake voltage were inputs for the testing setup. The testing procedure was as follows: Set torque brake voltage to zero, set tunnel windspeed, increase torque voltage at intervals and record until stall, redo with higher windspeeds. From this, rotation rate vs power curves were recorded for different windspeeds.

(show power graph below)

Our results showed that our power generation efficiency at our ideal operating parameters was around 20%. Importantly, the efficiency peak occurs in the same wind-speed range identified by the power-weighted Weibull analysis, confirming that the design successfully targeted the most energetically relevant operating conditions rather than maximizing instantaneous power alone. The betz limit states that the maximum energy that can be extracted from wind is 59.3%, so our blades were 34% as efficient as theoretically possible. Although utility-scale wind turbines achieve 75–80% of the Betz limit, our value is resonable given the fact that lab-scale, smaller, lower Re, lower powered turbines will always be less efficient.

Potential improvements to further maximize power and efficiency could be to change airfoil selection that maximizes lift are lower angles of attack, as maximum in plane force generation occured outside optimal angle of attack range for NACA 4412. Additionally, our team misread the size constraints and slightly undersized the chord. Perhaps there were some gains left of the table from the lack of that additional material.

Along with generally helping out with all areas of project progression, my main focus areas were the chord taper and pitch change calculations as well as creating the CAD model of the blade.

Figures:
Add these in between the paragraphs to make it flow better
(power curve plot, picture inside the windtunnel, picture irl, more angles of airfoil CAD)