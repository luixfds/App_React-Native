import firebase from "firebase"
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyDA-sPmFP3R5SYx3UGS3pKNID60XJCEt3g",
  authDomain: "suga-f305e.firebaseapp.com",
  projectId: "suga-f305e",
  storageBucket: "suga-f305e.appspot.com",
  messagingSenderId: "925459835000",
  appId: "1:925459835000:web:39104789bf894b2870a58d"
};



firebase.initializeApp(firebaseConfig);

export default firebase      