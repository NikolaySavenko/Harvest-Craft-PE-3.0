var TropicalGardenCount = {	min: __config__.access("generation.group.gardens.tropical.min"),	max: __config__.access("generation.group.gardens.tropical.max")};Harvest.addBlockGeneration({id:BlockID.tropicalgarden, data:0, enabled:true},TropicalGardenBiomes,TropicalGardenCount,__config__.access("generation.numbers.gardens.tropical"));