import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'

const Box = styled.div({
  height: 180
})

function App() {
  return (
    <Box>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "100%" }} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}

export default App;
