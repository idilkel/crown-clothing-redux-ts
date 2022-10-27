import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  //width: 60px;
  //height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  //margin-bottom: 10px; //added
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
  //width: 1.7vw;
  //height: 1.7vw;
`;

export const ItemCount = styled.span`
  //position: relative;
  position: absolute;
  font-size: 10px;
  //font-size: 0.8vw;
  font-weight: bold;
  bottom: 12px; //not added
  //top: 0.2vh; //added
  //right: 1vw; //added
`;

//without importing the component to the styling, and leaving it in the cart-icon.component
// export const CartIconContainer = styled.div`
//   width: 45px;
//   height: 45px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   svg {
//     width: 24px;
//     height: 24px;
//   }
// `;

//with scss:
// import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

// export const ShoppingIcon = styled(ShoppingSvg)`
//   width: 24px;
//   height: 24px;
// `;
