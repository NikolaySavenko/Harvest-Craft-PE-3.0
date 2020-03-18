IDRegistry.genBlockID("grassgarden"); //PlantModel
Block.createBlock("grassgarden", [
	{name: "Grass garden", texture: [["empty", 0],["empty", 0],["grassgardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
//PlantModel.tree(BlockID.grassgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.grassgarden,
	drop:0,
	seed:ItemID.grassGardenITEM
});
Block.registerDropFunction("grassgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.corn,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.ItemID.asparagus, Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.ItemID.bambooshoot, Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.ItemID.rye, Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.oats, Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.barley, Random.Int(1,3), 0]);
	}
	return drop;
});