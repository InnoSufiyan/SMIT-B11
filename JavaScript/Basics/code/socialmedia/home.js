// Get logged in user info from LocalStorage
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

const allPosts = JSON.parse(localStorage.getItem("posts")) || [];

document.querySelector("#allPosts").innerHTML = allPosts
  .map((post) => {
    return `<div class="post">
        <p>${post.postData}</p>
        <p>Created by <span>${post.postUser}</span></p>
      </div>`;
  })
  .join(",");

// If no user is logged in, redirect to login page
if (!loggedInUser) {
  alert("No user is logged in");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
} else {
  // Display username on home page
  document.getElementById("username").textContent = loggedInUser.username;
}

// Add event listener to logout button
document.getElementById("logoutButton").addEventListener("click", function () {
  // Remove logged in user info from LocalStorage
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully");

  // Redirect to login page after 1 second
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
});

document.querySelector("#postBtn").addEventListener("click", () => {
  const inputValue = document.querySelector("#postInput").value;
  console.log(inputValue, "==>> input Value");
  const dateNow = new Date();
  allPosts.push({
    postData: inputValue,
    postUser: loggedInUser.username,
    date: `${dateNow.getDate()}/${
      dateNow.getMonth() + 1
    }/${dateNow.getFullYear()}`,
  });

  console.log(allPosts, ">> all Posts");

  localStorage.setItem("posts", JSON.stringify(allPosts));

  console.log("----->> posts saved in localStorage");

  console.log(allPosts, "==>> allPosts");

  //   var postsString = allPosts.join()

  document.querySelector("#allPosts").innerHTML = allPosts
    .map((post) => {
      return `<div class="post">
        <p>${post.postData}</p>
        <p>Created by <span>${post.postUser}</span></p>
        <p>Posted on ${post.date}</p>
      </div>`;
    })
    .join(",");
});
