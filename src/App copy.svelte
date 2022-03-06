<script lang="ts">
	import mapboxgl from "mapbox-gl";
	import { onMount } from "svelte";
	import L from "leaflet";

	mapboxgl.accessToken =
		"pk.eyJ1IjoibWFtdW4tYWkiLCJhIjoiY2t6a3h4N3QzMjk0ejJ3bnJ3emp5enluMCJ9.rUcH3jh1RVgO5NRw0MeEXA";
	// L.mapbox.accessToken =
	// 	"pk.eyJ1IjoibWFtdW4tYWkiLCJhIjoiY2t6a3h4N3QzMjk0ejJ3bnJ3emp5enluMCJ9.rUcH3jh1RVgO5NRw0MeEXA";

	let [norway_lat, norway_lng] = [60.472, 8.4689];

	onMount(() => {
		const map = new mapboxgl.Map({
			container: "map", // container ID
			style: "mapbox://styles/mapbox/streets-v11", // style URL
			// center: [norway_lng, norway_lat], // starting position [lng, lat]
			zoom: 8, // starting zoom
			// zoom: 8,
			center: [-74.5447, 40.6892],
		});

		const marker = new mapboxgl.Marker()
			.setLngLat([norway_lng, norway_lat])
			.addTo(map);

		const width = document.getElementById("map").offsetWidth;
		const height = document.getElementById("map").offsetHeight;

		const nav = new mapboxgl.NavigationControl();
		map.addControl(nav, "top-left");


		map.on("load", () => {
			map.addSource("wms-test-source", {
				type: "raster",
				// use the tiles option to specify a WMS tile source URL
				// https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
				tiles: [
					"https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015",
				],
				tileSize: 256,
			});
			map.addLayer(
				{
					id: "wms-test-layer",
					type: "raster",
					source: "wms-test-source",
					paint: {},
				},
				"aeroway-line"
			);
		});

		// let wms_url =
		// 	"https://nve.geodataonline.no/arcgis/services/FlomAktsomhet/MapServer/WmsServer?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=FlomAktsomhet_Dekning&CRS=EPSG%3A25833&STYLES=&WIDTH=2297&HEIGHT=1329&BBOX=-848229.987132828%2C6203258.652246164%2C1305710.8083329594%2C7449487.349318011";
		// var nexrad = L.tileLayer
		// 	.wms(wms_url, {
		// 		layers: "FlomAktsomhet_Dekning",
		// 		format: "image/png",
		// 		transparent: true,
		// 		attribution: "FlomAktsomhet_Dekning",
		// 	})
		// 	.addTo(map);
		// map.on("load", () => {
		// map.addSource("wms-test-source", {
		// 	type: "raster",
		// 	// use the tiles option to specify a WMS tile source URL
		// 	// https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
		// 	tiles: [
		// 		`https://nve.geodataonline.no/arcgis/services/FlomAktsomhet/MapServer/WmsServer?bbox={bbox-epsg-3857}&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=FlomAktsomhet_Dekning&CRS=EPSG%3A3857&STYLES=&WIDTH=${width}&HEIGHT=${height}`,
		// 	],
		// 	tileSize: 256,
		// });
		// map.addLayer(
		// 	{
		// 		id: "wms-test-layer",
		// 		type: "raster",
		// 		source: "wms-test-source",
		// 		paint: {},
		// 	},
		// 	"aeroway-line"
		// );

		// var flom = L.tileLayer.wms(
		// 	"https://nve.geodataonline.no/arcgis/services/FlomAktsomhet/MapServer/WmsServer",
		// 	{
		// 		layers: "FlomAktsomhet_Dekning",
		// 		format: "image/png",
		// 		transparent: true,
		// 		attribution: "Weather data © 2012 IEM Nexrad",
		// 	}
		// );
		// flom.addTo(map);

		// });
	});
</script>

<main>
	<div id="map" />
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	#map {
		@apply absolute top-0 bottom-0 w-full h-full;
	}
</style>
