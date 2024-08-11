import { auth, signInWithEmailAndPassword } from "../utils/firebase.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#loginBtn");

button.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Signin Successfully, redirecting...");
      setTimeout(() => {
        window.location.href = "../home/home.html";
      }, 2000);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
