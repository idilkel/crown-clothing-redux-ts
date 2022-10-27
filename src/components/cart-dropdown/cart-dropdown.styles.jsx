import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  //width: 14vw;
  //height: 18vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
    //font-size: 0.9vw; //added
    //width: 100%; //added
    //padding: 2px; //added
    //min-width: auto; //added
    //height: 5vh; //added
    //line-height: 4vh; //added
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  //font-size: 1vw; //added
`;

export const CartItems = styled.span`
  height: 240px;
  //height: 14vw;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
