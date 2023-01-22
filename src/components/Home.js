import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider"

const Home = () => {
    return (
    <Container>
        <ImgSlider></ImgSlider>
    </Container>)
} 

const Container = styled.div`
    // border: 2px solid yellow;
    height: 100vh;
    margin: 10vh;
    margin-top: 0;
    background-color: rgb(12, 26, 39);
    z-index: 100;
    position: relative;
    // &:hover{
    //     cursor: pointer;
    // }
`

export default Home;