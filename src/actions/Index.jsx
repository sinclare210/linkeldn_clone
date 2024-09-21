import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

// const SignInAPI = () => {
//   return (dispatch) => {
//     auth.signInWithPopup(auth, provider)
//       .then((payload) => {
//         console.log(payload);

//       })
//       .catch((error) => {
//         alert(error.message);

//       });
//   };
// };

const SignInAPI = () => {
  return (dispatch) => {
    console.log("SignInAPI triggered");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User successfully signed in", result.user);
      })
      .catch((error) => {
        console.error("Google Sign-In Error", error.message);
        alert(error.message);
      });
  };
};


export default SignInAPI
