import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase";
// import { useIdea } from "../context/context";
// import Home from "./Home";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser]=useState(null)

//   const loginUser = useIdea();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("you are logged in");
        setUser(null);
      }
    });
  }, []);

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((value) =>
      alert("signed in")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      {user === null ? (
        <div className="signin">
          <div className="inputForm">
            <label id="signinLabel1">Enter your Email :</label>
            <input
              id="signinInput1"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="enter your email here"
            />
          </div>
          <div className="inputForm2">
            <label id="signinLabel2">Password :</label>
            <input
              id="signinInput2"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="enter your password here"
            />
          </div>
          <div className="signinButtons">
            <button onClick={signinUser}>Sign in</button>

            <button onClick={signupWithGoogle}>Signin with google</button>
          </div>
        </div>
      )  : (
        <div>
          {/* <Home /> */}
          <button onClick={() => signOut(auth)}>Logout</button>
        </div>
      )
}
    </>
    
  );
};

export default Signin;
