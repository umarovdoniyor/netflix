import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed";

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: "AIzaSyA0RlqAvZQfrMDHmPZcIfg_PiPHvBr3mpQ",
  authDomain: "netflix-clone-63de9.firebaseapp.com",
  projectId: "netflix-clone-63de9",
  storageBucket: "netflix-clone-63de9.appspot.com",
  messagingSenderId: "270289589351",
  appId: "1:270289589351:web:39c516c9021d64e39df0c2",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
