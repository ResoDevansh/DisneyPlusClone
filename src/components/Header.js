import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import home from "../images/home-icon.svg";
import search from "../images/search-icon.svg";
import watchlist from "../images/watchlist-icon.svg";
import originals from "../images/original-icon.svg";
import movies from "../images/movie-icon.svg";
import series from "../images/series-icon.svg";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  selectUserPhoto,
  selectUserName,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // history("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <Navbar>
      <Logo imgUrl={logo}></Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <Icons imgUrl={home}>
            <div className="special-underline"></div>
            <a className="text-container" href="/">
              HOME
            </a>
          </Icons>
          <Icons imgUrl={search}>
            <div className="special-underline"></div>
            <a className="text-container" href="/">
              SEARCH
            </a>
          </Icons>
          <Icons imgUrl={watchlist}>
            <div className="special-underline"></div>
            <a className="text-container" href="/">
              WATCHLIST
            </a>
          </Icons>
          <Icons imgUrl={originals}>
            <div className="special-underline"></div>
            <a className="text-container" href="/">
              ORIGINALS
            </a>
          </Icons>
          <Icons imgUrl={movies}>
            <div className="special-underline"></div>
            <a className="text-container" href="/">
              MOVIES
            </a>
          </Icons>
          <Icons imgUrl={series}>
            <div className="special-underline"></div>
            <a className="text-container" href="/">
              SERIES
            </a>
          </Icons>
          <UserImg imgUrl={userPhoto}>
            <DropDown>
              <div onClick={handleAuth}>Sign Out</div>
            </DropDown>
          </UserImg>
          {/* <UserImg imgUrl={userPhoto}></UserImg> */}
        </>
      )}
    </Navbar>
  );
};

const Navbar = styled.div`
  border: 2px solid white;
  height: 15vh;
  display: flex;
  background-color: #000318;
  align-items: center;
  // position: fixed;
`;

const Logo = styled.div`
  position: relative;
  left: 2vw;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  width: 15%;
  height: 60%;
`;

const Icons = styled.div`
  width: fit-content; //beautiful
  padding-left: 3vw; //this helped me!!
  // border: 2px solid red;
  height: 60%;
  position: relative;
  left: -3vw;
  background-image: url(${(props) => props.imgUrl});
  background-size: 18%;
  background-position: 17%;
  background-repeat: no-repeat;
  letter-spacing: 0.1em;
  div,
  a {
    text-decoration: none;
    position: relative;
    top: 3vh;
    color: rgb(249, 249, 249);
  }
  &:hover {
    cursor: pointer;
    .special-underline {
      visibility: visible;
      border: 1px solid rgb(249, 249, 249);
      transform: scaleX(1);
    }
  }
  .special-underline {
    top: 6vh;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    visibility: hidden;
    transform: scaleX(0);
    transform-origin: left;
  }
  .text-container {
    display: inline-block;
  }
`;

const Login = styled.a`
  text-transform: uppercase;
  position: relative;
  left: 73%;
  letter-spacing: 4px;
  font-size: 3vh;
  border: 1px solid #fff;
  padding: 0.5em;
  transition: all 1s ease 0;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    color: #000;
    background-color: #fff;
    border: transparent;
  }
`;

const DropDown = styled.div`
  letter-spacing: 0.2em;
  // width: 7vw;
  position: relative;
  top: 7vh;
  left: 4vw;
  border-radius: 2px;
  text-transform: uppercase;
  visibility: hidden;
  transition: all 0.4s ease-in-out;
  // border: 2px solid red;
  div {
    padding: 0.3em;
    width: 8vw;
  }
`;

const UserImg = styled.a`
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 30%;
  display: inline-block;
  cursor: pointer;
  position: relative;
  height: 12vh;
  width: 5vw;
  left: 25vw;
  border: 2px solid white;
  border-radius: 50%;
  &:hover {
    ${DropDown} {
      visibility: visible;
      border: 1px solid white;
      border: transparent;
      cursor: pointer;
    }
  }
`;

export default Header;
