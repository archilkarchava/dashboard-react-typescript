import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Button = styled("button")<{danger?: boolean}>`
  height: 3em;
  background: ${p => (p.danger ? "#f32a2a" : "#61dafb")};
`;

const App = () => {
  const [danger, setDanger] = useState(false);
  return (
    <Wrapper>
      <StyledHeader>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={() => setDanger(!danger)} danger={danger}>
          Click
        </Button>
      </StyledHeader>
    </Wrapper>
  );
};

export default App;
