import { auth } from "./firebaseInit.js";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const logoutItem = document.getElementById("logoutItem");
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
  loginBtn.textContent = user ? `Signed in as ${user.displayName || user.email}` : "Sign in with Google";
  loginBtn.disabled = !!user;
  logoutItem.style.display = user ? "" : "none";
});

loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => console.log("User signed in:", result.user))
    .catch((error) => {
      console.error("Error signing in:", error);
      alert(error.code === "auth/unauthorized-domain"
        ? "Sign-in failed: this domain is not authorized in Firebase.\nOpen the app via a local server (e.g. Live Server) instead of opening the file directly."
        : `Sign-in failed: ${error.message}`
      );
    });
});

logoutBtn.addEventListener("click", () => {
  signOut(auth).catch((error) => console.error("Sign-out error:", error));
});
