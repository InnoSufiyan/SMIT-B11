// // console.log("pehla console");
// // const meraVariable = setInterval(() => {
// //   console.log("salam -->> dusra console");
// // }, 2000);
// // console.log("teesra console");

// // const button = document.createElement("button");
// // button.addEventListener("click", () => {
// //   clearInterval(meraVariable);
// // });
// // document.body.prepend(button);

// const pararaph = document.querySelector("p");
// const answers = document.querySelectorAll(".ans"); //all answers
// const buttons = document.querySelectorAll("button");

// pararaph.addEventListener("click", (event) => {
//   console.log(event.currentTarget, "===>> yeh mera event");
//   console.log(this);
// });

// answers.forEach((answer) => {
//   answer.addEventListener("click", function (event) {
//     console.log(event.currentTarget);
//     console.log(this);
//   });
// });

// // buttons.forEach((btn, indexNum) => {
// //   btn.addEventListener("click", () => {
// //     console.log(`Hellloooo main ${indexNum + 1} ka button chal gaya`);
// //     if (answers[indexNum].classList.contains("hide")) {
// //       answers[indexNum].classList.remove("hide");
// //       btn.textContent = "-";
// //     } else {
// //       answers[indexNum].classList.add("hide");
// //       btn.textContent = "+";
// //     }
// //   });
// // });

// // var bullets = 200;
// // let goliInterval;
// // pararaph.addEventListener("mousedown", () => {
// //   goliInterval = setInterval(() => {
// //     bullets = bullets - 1;
// //     if (bullets > 0) {
// //       console.log("Bullet is fired", bullets);
// //     } else {
// //       console.log("Reload required");
// //     }
// //   }, 50);
// // });
// // pararaph.addEventListener("mouseup", () => {
// //   console.log("goli chalna ruk gai");
// //   clearInterval(goliInterval);
// // });

// // const input = document.createElement("input");

// // document.body.prepend(input);

// // input.addEventListener("keypress", () => {
// //   if (input.value == "r") {
// //     console.log("reload kiya");
// //     bullets = 200;
// //     input.value = "";
// //   }
// // });

// // const myInterval = setInterval(() => {
// //   console.log("Hello how are you");
// // }, 10000);

// // function foo() {

// // }

// // const foo2 = ()=> {

// // }

const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  console.log(e.currentTarget);
  console.log(e.target);
});
