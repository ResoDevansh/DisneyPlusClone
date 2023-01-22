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
    const id = setInterval(() => {
      if (index < imgArr.length - 1) {
        setIndex(index + 1);
      } else setIndex(0);
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [index]);
  return (
    <>
      <Wrapper imgUrl={imgArr[index]}>
        <LeftArrow>
          <div className="left-icon-wrapper">
            <i className="arrowl left"></i>
          </div>
        </LeftArrow>
        <RightArrow>
          <div className="right-icon-wrapper">
            <i className="arrowr right"></i>
          </div>
        </RightArrow>
      </Wrapper>
    </>
  );
};
const LeftArrow = styled.div`
  .arrowl {
    border: solid white;
    border-width: 0px 5px 5px 0px;
    padding: 10px;
    display: inline-block;
  }
  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  .left-icon-wrapper {
    position: relative;
    top: 20vh;
    left: -2vw;
    opacity: 0;
  }

`;
const RightArrow = styled.div`
  .arrowr {
    border: solid white;
    border-width: 0px 5px 5px 0px;
    padding: 10px;
    display: inline-block;
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
  }
`;
const Wrapper = styled.div`
  transition: background-image 0.5s ease-in-out;
  position: relative;
  border: 1px solid transparent;
  border-radius: .7em;
  height: calc(160% / 3.3);
  background-image: url(${(props) => props.imgUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: -1;
  &:hover {
    cursor: pointer;
    ${LeftArrow} {
      .left-icon-wrapper{
      opacity: 1 !important;
      }
    }
    ${RightArrow} {
      .right-icon-wrapper{
      opacity: 1 !important;
      }
    }
  }
`;

export default ImgSlider;