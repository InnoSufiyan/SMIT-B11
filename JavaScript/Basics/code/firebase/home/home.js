import {
  auth,
  onAuthStateChanged,
  signOut,
  doc,
  getDoc,
  db,
} from "../utils/firebase.js";
import { getNameFromEmail } from "../utils/merayFunction.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);

    //bhai saab banday ka data do
    //firestore database

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const { firstName, lastName, email, userName } = docSnap.data();
      document.querySelector("span").innerHTML = firstName + " " + lastName; //haider
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    // ...
  } else {
    console.log("bhai saab koi login hi nai hai");
    alert("Dafa hojao, login ho k aana");
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 2000);
    // User is signed out
    // ...
  }
});

const logoutBtn = document.querySelector("#logout");

logoutBtn.addEventListener("click", () => {
  //logout
  signOut(auth)
    .then(() => {
      alert("signout successfully, redirecting...");
      setTimeout(() => {
        window.location.href = "../login/login.html";
      }, 2000);
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
});
