import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  TwitterAuthProvider, 
} from "firebase/auth";
import { useState } from "react";
import auth from '../../firebase/firebase.imit';


const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
 const twitterProvider = new TwitterAuthProvider();


  const handleGoogleSignIn = () => {
    // console.log(auth, provider);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })

      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
    

      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });

    };
    


  const handleTwitterSignIn = () => {
    signInWithPopup(auth, twitterProvider)
    .then((result) => {
        console.log(result.user);
        setUser(result.user);
  
    })
   .catch((error) => {
        console.log("ERROR", error);
        // setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out done");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGithubSignIn}>Login with Github </button>
          <button onClick={handleTwitterSignIn}>Login with Twitter </button>

        </>
      )}

      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login
