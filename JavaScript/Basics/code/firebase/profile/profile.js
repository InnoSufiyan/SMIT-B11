import {
  auth,
  onAuthStateChanged,
  doc,
  getDoc,
  db,
  setDoc,
  uploadBytesResumable,
  getDownloadURL,
  collection,
  query,
  where,
  getDocs,
  ref,
  storage,
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
const profilePictureInput = document.querySelector("#profilePictureInput");
const profilePicture = document.querySelector("#profilePicture");

const postShowingFunction = (postData) => {
  document.querySelector("#postArea").innerHTML += `
    <div id="post">
            <div id="topArea">
              <div id="leftArea">
                <div id="profilePicture">
                  <img
                    src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
                    alt=""
                  />
                </div>
                <div id="section2">
                  <p>${postData.authorDetails.name}</p>
                  <p>data n time</p>
                </div>
              </div>
              <div id="rightArea">
                <button>*</button>
                <button>...</button>
              </div>
            </div>
            <div id="midArea">
              <p>
                ${postData.textData}
              </p>
              <div id="contentImage">
                <img
                  src=${postData.imgData}
                  alt=""
                />
              </div>
            </div>
            <div id="bottomArea">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
  `;
};

document
  .querySelector("#updateProfileBtn")
  .addEventListener("click", async () => {
    console.log(profilePictureInput.files[0]);

    const file = profilePictureInput.files[0];

    const date = new Date();

    // Create a storage reference from our storage service
    const storageRef = ref(storage, `images/${date.getTime()}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);

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
              imgUrl: downloadURL,
            });
            console.log(response, "==>> response");
            document.querySelector("#closeBtn").click();

            //data ek aur dafa updated get kar raha hun

            const docRef = doc(db, "users", userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              userData = docSnap.data();
              const {
                firstName,
                lastName,
                email,
                userName,
                description,
                imgUrl,
              } = docSnap.data();

              // description -->> undefined
              document.querySelector("#userName").innerHTML =
                userName[0].toUpperCase() + userName.slice(1).toLowerCase();
              document.querySelector("#description").innerHTML =
                description || "No description added";
              document.querySelector("#profilePicture").src = imgUrl;
              document.querySelector("#firstName").innerHTML = firstName;
              document.querySelector("#lastName").innerHTML = lastName;
              document.querySelector("#email").innerHTML = email;
              document.querySelector("#firstNameInput").value = firstName;
              document.querySelector("#lastNameInput").value = lastName;
              document.querySelector("#userNameInput").value = userName;
              document.querySelector("#descriptionInput").value =
                description || "";
            } else {
              // docSnap.data() will be undefined in this case
              console.log("No such document!");
            }
          } catch (error) {
            console.log("code phata", error);
          }
        });
      }
    );
  });

const postFetchFunction = async () => {
  // document.querySelector("#postArea").innerHTML = "";
  const q = query(collection(db, "posts")); //, where("capital", "==", true)

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());

    // main sirf wohi post aagey transfer karunga jis main meri marzi ki uid hogi
    const { authorDetails } = doc.data();
    if (authorDetails.uid === userId) postShowingFunction(doc.data());
  });
};

postFetchFunction();
