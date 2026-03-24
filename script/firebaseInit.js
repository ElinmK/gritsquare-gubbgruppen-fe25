import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyASUiN6n-p9_B9Ruox6l3ZmW6qbQx3kRgY",
  authDomain: "flaskpost-8adcc.firebaseapp.com",
  projectId: "flaskpost-8adcc",
  storageBucket: "flaskpost-8adcc.firebasestorage.app",
  messagingSenderId: "75468522109",
  appId: "1:75468522109:web:6a69184654f1cea857e714",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
