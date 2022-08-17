import {useEffect, useRef} from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { GeoJSON } from 'react-leaflet/GeoJSON'

import mapData from '../data/locations.json'

function MapWrapper() {
 const groupRef = useRef(null);

  function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(`${feature.properties.name} - Area: ${feature.properties.area}`);
    }
  }

  useEffect(() => {
  }, []);

  return (
    <MapContainer center={[40.77, -73.97]} zoom={12} ref={groupRef} scrollWheelZoom={false} style={{height: '80vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON data={mapData} onEachFeature={onEachFeature} />

    </MapContainer>
  );
}

export default MapWrapper;
