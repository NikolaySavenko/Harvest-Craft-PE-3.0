IDRegistry.genBlockID("candleberrygarden"); //PlantModel
Block.createBlock("candleberrygarden", [
	{name: "Candleberry garden", texture: [["empty", 0],["empty", 0],["candleberrycrop", 2]], inCreative: false}
],BLOCK_TYPE_PLANT);
//PlantModel.tree(BlockID.candleberrygarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.candleberrygarden,
	drop:0,
	seed:ItemID.candleberrygardenITEM
});
Block.registerDropFunction("candleberrygarden", function(coords, blockID, blockData, level){
	var drop = [];
	drop.push([ItemID.candleberry,Random.Int(1,3), 0]);
	return drop;
});