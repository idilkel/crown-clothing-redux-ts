//import { signInWithEmailAndPassword } from "firebase/auth";
//useContext is not needed: We have the onAuthStateChangedListener instead
import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes, User } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import {
  ButtonsContainer,
  SignInContainer,
  AlertMessage,
} from "./sign-in-form.styles";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [alertMsg, setAlertMsg] = useState("");
  const navigate = useNavigate();

  //console.log(formFields);

  //We have the onAuthStateChangedListener instead
  //const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    setAlertMsg("");

    //We have the onAuthStateChangedListener instead
    //No need to destructure the user
    //const { user } = await signInWithGooglePopup();
    //setCurrentUser(user);
    //createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // const response = await signInAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // console.log(response);
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredential) {
        const { user } = userCredential;
      }

      //We have the onAuthStateChangedListener instead
      //setCurrentUser(user);

      resetFormFields();
      navigate("/shop");
      setAlertMsg("");
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          setAlertMsg("Incorrect email or password. Please try again.");
          //alert("Incorrect email or password. Please try again.");
          break;
        case "auth/user-not-found": //AuthErrorCodes.EMAIL_NOT_FOUND isn't recognized
          setAlertMsg("No user associated with this email");
          //alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign In
          </Button>
        </ButtonsContainer>
      </form>
      <AlertMessage>{alertMsg}</AlertMessage>
    </SignInContainer>
  );
};

export default SignInForm;
