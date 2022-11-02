import { useState, FormEvent, ChangeEvent } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
//import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartItems } from "../../store/cart/cart.selector";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
//import FormInput from "../form-input/form-input.component";

import { clearCart } from "../../store/cart/cart.action";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  NameInput,
  CardElementContainer,
} from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  //const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");

  //console.log(currentUser);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    console.log("response!!!: " + response);

    //const clientSecret = response.paymentIntent.client_secret;
    const {
      paymentIntent: { client_secret },
    } = response;

    console.log("response!!!: " + response);

    const cardDetails = elements.getElement(CardElement);

    console.log("card details!!!: " + cardDetails);

    if (cardDetails === null) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: cardHolderName !== "" ? cardHolderName : "Guest",
        },
      },
    });

    //console.log(paymentResult);

    setIsProcessingPayment(false);
    dispatch(clearCart(cartItems));

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nameString = event.target.value;
    setCardHolderName(nameString);
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <NameInput
          label="Card Holder Full Name"
          type="text"
          onChange={handleChange}
          name="cardHolderName"
          value={cardHolderName}
          placeholder=""
        />
        <CardElementContainer>
          <CardElement />
        </CardElementContainer>

        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          PAY NOW
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
