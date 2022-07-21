# Data Structure

Ok, so we're going to take in multiple state rows as arrays, and we're going to have to assume that their data is arranged in a a way that gaurantees columns are going to end up at the same index? Like that 'Additional Notes' is in the same column for each state and not offset. Yeah. We can assume the data being sent to us is in the right shape here.

We should only have one version of the canonical array which will map all of the states. There should only be one grid being loaded on the page at once.
