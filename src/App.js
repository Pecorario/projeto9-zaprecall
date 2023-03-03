import { useState } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import Welcome from './components/Welcome';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <Container>
      {isGameStarted ? (
        <Home />
      ) : (
        <Welcome setIsGameStarted={setIsGameStarted} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: #fb6b6b;
`;
