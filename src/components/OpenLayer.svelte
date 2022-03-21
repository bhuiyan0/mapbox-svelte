<script>
	import { onMount } from "svelte";

	import OSM from "ol/source/OSM";
	import { Map, View } from "ol";
	import { fromLonLat, toLonLat } from "ol/proj";
	import MapboxVectorLayer from "ol/layer/MapboxVector";
	import ImageWMS from "ol/source/ImageWMS";
	import { Image as ImageLayer, Layer } from "ol/layer";
	import GeoJSON from "ol/format/GeoJSON";

	import VectorTileLayer from "ol/layer/VectorTile";
	import VectorTileSource from "ol/source/VectorTile";
	import MVT from "ol/format/MVT";
	import Feature from "ol/Feature";
	import Point from "ol/geom/Point";
	import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from "ol/style";
	import { Vector as VectorSource } from "ol/source";
	import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
	import { easeIn, easeOut } from "ol/easing";
	import CurrentLocation from "./CurrentLocation.svelte";
	import LayersMenu from "./LayersMenu.svelte";

	let map;
	let view = new View({
		center: fromLonLat([8, 60]),
		zoom: 6,
	});

	const layers = [
		new TileLayer({
			source: new OSM(),
		}),
		new VectorLayer({
			source: new VectorSource({
				format: new GeoJSON(),
				url: "./data/countries.json",
			}),
		}),
	];

	const layer = new VectorTileLayer({
		source: new VectorTileSource({
			format: new MVT(),
			url:
				"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/" +
				"ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf",
			maxZoom: 14,
		}),
	});

	onMount(() => {
		map = new Map({
			target: "map-container",
			layers: [
				new MapboxVectorLayer({
					styleUrl: "mapbox://styles/mapbox/streets-v11",
					accessToken:
						"pk.eyJ1IjoibWFtdW4tYWkiLCJhIjoiY2t6a3h4N3QzMjk0ejJ3bnJ3emp5enluMCJ9.rUcH3jh1RVgO5NRw0MeEXA",
				}),
				// new VectorLayer({
				// 	source: new VectorSource({
				// 		format: new GeoJSON(),
				// 		url: "./data/countries.json",
				// 	}),
				// }),
			],
			view,
		});
		map.addLayer(layer);
	});


	
</script>

<div class="absolute top-0 bottom-0 w-full h-full">
	<div class="menu">
		<CurrentLocation bind:map bind:view/>
		<hr class="my-2" />
	</div>
	<LayersMenu />
	<div id="map-container" />
</div>

<style>
	#map-container {
		@apply w-full h-full;
	}
	.menu {
		@apply absolute top-2 right-3 p-3 bg-white z-10;
	}
	.title {
		@apply text-lg;
	}

	.menu-left{
		@apply absolute top-2 left-3 p-3 bg-white z-10;
	}
</style>
