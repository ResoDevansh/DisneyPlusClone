import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommend from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.div`
  // border: 2px solid yellow;
  // height: 100vh;
  margin: 10vh;
  margin-top: 0;
  padding: 1em;
  background-color: rgb(12, 26, 39);
  position: relative;
`;

export default Home;
