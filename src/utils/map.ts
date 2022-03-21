export function removeLayer(map:any, layerName:string) {
	console.log('REMOVE LAYER CALLED',layerName)
	map.getLayers().forEach((layer:any)=> {
		if (layer && layer.getClassName() === layerName) {
			console.log('layer found')
			map.removeLayer(layer);
		}
	});
}