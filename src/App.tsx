import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

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

const App = () => {
  const [danger, setDanger] = useState(false);
  return (
    <Wrapper>
      <StyledHeader>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          onClick={() => setDanger(!danger)}
          variant="contained"
          color={danger ? "secondary" : "primary"}
        >
          Click
        </Button>
      </StyledHeader>
    </Wrapper>
  );
};

export default App;
