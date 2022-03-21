<script lang="ts">
	import { onMount } from "svelte";

	import { Router, Route, Link, useLocation } from "svelte-navigator";
	import ColorMap from "./components/ColorMap.svelte";
	import Mapbox from "./components/Mapbox.svelte";
	import OpenLayer from "./components/OpenLayer.svelte";
</script>

<Router>
	<header class="header">
		<nav>
			<!-- <span><Link to="mapbox">Mapbox</Link></span> -->
			<span><Link to="/">Open Layer Map</Link></span>
			<!-- <span><Link to="colormap">Color Map</Link></span> -->
		</nav>
	</header>

	<main class="main">
		<!-- <Route path="mapbox">
			<Mapbox />
		</Route> -->

		<Route path="/">
			<OpenLayer />
		</Route>
		<!-- <Route path="colormap">
			<ColorMap />
		</Route> -->
	</main>
</Router>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}

	nav {
		@apply h-full flex justify-center items-center;
	}
	nav > span {
		@apply cursor-pointer px-5;
		color: blue;
	}
	.header {
		@apply w-full h-[50px];
	}

	.main {
		@apply absolute top-[50px] bottom-0 w-full;
	}
</style>
