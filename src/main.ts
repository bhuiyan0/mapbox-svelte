import App from './App.svelte'
import "./app.css"
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';


const app = new App({
  target: document.getElementById('app')
})

export default app
