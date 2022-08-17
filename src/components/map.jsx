import { useEffect } from 'react';
import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet'

// import 'leaflet/dist/leaflet.css'

import mapData from './../data/locations.json'

function Map() {

  useEffect(()=>{
    console.log(mapData)
  },[])

  return (
    <MapContainer center={[40.77,-73.97]} zoom={11} scrollWheelZoom={false} style={{height: '80vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapData.features.map((area, index) => {
        const pos = area.geometry.coordinates[0][0]
        const lat = pos[1]
        const log = pos[0]
        return(
          <Marker key={index} position={[lat, log]}></Marker>
        )})}
    </MapContainer>
  );
}

export default Map;
