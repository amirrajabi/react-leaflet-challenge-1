import { MapContainer, TileLayer } from 'react-leaflet'
import { GeoJSON } from 'react-leaflet/GeoJSON'

import mapData from './../data/locations.json'

function Map() {

  return (
    <MapContainer center={[40.77,-73.97]} zoom={11} scrollWheelZoom={false} style={{height: '80vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON data={mapData}>
        
      </GeoJSON>

    </MapContainer>
  );
}

export default Map;
