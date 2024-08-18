import {
  auth,
  onAuthStateChanged,
  signOut,
  doc,
  getDoc,
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  storage,
} from "../utils/firebase.js";
import { getNameFromEmail } from "../utils/merayFunction.js";

let userDetails;

//yeh btaeyga k koi login hai ya nahin haiF

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
      userDetails = docSnap.data();
      userDetails.uid = uid;
      console.log(userDetails, "==>> userDetails");
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

// yeh logout karney main help kareyga

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

// yeh post create karney main help kareyga

const postCreator = async () => {
  console.log("main chal raha hun");

  const textData = document.querySelector("#postInput");
  const imgFile = document.querySelector("#file");

  console.log(imgFile.files[0], "==>> image file");

  const file = imgFile.files[0];

  // file upload karney laga hun

  const date = new Date();

  // Create a storage reference from our storage service
  const storageRef = ref(storage, `images/${date.getTime()}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  let downloadImageUrl;

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
        downloadImageUrl = downloadURL;

        try {
          // Add a new document with a generated id.
          const docRef = await addDoc(collection(db, "posts"), {
            textData: textData.value,
            imgData: downloadImageUrl,
            authorDetails: {
              name: userDetails.firstName + " " + userDetails.lastName,
              img: userDetails.imgUrl || "",
              uid: userDetails.uid,
            },
          });
          console.log("Document written with ID: ", docRef.id);
          postFetchFunction();
        } catch (error) {
          console.log(error, "==>> error bata raha hun");
        }
      });
    }
  );

  // 'file' comes from the Blob or File API
  // try {
  //   const fileUploader = await uploadBytes(storageRef, file);
  //   console.log(fileUploader, "==>> fileUploader");
  // } catch (error) {
  //   console.log(error, "==>> error");
  // }
};

const postBtn = document.querySelector("#postBtn");

postBtn.addEventListener("click", postCreator);

// yeh html (postArea) main post show karwaney main help kareyga

const postShowingFunction = (postData) => {
  document.querySelector("#postArea").innerHTML += `<div id="post">
          <div id="topArea">
            <div id="leftArea">
            <div id="profilePicture">
              <img src=${
                postData.authorDetails.img ||
                "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
              } alt="">
            </div>
            <div id="section2">
              <p>${postData.authorDetails.name}</p>
              <p>data n time</p>
            </div>
            </div>
            <div id="rightArea">
            <button>Edit</button>
            <button>Delete</button>
            </div>
          </div>
          <div id="midArea">
            <p>${postData.textData}</p>
            <div id="contentImage">
              <img src=${postData.imgData} alt="">
            </div>
          </div>
          <div id="bottomArea">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div>`;
};

// yeh firebase se data mangwaney main help kareyga

const postFetchFunction = async () => {
  console.log("chal raha hun main");

  document.querySelector("#postArea").innerHTML = "";

  document.querySelector("#spinner").style.display = "block";

  try {
    const q = query(collection(db, "posts"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      postShowingFunction(doc.data());
    });

    document.querySelector("#spinner").style.display = "none";
  } catch (error) {
    console.log(error, "==>> phat raha hun mains");
  }
};

postFetchFunction();