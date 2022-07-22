# Data Assumptions

1. Data returned from backend as an object with { "Arizona" : [], "Idaho": [] }.
2. State data represented as an array of objects "Arizona" : [ {}, {}, {} ].
3. The first object in the state array contains any hierarchy data. Any additional objects in the state
   array exist outside the hierarchy. For example, Additional Notes that apply to the entire state.
4. Data hierarchy of each state is in the right shape to line up each column. Eg, Arizona and Idaho both have 4 levels of hierarchy, with
   the same object types at each level.
