import { auth, provider, storage,db } from "../Firebase"; 
import { signInWithPopup, signOut } from "firebase/auth";
import { SET_USER,SET_LOADING_STATUS } from "./ActionType";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FETCH_ARTICLES_SUCCESS } from "./ActionType";
import { Timestamp } from "firebase/firestore";



export const setUser = (result) => ({
  type: SET_USER,
  user: result,
});


export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
})

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
        dispatch(setUser(null));
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
    dispatch(setLoading(true))
    try {
      if (payload.image) {

        const storageRef = ref(storage, `images/${payload.image.name}`);
        

        const uploadTask = uploadBytesResumable(storageRef, payload.image);
        
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload progress: ${progress}%`);
          },
          (error) => {
            console.error("Image upload error:", error);
          },
          async () => {

            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            

            await addDoc(collection(db, "articles"), {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date:   Timestamp.now(),
                image: payload.user.photoURL,
              },
              video: payload.video,
              comments: 0,
              sharedImg: downloadURL,
              description: payload.description,
            });
             dispatch(setLoading(false))
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
       dispatch(setLoading(false))
    } catch (error) {
      console.error("Error posting article:", error);
    }
  };
};



export const getArticleAPI = () => {
  return (dispatch) => {
    dispatch(setLoading(true));


    const articlesQuery = query(
      collection(db, "articles"),
      orderBy("actor.date", "desc")
    );

    // Use onSnapshot to listen for real-time updates
    onSnapshot(articlesQuery, (snapshot) => {
      let articles = [];
      snapshot.docs.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() });
      });

     dispatch({
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
  });
      console.log("Fetched Articles:", articles);

      dispatch(setLoading(false));
    }, (error) => {
      console.error("Error fetching articles:", error);
      dispatch(setLoading(false));
    });
  };
};





export default SignInAPI;
