import React from "react";
import { useState } from "react";
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
// import { getDatabase, ref, set, onValue } from 'firebase/database';

export default function Login() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [loginOption, setloginOption] = useState("Sign In");
    const firebaseConfig = {
        apiKey: `${process.env.REACT_APP_apiKey}`,
        authDomain: `${process.env.REACT_APP_authDomain}`,
        projectId: `${process.env.REACT_APP_projectId}`,
        storageBucket: `${process.env.REACT_APP_storageBucket}`,
        messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
        appId: `${process.env.REACT_APP_appId}`,
        measurementId: `${process.env.REACT_APP_measurementId}`,
        databaseURL: `${process.env.REACT_APP_databaseURL}`,
    }

    const signUp = async () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user', user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('erorcode', errorCode, 'errormassage', errorMessage);
            });
    }

    const signIn = async () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user', user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('erorcode', errorCode, 'errormassage', errorMessage);
            });
    }



    const signInwithGoogle = async () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log('tokenfor googleapi', token, 'user', user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log('errorCode', errorCode, 'errorMessage', errorMessage, 'email', email, 'credential', credential)
            });
    }

    const signgoogleOut = async () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        await signOut(auth).then(() => {
            console.log("Sign-out successful.")
        }).catch((error) => {
            console.log("An error happened.", error)
        });
    }

    const changeLogState = async () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                const displayname = user.displayName;
                const useremail = user.email;
                // ...
                console.log(uid, displayname, useremail)
            } else {
                // User is signed out
                // ...
            }
        });
    }
    // ======= SEND DATA TO DATABASE (*ONLY WHEN GOOGLE:2023 EMAIL IS LOGIN) =======
    // let product = 0;
    // const senddata = () => {
    //     const app = initializeApp(firebaseConfig);
    //     const database = getDatabase(app);
    //     set(ref(database, 'users/' + product), {
    //         name: "none"
    //     });
    //     console.log(product)
    // }
    // ======= GET DATA TO DATABASE =======
    // const getVal = () => {
    //     const app = initializeApp(firebaseConfig);
    //     const database = getDatabase(app);
    //     const productref = ref(database, "products/half-sleev-jacket-beige");
    //     onValue(productref,(snapshot)=>{
    //         const productdata = snapshot.val();
    //         console.log("postElement", productdata);
    //     })
    // }

    return <>
        <form>
            <h3>{loginOption}</h3>
            <label htmlFor="loginMail">Email</label>
            <input type="email" name="emailLogin" id="loginMail" autoComplete="username" placeholder="Enter Email"
                onChange={(e) => { setemail(e.target.value) }} value={email} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete="current-password" placeholder="Enter Password"
                onChange={(e) => { setpassword(e.target.value) }} value={password} />
            <br />
            <button type="button" onClick={(loginOption === "Sign Up") ? (signUp) : (signIn)}>{loginOption}</button>
            <div className="loginoption">
                <button type="button" onClick={() => { setloginOption("Sign Up") }}>Sign Up</button>
                <button type="button" onClick={() => { setloginOption("Sign In") }}>Sign In</button>
            </div>
            <div className="googlesignin">
                <button type="button" onClick={signInwithGoogle}>Login with Google</button>
            </div>
            <div className="anysignout">
                <button type="button" onClick={signgoogleOut}>Logout</button>
            </div>
            <div className="checklog">
                <button type="button" onClick={changeLogState}>checklog</button>
                {/* <button type="button" onClick={senddata}>send data</button> */}
                {/* <button type="button" onClick={getVal}>get Value of product</button> */}
            </div>
        </form>
    </>
}