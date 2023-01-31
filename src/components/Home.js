import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommend from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { setMovies } from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { selectUserName } from "../features/user/userSlice";
import { collection, query, onSnapshot } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let trendings = [];
    let originals = [];
    console.log("Hello!");
    const q = query(collection(db, "movies"));
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
          case "originals":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          trending: trendings,
          newDisney: newDisneys,
          original: originals,
        })
      );
    });
  }, [userName]);

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
