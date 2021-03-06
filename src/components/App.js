import React from "react";
import styled from "styled-components";

import Tweet from "./Tweet/Tweet";
import { TweetProvider } from "./Tweet/TweetContext";

const App = () => {
  return (
    <Wrapper>
      <TweetProvider>
        <Tweet />
      </TweetProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
