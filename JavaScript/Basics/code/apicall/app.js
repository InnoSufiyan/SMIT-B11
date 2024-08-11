document.querySelector("#submit").addEventListener("click", getCountry);

async function getCountry() {
  console.log("get country k ander");
  const inputValue = document.querySelector("input").value;
  fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
    .then((data) => data.json())
    .then((data) => {
      renderCountry(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const response = await fetch(
    `https://restcountries.com/v3.1/name/inputValue`
  );
  const jsonResponse = await response.json();
  console.log("fetch k baahir");
}

console.log("bilkul baaahir wala console");

function renderCountry(data) {
  console.log(data[0].borders);
  document.querySelector("img").src = data[0].flags.png;
  document.querySelector("#name").textContent = data[0].name.common;
  document.querySelector("#capital").textContent = data[0].capital[0];
  document.querySelector("#currency").textContent = Object.values(
    data[0].currencies
  )[0].symbol;
  let borders = [];
  data[0].borders.forEach((borderCountry) => {
    borders.push(`<a href="#" class="btn btn-primary">${borderCountry}</a>`);
  });
  console.log(borders.join());
  document.querySelector(".bordersArea").innerHTML = borders.join();
}

// console.log("one");

//async

// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   let apiSuccess = false;

//   if (apiSuccess) {
//     myResolve("success"); // when successful
//   } else {
//     myReject("api token nahin diya"); // when error
//   }
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     console.log("implementation successfull ==>>", value);
//     /* code if successful */
//   },
//   function (error) {
//     console.log("error recieved ==>>", error);
//     /* code if some error */
//   }
// );

// async function promiseHandler() {
//   await myPromise();
// }

// console.log("two");

// fetch("asdaddsaa")
//   .then((res) => res.json())
//   .then()
//   .catch();

// const meraWaada = new Promise(function (resolve, reject) {
//   resolve();
//   reject();
// });

// meraWaada.then((result) => {}).catch();
