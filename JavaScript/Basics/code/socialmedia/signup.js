document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate fields are not empty
    if (!username || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    // Validate password length
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Get users from LocalStorage or initialize an empty array if none exist
    const users = JSON.parse(localStorage.getItem("users")) || [];   //basket

    // Add new user to the array
    users.push({
        username,
        password
    });

    // Save updated users array back to LocalStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("User signed up successfully!");

    // Redirect to login page after 1 second
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  });
