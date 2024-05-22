// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6N6SpRK9to1F1U-hzZcyGZWnvT9CDQNA",
  authDomain: "netflix-clone-9519c.firebaseapp.com",
  projectId: "netflix-clone-9519c",
  storageBucket: "netflix-clone-9519c.appspot.com",
  messagingSenderId: "738230161172",
  appId: "1:738230161172:web:28906042e6feba0777bc01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth (app);
const db = getFirestore (app);

const signup = async (name, email, password)=>{

try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc (collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    })
} catch (error) {
    console.log(error);
    alert(error);
}
}

const login = async(email,password)=>{
try {
await signInWithEmailAndPassword(auth,email,password);
    
} catch (error) {
    console.log(error);
    alert(error);
}
}

const logout=()=> {
    signOut(auth);
}

export {auth,db,login,signup,logout};