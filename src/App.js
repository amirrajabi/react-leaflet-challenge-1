import styled from 'styled-components'

import MapWrapper from './components/MapWrapper';

function App() {
  return (
    <Box>
      <MapWrapper/>
    </Box>
  );
}

const Box = styled.div({
  height: '80vh'
})

export default App;
