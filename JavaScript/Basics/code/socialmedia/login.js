document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate fields are not empty
    if (!username || !password) {
      alert("All fields are required.");
      return;
    }

    // Get users from LocalStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching username and password
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Save logged in user info to LocalStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful!");

      // Redirect to home page after 1 second
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    } else {
      alert("Invalid username or password");
    }
  });
