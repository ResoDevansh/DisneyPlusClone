import React from "react";
import styled from "styled-components";
import c1 from "../images/cta-logo-one.svg";
import c2 from "../images/cta-logo-two.png";
const Login = () => {
  return (
    <Content>
      <Content1 imgUrl={c1} />
      <Content2>Sign In!</Content2>
      <Content3>
        Get Premier Access to Raya and the Last Dragon for an additional fee
        with a Disney+ subscription.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As
        of 03/26/21, the price of Disney+ and The Disney Bundle will increase by
        1$.
      </Content3>
      <Content4 imgUrl={c2} />
    </Content>
  );
};
//styling starts
const Content = styled.div`
  // border: 2px solid #f9f9f9;
  height: 100vh;
  width: 70vw;
  margin: auto;
  margin-top: 7%;
  position: relative;
  z-index: -1;
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content1 = styled.div`
  // border: 4px dotted red;
  height: 20%;
  width: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: 15vw;
`;
const Content2 = styled.a`
  // border: 2px solid white;
  margin-top: 0.3em;
  width: 68%;
  min-width: 50vw;
  height: 10%;
  background-color: blue;
  text-align: center;
  font-size: 1.8em;
  padding-top: 0.7em;
  border-radius: 0.2em;
`;
const Content3 = styled.p`
  margin-top: 0.7em;
  font-size: 0.7em;
  letter-spacing: .2em;
`;
const Content4 = styled.div`
  background-image: url(${(props) => props.imgUrl});
  height: 10%;
  width: 60%;
  // border: 2px solid red;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  `;

export default Login;
