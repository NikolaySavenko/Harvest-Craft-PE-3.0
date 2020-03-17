IDRegistry.genBlockID("gourdgarden"); //PlantModel
Block.createBlock("gourdgarden", [
	{name: "Gourd garden", texture: [["empty", 0],["empty", 0],["gourdgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
//PlantModel.tree(BlockID.gourdgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.gourdgarden,
	drop:0,
	seed:ItemID.gourdGardenITEM
});
Block.registerDropFunction("gourdgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.cantaloupe,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([91,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.zucchini,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.cucumber,Random.Int(1,3), 0]);
	}		
	if(Math.random() < .5){
		drop.push([ItemID.wintersquash,Random.Int(1,3), 0]);
	}
	return drop;
});