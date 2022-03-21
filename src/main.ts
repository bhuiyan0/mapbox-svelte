import App from './App.svelte'
import "./app.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import 'ol/ol.css'
import 'leaflet/dist/leaflet.css'

const app = new App({
  target: document.getElementById('app')
})

export default app
