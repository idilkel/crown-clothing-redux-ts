import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;

// //import { useEffect } from "react";
// //import { getRedirectResult } from "firebase/auth";

// import {
//   auth,
//   signInWithGooglePopup,
//   //signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

// <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>

// <div>
// <h1>Sign In Page</h1>
// <button onClick={logGoogleUser}>Sign In with Google Popup</button>
// <SignUpForm />
// </div>

// const Authentication = () => {
//   // //For redirect: after the redirect getting the response on signIn remount by useEffect - once - based on the auth singleton
//   // //auth: kind of authentication memory bank tracking all of the authentication states for the website for the firebase instance, regardless where the website is going
//   // useEffect(async () => {
//   //   const response = await getRedirectResult(auth);
//   //   //console.log(response);
//   //   //if response is not null then create the
//   //   if (response) {
//   //     const userDocRef = await createUserDocumentFromAuth(response.user);
//   //   }
//   // }, []);
//   const logGoogleUser = async () => {
//     //const response = await signInWithGooglePopup();
//     //console.log(response);
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//   };

//   // const logGoogleRedirectUser = async () => {
//   //   //const response = await signInWithGooglePopup();
//   //   //console.log(response);
//   //   const { user } = await signInWithGoogleRedirect();
//   //   console.log({ user });
//   // };
//   //Instead of above directly recall googleRedirect for trapping the info after the redirect - because of the unmount - Done with the useEffect
