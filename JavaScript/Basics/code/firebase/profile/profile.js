import {
  auth,
  onAuthStateChanged,
  doc,
  getDoc,
  db,
  setDoc,
} from "../utils/firebase.js";

let userId; //khali variable for future use
let userData; //khali variable for future use

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid, "==>> uid");

    //userid k variable main uid daali for future use
    userId = uid;
    //please mujhey is ka data bhi de do

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      userData = docSnap.data();
      const { firstName, lastName, email, userName, description } =
        docSnap.data();

      // description -->> undefined
      document.querySelector("#userName").innerHTML =
        userName[0].toUpperCase() + userName.slice(1).toLowerCase();
      document.querySelector("#description").innerHTML =
        description || "No description added";
      document.querySelector("#firstName").innerHTML = firstName;
      document.querySelector("#lastName").innerHTML = lastName;
      document.querySelector("#email").innerHTML = email;
      document.querySelector("#firstNameInput").value = firstName;
      document.querySelector("#lastNameInput").value = lastName;
      document.querySelector("#userNameInput").value = userName;
      document.querySelector("#descriptionInput").value = description || "";
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    // ...
  } else {
    console.log("no user login");
    // User is signed out
    // ...
  }
});

const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput = document.querySelector("#lastNameInput");
const userNameInput = document.querySelector("#userNameInput");
const descriptionInput = document.querySelector("#descriptionInput");

document
  .querySelector("#updateProfileBtn")
  .addEventListener("click", async () => {
    console.log(
      firstNameInput.value,
      lastNameInput.value,
      userNameInput.value,
      descriptionInput.value
    );
    try {
      // Add a new document in collection "cities"
      const response = await setDoc(doc(db, "users", userId), {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        userName: userNameInput.value,
        email: userData.email,
        description: descriptionInput.value,
      });
      console.log(response, "==>> response");
      document.querySelector("#closeBtn").click();

      //data ek aur dafa updated get kar raha hun

      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        userData = docSnap.data();
        const { firstName, lastName, email, userName, description } =
          docSnap.data();

        // description -->> undefined
        document.querySelector("#userName").innerHTML =
          userName[0].toUpperCase() + userName.slice(1).toLowerCase();
        document.querySelector("#description").innerHTML =
          description || "No description added";
        document.querySelector("#firstName").innerHTML = firstName;
        document.querySelector("#lastName").innerHTML = lastName;
        document.querySelector("#email").innerHTML = email;
        document.querySelector("#firstNameInput").value = firstName;
        document.querySelector("#lastNameInput").value = lastName;
        document.querySelector("#userNameInput").value = userName;
        document.querySelector("#descriptionInput").value = description || "";
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log("code phata", error);
    }
  });
