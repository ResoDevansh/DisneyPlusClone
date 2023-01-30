import React from 'react';
import styled from 'styled-components';
import p1 from '../images/viewers-disney.png';
import p2 from '../images/viewers-pixar.png';
import p3 from '../images/viewers-marvel.png';
import p4 from '../images/viewers-starwars.png';
import p5 from '../images/viewers-national.png';
import v1 from '../videos/disney-video.mp4';
import v2 from '../videos/pixar-video.mp4';
import v3 from '../videos/marvel-video.mp4';
import v4 from '../videos/starwars-video.mp4';
import v5 from '../videos/ngeo-video.mp4'
const Viewers = () => {
    return (<>
        <Container>
            <Wrap imgUrl={p1}>
                <Video width="180" height="100" autoPlay="autoplay" loop muted playsInline="true">
                    <source src={v1} type='video/mp4'></source>
                </Video>
            </Wrap>
            <Wrap imgUrl={p2}>
                <Video width="180" height="100" autoPlay="autoplay" loop muted playsInline="true">
                    <source src={v2} type='video/mp4'></source>
                </Video>
            </Wrap>
            <Wrap imgUrl={p3}>
                <Video width="180" height="100" autoPlay="autoplay" loop muted playsInline="true">
                    <source src={v3} type='video/mp4'></source>
                </Video>
            </Wrap>
            <Wrap imgUrl={p4}>
                <Video width="180" height="100" autoPlay="autoplay" loop muted playsInline="true">
                    <source src={v4} type='video/mp4'></source>
                </Video>
            </Wrap>
            <Wrap imgUrl={p5}>
                <Video width="180" height="100" autoPlay="autoplay" loop muted playsInline="true">
                    <source src={v5} type='video/mp4'></source>
                </Video>
            </Wrap>
        </Container>
    </>);   
}
const Container = styled.div`   
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
const Video = styled.video`
    position: absolute;
    left: 0px;
    top: 0px;
    border: 2px solid red;
    z-index: -1;
    transition: border 0.275ms cubic-bezier(0.25,0.46,0.45,0.93);
`;
const Wrap = styled.div`
    cursor: pointer;
    position: relative;
    width: 16.35vw;
    height: 21vh;
    border: 2px solid #4d4d4d;
    background-image: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    border-radius: 1em;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0/73%) 0px 16px 10px -10px;
    &:hover{
        border: solid transparent;
        ${Video}{
            padding: 0px 0px;
            top: 20px;
            left: 30px;
            border-radius: 1em;
            transform: scaleX(1.5) scaleY(1.6);
            z-index: 1;
            border: 2px solid #f9f9f9;
        }
    }
`;

export default Viewers;