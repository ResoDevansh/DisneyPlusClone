import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import p1 from "../images/sample_img.jpg";
import { selectTrending } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";

const Trending = () => {
  const movies = useSelector(selectTrending);
  return (
    <Container>
      Trending
      <Content>
        {movies &&
          movies.map((movie, key) => {
            <Link to={"/detail/" + movie.id} key={key}>
              {movie.id}
              <Wrap imgUrl={movie.cardImg} alt={movie.title} />
            </Link>;
          })}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  //   border: 2px solid green;
  margin-top: 7vh;
  font-weight: 700;
`;
const Content = styled.div`
  //   border: 2px solid red;
  margin-top: 6vh;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Wrap = styled.div`
//   border: 1px dashed white;
  height: 22vh;
  width: 20vw;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  }
  border-radius: .5em;
  cursor: pointer;
  position: relative;
  transition: all 200ms cubic-bezier(0.25,0.46,0.45,0.72);
  &:hover{
    box-shadow: box-shadow: rgb(0 0 0/ 80%) 0px 40px 58px -16px,
    rgb(0 0 0/ 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border: 1px solid rgba(249,249,249,0.8);
  }
`;
export default Trending;
