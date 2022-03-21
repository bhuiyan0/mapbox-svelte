<script>
	import { fromLonLat } from "ol/proj";
	import Feature from "ol/Feature";
	import Point from "ol/geom/Point";
	import { Style, Icon } from "ol/style";
	import { Vector as VectorSource } from "ol/source";
	import { Vector as VectorLayer } from "ol/layer";
	import {removeLayer} from '../utils/map'
	export let map;
	export let view;
	let c_layer;

	const LocateMe = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
			console.log("locate me");
		} else {
			const msg = "Geolocation is not supported by this browser.";
			console.error(msg);
		}
	};

	function showPosition(position) {
		const { latitude, longitude } = position.coords;
		addMarker(latitude, longitude);
	}

	function addMarker(lat, lon) {
		const currentLocation = new Feature({
			geometry: new Point(fromLonLat([lon, lat])),
		});

		currentLocation.setStyle(
			new Style({
				image: new Icon({
					crossOrigin: "anonymous",
					src: "/marker2.svg",
					scale: 0.5,
				}),
			})
		);
			console.log('c_layer',c_layer)
			console.log('map==',map)
		if(c_layer && map){
			map.removeLayer(c_layer)
		}
		

		c_layer = new VectorLayer({
			className: 'currentLocationMarker',
			// map: map,
			source: new VectorSource({
				features: [currentLocation],
			}),
		});

		map.addLayer(c_layer)
		view.animate({
			center: fromLonLat([lon, lat]),
			duration: 1000,
			zoom: 15,
		});
	}
</script>

<img
	on:click={LocateMe}
	class="cursor-pointer"
	src="/location.svg"
	alt="location"
/>
