IDRegistry.genBlockID("groundgarden"); //PlantModel
Block.createBlock("groundgarden", [
	{name: "Ground garden", texture: [["empty", 0],["empty", 0],["groundgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
//PlantModel.tree(BlockID.groundgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.groundgarden,
	drop:0,
	seed:ItemID.groundGardenITEM
});
Block.registerDropFunction("groundgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .4){
		drop.push([ItemID.beet,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([391,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.onion,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.parsnip,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .4){
		drop.push([ItemID.peanut,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([392,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.radish,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.rhubarb,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.rutabaga,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.sweetpotato,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .4){
		drop.push([ItemID.turnip,Random.Int(1,3), 0]);
	}
	return drop;
});