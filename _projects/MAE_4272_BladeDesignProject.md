---
layout: project
title: Turbine Blade Design
description: Turbine blade design project for MAE 4272 
technologies: [MATLAB, python]
image: /assets/images/TurbineBladeDesign/irl.png
---


The objective of this project was to design a blade for a three-bladed turbine. Teams were given several geometric and operational constraints as well as a probability distribution of wind speeds.

Our team's approach was to maximize power generation. The first step was to solve for the operating parameters where most power would be generated. The first of those parameters was windspeed, which was derived from the wind probability distribution using the relationship between windspeed and power (P α U^3). The second was rotational velocity, which we derived from windspeed and a selected tip speed ratio of around 6.7 (ideal range is 6-8). The optimal operating parameters were found to be a windspeed of U = 5.3m/s and a rotation rate of ω = 1900RPM.

<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  <img src="{{'/assets/images/TurbineBladeDesign/WindDistribution.jpg' | relative_url }}" alt="wind distribution" style="width: 100%; height: auto;">
</div>

The next step was to select an airfoil for the blade. Given our wind speed and rotation rate, Reynolds numbers were calculated at different lengths along the blade, and all were below 50000, which is within the low Re range for airfoils. NACA 4412 was selected, which provided a high Cl/Cd ratio at low Re.

After the optimal operating parameters and airfoil were selected, the geometry of the blade was defined. There are two main geometric considerations: the chord taper (how long the airfoil is at the root vs. tip) and the pitch change (twist) along the length of the blade. Our method of designing the chord taper was simple and didn't account for the optimal operating parameters. We defined the taper as being proportional to the square root of one minus the radius (c(r) ∝ (1-r)^½). The twist was defined by first splitting the airfoil into a set number of quantized cross sections along the length and then changing the angle of attack of each of those cross sections until the total amount of useful force (in the rotation plane of the turbine) was generated.

<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  <img src="{{'/assets/images/TurbineBladeDesign/spanTwistAndGraph.png' | relative_url }}" alt="span, twist and pitch graph" style="width: 100%; height: auto;">
</div>

After the geometry was designed, we needed to ensure that the blade wouldn't break under load. For our load conditions for this structural analysis, we used a wind speed greater than the optimal power speed to account for the higher wind speeds in the probability distribution. We accounted for about two standard deviations above the mean, which came out to be about U = 7m/s. Rotation rate remained at 1900RPM for this analysis, as it is assumed that the turbine torque brake/generator changes its resisting torque to reduce the rotation rate. Bending moments about the chord at the root and about the connection point to the turbine center were the limiting load locations, but still had FOSs far above 1.

<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  <figure style="margin: 0 auto; width: fit-content; text-align: center;">
    <img src="{{'/assets/images/TurbineBladeDesign/irl.png' | relative_url }}" alt="Windtunnel Setup" style="width: 60%; height: auto;">
    <figcaption style="text-align: center;">Example setup in wind tunnel</figcaption>
  </figure>
</div>

To actually test the blade, three of the blades were attached to a center hub piece, which was then mounted to a torque brake inside the wind tunnel. The wind speed and the torque brake voltage were inputs for the testing setup. The testing procedure was as follows: Set torque brake voltage to zero, set tunnel windspeed, increase torque voltage at intervals, record until stall, redo with higher windspeeds. From this, rotation rate vs power curves were recorded for different wind speeds.

<div style="display: flex; gap: 10px; margin-bottom: 10px;">
  <img src="{{ '/assets/images/TurbineBladeDesign/powerCurves.png' | relative_url }}" alt="Power Curves" style="width: 100%; height: auto;">
</div>

Our results showed that our power generation efficiency at our ideal operating parameters was around 20%. Importantly, the efficiency peak occurs in the same wind-speed range identified by the power-weighted Weibull analysis, confirming that the design successfully targeted the most energetically relevant operating conditions rather than maximizing instantaneous power alone. The Betz limit states that the maximum energy that can be extracted from wind is 59.3%, so our blades were 34% as efficient as theoretically possible. Although utility-scale wind turbines achieve 75–80% of the Betz limit, our value is reasonable given the fact that lab-scale, smaller, lower Re, lower powered turbines will always be less efficient.

Potential improvements to further maximize power and efficiency could be to change the airfoil to one that maximizes lift at lower angles of attack, as maximum in-plane force generation occurred outside the optimal angle of attack range for NACA 4412. Additionally, our team misread the size constraints and slightly undersized the chord. Perhaps there were some gains left on the table from the lack of that additional material.

Along with generally helping out with all areas of project progression, my main focus areas were the chord taper and pitch change calculations, as well as creating the CAD model of the blade.