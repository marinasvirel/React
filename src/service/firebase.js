import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxtkbW7Y6PdyW0ye2EjdINdkTV-L6DTXA",
  authDomain: "gb-9-794d2.firebaseapp.com",
  databaseURL: "https://gb-9-794d2-default-rtdb.firebaseio.com",
  projectId: "gb-9-794d2",
  storageBucket: "gb-9-794d2.appspot.com",
  messagingSenderId: "646281434301",
  appId: "1:646281434301:web:2494c740d36857d338d3d4",
  measurementId: "G-KLL4XXW6L0"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;