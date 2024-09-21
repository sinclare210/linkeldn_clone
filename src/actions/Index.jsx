import { auth, provider } from "../Firebase";
import { signInWithPopup, signOut } from "firebase/auth"; //
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

export const getUserAuth = () => {
    return (dispatch)=>{
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUser(user));
            }
        })
    }
}

export const SignOutAPI = () => {
  return (dispatch) => {
    console.log("SignOutAPI triggered");

    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        dispatch(setUser(null)); // Clear user from state
      })
      .catch((error) => {
        console.error("Google Sign-Out Error", error.message, error);
        alert(`Error during sign-out: ${error.message}`);
      });
  };
};

export default SignInAPI;
