const submit = document.querySelector("#submit");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
submit.addEventListener("click", () => {
  console.log(input.value);
  const li = document.createElement("li");
  li.innerHTML = `<input onclick='itemCompleted(this)' type="checkbox" />
  <p>${input.value}</p>
  <div>
    <button>Edit</button>
    <button>Delete</button>
  </div>`;
  ul.appendChild(li);
  input.value = "";
});

function itemCompleted(list) {
  if (list.nextElementSibling.style.textDecoration == "line-through") {
    list.nextElementSibling.style.textDecoration = "none";
  } else {
    list.nextElementSibling.style.textDecoration = "line-through";
  }
}
