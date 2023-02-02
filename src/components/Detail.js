import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bg_img from "../images/detailsimg.jpeg";
import title_img from "../images/title_img.png";
import black from "../images/play-icon-black.png";
import white from "../images/play-icon-white.png";

const Detail = () => {
  return (
    <Container imgUrl={bg_img}>
      <TitleImg imgUrl={title_img}></TitleImg>
      <Controls>
        <Play imgUrl={black} newImgUrl={white}>Play</Play>
        <Trailer imgUrl={black} newImgUrl={white}>Trailer</Trailer>
        <Autolist />
        <People />
      </Controls>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid white;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
  background-size: 100%;
`;
const TitleImg = styled.div`
  border: 1px solid red;
  height: 30vh;
  // width: 50vw;
  min-width: 40vw;
  background-image: url(${(props) => props.imgUrl});
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: 20% 100%; ;
`;
const Controls = styled.div`
  border: 2px solid purple;
  height: 15%;
  margin-top: 5%;
`;
const Play = styled.button`
  color: white;
  border: 2px solid #ffffff;
  height: 70%;
  width: 12%;
  margin-left: 16%;
  border-radius: 0.3em;
  background-image: url(${props=>props.newImgUrl});
  background-repeat: no-repeat;
  background-size: 40%;
  text-transform: uppercase;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-indent: 10%;
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: white;
    border: none;
    color: black;
    background-image: url(${(props) => props.imgUrl});
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.90);
  }
`;
const Trailer = styled(Play)`
  margin-left: 2%;
  text-indent: 30%;
  background-image: url(${(props) => props.imgUrl});
`;
const Autolist = styled.div``;
const People = styled.div``;
export default Detail;
