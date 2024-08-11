// Function to handle login
document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));    //undefined

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      localStorage.setItem("currentUser", JSON.stringify(storedUser));
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password.");
    }
  });
