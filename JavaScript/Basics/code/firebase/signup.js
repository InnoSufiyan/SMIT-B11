import {
  auth,
  createUserWithEmailAndPassword,
  collection,
  addDoc,
  db,
  doc,
  setDoc,
} from "./utils/firebase.js";

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");

const button = document.querySelector("#signupBtn");

button.addEventListener("click", async () => {
  console.log("chal raha hun main");
  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !userName.value ||
    !password.value ||
    !cPassword.value
  ) {
    return alert("saari fields chahiye hain apney ko");
  }

  if (password.value != cPassword.value)
    return alert("Password is not matching confirm password");

  try {
    //authentication implementationF
    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log(response, "===>> response");

    const {
      user: { uid },
    } = response;

    // return;

    //data store in database

    try {
      const docRef = setDoc(doc(db, "users", uid), {
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        email: email.value,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Registered Successfully");
      setTimeout(() => {
        window.location.href = "./login/login.html";
      }, 2000);
    } catch (e) {
      console.error("Error adding document in firestore database: ", e);
    }
  } catch (error) {
    console.log(error.message, "===>> authentication ka catch");
    alert(error.message);
  }
});
