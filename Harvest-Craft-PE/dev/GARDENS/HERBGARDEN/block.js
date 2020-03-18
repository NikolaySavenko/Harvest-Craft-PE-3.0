IDRegistry.genBlockID("herbgarden"); //PlantModel
Block.createBlock("herbgarden", [
	{name: "Herb garden", texture: [["empty", 0],["empty", 0],["herbgardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
//PlantModel.tree(BlockID.herbgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.herbgarden,
	drop:0,
	seed:ItemID.herbGardenITEM
});
Block.registerDropFunction("herbgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.celery,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.coffee_beans,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.spice_leaf,Random.Int(1,3), 0]);
	}		
	if(Math.random() < .5){
		drop.push([ItemID.garlic,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.ginger,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.mustardseeds,Random.Int(1,3), 0]);
	}		
	if(Math.random() < .5){
		drop.push([ItemID.tealeaf,Random.Int(1,3), 0]);
	}
	return drop;
});