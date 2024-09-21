import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { SET_USER } from "./ActionType";

export const setUser = (result) => ({
  type: SET_USER,
  user: result,
});

const SignInAPI = () => {
  return (dispatch) => {
    console.log("SignInAPI triggered");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In Successful", result.user);
        dispatch(setUser(result.user));
      })
      .catch((error) => {
        console.error("Google Sign-In Error", error.message, error);
        alert(`Error during sign-in: ${error.message}`);
      });
  };
};

export default SignInAPI;
