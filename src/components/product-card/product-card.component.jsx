import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
  AlertMessage,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;

  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);

  const [alertMsg, setAlertMsg] = useState("");

  const addProductToCart = () => {
    if (currentUser) {
      if (alertMsg !== "") {
        setAlertMsg("");
      }
      dispatch(addItemToCart(cartItems, product));
    } else {
      setAlertMsg("Please sign-in to start shopping");
      //alert("Please sign-in to start shopping")};
    }
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <AlertMessage>{alertMsg}</AlertMessage>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
