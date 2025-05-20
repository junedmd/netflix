
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";


import {addDoc
  ,collection,
  getFirestore} 
  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXWwJVMRxV5LH6DEesQ2fcoif6D3L3g9k",
  authDomain: "netflix-df8e9.firebaseapp.com",
  projectId: "netflix-df8e9",
  storageBucket: "netflix-df8e9.firebasestorage.app",
  messagingSenderId: "443548361385",
  appId: "1:443548361385:web:0f7b3bb6b305cbf1617fb8",
  measurementId: "G-0MEVYWFVN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth();
const db = getFirestore(app);


const signup = async (email,password)=>{
      try{
          console.log("Email being used:",email);
          console.log("password being used:",password);
         
         const res=  await createUserWithEmailAndPassword(auth,email, password);
         const user =res.user;
         await addDoc(collection(db,"user",{
          uid:user.uid,
          authProvider:"local",
          email,
          password
         
         }
        ))
      }catch (error){
        console.error(error.code, error.message)
        alert(error);
      }
}

const login =()=>{
    try{
        signInWithEmailAndPassword(auth,email,password)
    }catch(error){
      console.log(error);
      alert(error)
    }
};

const logout =()=>{
  signOut(auth)
};

export{auth,db,login,signup,logout};