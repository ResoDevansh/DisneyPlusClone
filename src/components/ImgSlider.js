import React, { useEffect, useState } from "react";
import styled from "styled-components";
import p1 from "../images/slider-badag.jpg";
import p2 from "../images/slider-badging.jpg";
import p3 from "../images/slider-scale.jpg";
import p4 from "../images/slider-scales.jpg";

const ImgSlider = () => {
  const imgArr = [p1, p2, p3, p4];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log(index);
    const id = setInterval(() => {
      if (index < imgArr.length - 1) {
        setIndex(index + 1);
      } else setIndex(0);
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [index]);
  const rhandleClick = () => {
    // console.log("Clicked!");
    if (index < imgArr.length - 1) {
      setIndex(index + 1);
    } else setIndex(0);
  };
  const lhandleClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else setIndex(imgArr.length - 1);
  };
  return (
    <>
      <Wrapper imgUrl={imgArr[index]}>
        <LeftArrow>
          <div className="left-icon-wrapper">
            <i className="arrowl left" onClick={lhandleClick}></i>
          </div>
        </LeftArrow>
        <RightArrow>
          <div className="right-icon-wrapper">
            <i className="arrowr right" onClick={rhandleClick}></i>
          </div>
        </RightArrow>
      </Wrapper>
      <Dots data={index}>
        <span />
        <span />
        <span />
        <span />
      </Dots>
    </>
  );
};
const LeftArrow = styled.div`
  .arrowl {
    border: solid white;
    border-width: 0px 5px 5px 0px;
    padding: 10px;
    display: inline-block;
    box-shadow: 5px 4px 2px grey;
  }
  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  .left-icon-wrapper {
    position: relative;
    top: 20vh;
    left: -3.5vw;
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }
`;
const RightArrow = styled.div`
  .arrowr {
    border: solid white;
    border-width: 0px 5px 5px 0px;
    padding: 10px;
    display: inline-block;
    box-shadow: 5px 4px 2px grey;
  }
  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .right-icon-wrapper {
    position: relative;
    left: 90vw;
    top: 20vh;
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }
`;
const Wrapper = styled.div`
  transition: background-image .5s ease-in-out;
  position: relative;
  border: 5px solid transparent;
  box-shadow: 3px 5px 12px 20px rgb(13, 13, 13);
  border-radius: 0.7em;
  // height: calc(160% / 3.3);
  height: 48vh;
  background-image: url(${(props) => props.imgUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: black;
  transition: border 1s ease-in-out;
  &:hover {
    box-sizing: border-box;
    border: 5px solid white;
    cursor: pointer;
    ${LeftArrow} .left-icon-wrapper {
      opacity: 1;
    }
    ${RightArrow} .right-icon-wrapper {
      opacity: 1;
    }
  }
`;
const Dots = styled.div`
  margin-top: 3vh;
  margin-left: 42vw;
  span {
    opacity: 1;
    background-color: #f9f9f9;
    height: 0.5em;
    width: 0.5em;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid white;
    margin: 0.5em;
  }
  span:nth-child(${(props) => props.data+1}) {
    transform: scale(1.5);
    transition: all 0.5s ease-in-out;
  }
`;

export default ImgSlider;
