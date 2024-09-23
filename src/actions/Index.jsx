import { auth, provider, storage,db } from "../Firebase"; 
import { signInWithPopup, signOut } from "firebase/auth";
import { SET_USER } from "./ActionType";
import { collection, addDoc } from "firebase/firestore";



export const setUser = (result) => ({
  type: SET_USER,
  user: result,
});

// ...rest of your actions...

export const SignInAPI = () => {
  return (dispatch) => {
    console.log("SignInAPI triggered");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In Successful", result.user);
        dispatch(setUser(result.user));
      })
      .catch((error) => {
        console.error("Google Sign-In Error", error.message);
        alert(`Error during sign-in: ${error.message}`);
      });
  };
};

export const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null)); // Clear user if not authenticated
      }
    });
  };
};

export const SignOutAPI = () => {
  return (dispatch) => {
    console.log("SignOutAPI triggered");

    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        dispatch(setUser(null)); // Clear user from state
      })
      .catch((error) => {
        console.error("Google Sign-Out Error", error.message);
        alert(`Error during sign-out: ${error.message}`);
      });
  };
};

// export const postArticleAPI = (payload) => {
//   return (dispatch) => {
//     if (payload.image != "") {
//       const upload = 
//       storage.ref(`image/${payload.image.name}`)
//         .put(payload.image);
      
//       upload.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log(`Upload progress: ${progress}%`);
//           if (snapshot.state === "running") {
//             console.log(`Upload in progress: ${progress}%`);
//           }
//         },
//         (error) => {
//           console.error("Image upload error", error);
//         },
//         async () => {
//           try {
//             const downloadURL = await upload.snapshot.ref.getDownloadURL();
//             await db.collection("articles").add({
//               actor: {
//                 description: payload.user.email,
//                 title: payload.user.displayName,
//                 date: payload.timestamp,
//                 image: payload.user.photoURL,
//               },
//               video: payload.video,
//               comments: 0,
//               sharedImg: downloadURL,
//               description: payload.description,
//             });
//             console.log("Article posted successfully");
//           } catch (error) {
//             console.error("Error posting article", error);
//           }
//         }
//       );
//     }
//   };
// };



export const postArticleAPI = (payload) => {
  return async (dispatch) => {
    try {
      if (payload.image) {
        const upload = storage.ref(`images/${payload.image.name}`).put(payload.image);
        upload.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload progress: ${progress}%`);
          },
          (error) => {
            console.error("Image upload error:", error);
          },
          async () => {
            const downloadURL = await upload.snapshot.ref.getDownloadURL();
            await addDoc(collection(db, "articles"), {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              video: payload.video,
              comments: 0,
              sharedImg: downloadURL,
              description: payload.description,
            });
            console.log("Article posted successfully");
          }
        );
      } else {
        // Post article without image
        await addDoc(collection(db, "articles"), {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          video: payload.video,
          comments: 0,
          sharedImg: "",
          description: payload.description,
        });
        console.log("Article posted successfully");
      }
    } catch (error) {
      console.error("Error posting article:", error);
    }
  };
};



export default SignInAPI;
