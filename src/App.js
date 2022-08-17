import styled from 'styled-components'

import Map from './components/map';

function App() {
  return (
    <Box>
      <Map/>
    </Box>
  );
}

const Box = styled.div({
  height: '80vh'
})

export default App;
