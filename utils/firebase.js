import { initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const config = {
  apiKey: "AIzaSyAp-ibTn86d8ecvw55iGB1MdXyt6LsdS3s",
  authDomain: "udevs-bootcamp.firebaseapp.com",
  projectId: "udevs-bootcamp",
  storageBucket: "udevs-bootcamp.appspot.com",
  messagingSenderId: "560904136095",
  appId: "1:560904136095:web:7c84bdd7998d31ded949aa",
};

const app = initializeApp(config); 
const db = getFirestore(app);
export {db}