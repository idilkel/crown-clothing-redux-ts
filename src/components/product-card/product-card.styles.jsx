import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    //font-size: 0.9vw; //added
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  //font-size: 18px;
  font-size: 20px; //added
`;

export const BaseSpan = styled.span`
  //font-size: 1vw;//added
`;

export const Name = styled(BaseSpan)`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled(BaseSpan)`
  width: 10%;
`;

export const AlertMessage = styled.div`
  //added
  position: absolute;
  top: 355px;
  color: red;
`;
