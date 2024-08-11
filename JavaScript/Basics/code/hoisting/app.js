// Check if a user is logged in
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  window.location.href = "./login.html";
}

// Function to display posts
function displayPosts() {
  const postsSection = document.getElementById("posts");
  postsSection.innerHTML = "";

  if (currentUser && currentUser.posts) {
    currentUser.posts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
                <p class="author">Posted by: ${post.author}</p>
                <p class="content">${post.content}</p>
                <p class="timestamp">Posted at: ${post.createdAt}</p>
                <div class="actions">
                    <button onclick="editPost(${index})">Edit</button>
                    <button onclick="deletePost(${index})">Delete</button>
                </div>
            `;
      postsSection.appendChild(postElement);
    });
  }
}

// Function to handle post creation
document.getElementById("postBtn")?.addEventListener("click", function () {
  const content = document.getElementById("postContent").value.trim();

  if (!content) {
    alert("Please enter some content for your post.");
    return;
  }

  setTimeout(() => {
    const post = {
      author: currentUser.username,
      content: content,
      createdAt: new Date().toLocaleString(),
    };

    currentUser.posts.unshift(post);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    document.getElementById("postContent").value = "";
    displayPosts();
  }, 1000);
});

// Function to handle post editing
function editPost(index) {
  const newContent = prompt(
    "Edit your post:",
    currentUser.posts[index].content
  );
  if (newContent !== null) {
    currentUser.posts[index].content = newContent;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    displayPosts();
  }
}

// Function to handle post deletion
function deletePost(index) {
  if (confirm("Are you sure you want to delete this post?")) {
    currentUser.posts.splice(index, 1);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    displayPosts();
  }
}

// On home page load, display posts and username
if (document.getElementById("homePage")) {
  document.getElementById("homePage").classList.remove("hidden");
  document.getElementById("usernameDisplay").textContent = currentUser.username;
  displayPosts();
}
