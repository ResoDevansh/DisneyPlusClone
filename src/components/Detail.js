import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bg_img from "../images/detailsimg.jpeg";
import title_img from "../images/title_img.png";
import black from "../images/play-icon-black.png";
import white from "../images/play-icon-white.png";
import wl from "../images/watchlist-icon.svg";
import gi from "../images/group-icon.png";
import db from "../firebase";
import { collection, query, onSnapshot,getDocs } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const docRef = query(collection(db, "movies"));
      docRef
      .doc.id
      .getDocs
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No such document exists in firebase");
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      });
  }, [id]);

  return (
    <Container imgUrl={bg_img}>
      <TitleImg imgUrl={title_img}></TitleImg>
      <Controls>
        <Play imgUrl={black} newImgUrl={white}>
          Play
        </Play>
        <Trailer imgUrl={black} newImgUrl={white}>
          Trailer
        </Trailer>
        <Autolist imgUrl={wl} />
        <People imgUrl={gi} />
      </Controls>
      <SubTitle>Subtitle</SubTitle>
      <Description>Description</Description>
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
  height: 50vh;
  // width: 50vw;
  min-width: 40vw;
  background-image: url(${(props) => props.imgUrl});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 20% 60%; ;
`;
const Controls = styled.div`
  border: 2px solid purple;
  height: 15%;
  margin-top: 3%;
`;
const Play = styled.button`
  color: black;
  border: 2px solid #ffffff;
  height: 70%;
  width: 10%;
  margin-left: 12%;
  border-radius: 0.3em;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: 25%;
  background-position: 1em;
  text-transform: uppercase;
  font-size: 1.25em;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-indent: 18%;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: black;
    border: none;
    color: white;
    background-image: url(${(props) => props.newImgUrl});
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.9);
  }
`;
const Trailer = styled(Play)`
  margin-left: 2%;
  text-indent: 25%;
  width: 12%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${(props) => props.newImgUrl});
  &:hover {
    background-color: white;
    color: black;
    background-image: url(${(props) => props.imgUrl});
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.9);
  }
`;
const Autolist = styled.div`
  background-image: url(${(props) => props.imgUrl});
  border: 1px solid white;
  height: 7vh;
  width: 7vh;
  background-color: rgba(0, 0, 0, 0.6);
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  top: -8.5vh;
  left: 36vw;
  margin-left: 1vw;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.9);
  }
`;
const People = styled(Autolist)`
  left: 40vw;
  top: -15.5vh;
  background-image: url(${(props) => props.imgUrl});
`;
const SubTitle = styled.div`
  color: white;
  border: 1px solid #f9f9f9;
  text-indent: 12%;
`;
const Description = styled(SubTitle)`
  font-size: 1.5em;
  width: 75%;
  text-indent: 16%;
`;
export default Detail;
