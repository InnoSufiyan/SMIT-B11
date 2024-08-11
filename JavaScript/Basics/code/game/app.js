// const player1 = document.getElementById("player1");
// const input = document.createElement("input");
// document.body.prepend(input);

// input.style.position = "absolute";

// let steps = 0;

// input.addEventListener("keypress", () => {
//   if (input.value == "d") {
//     steps += 1;
//     // transform: translateX('30px');
//     // transition-duration: 1s;
//     console.log("chala");
//     setTimeout(() => {
//       player1.style.transform = `translateX(${steps * 80}px)`;
//     //   player1.style.transitionDuration = "1s";
//     }, 500);
//     player1.style.backgroundImage =
//       'url("https://www.fightersgeneration.com/characters/asra-run.gif")';
//     player1.style.width = "420px";
//     setTimeout(() => {
//       player1.style.backgroundImage =
//         'url("https://www.fightersgeneration.com/characters/azrabc.gif")';
//       player1.style.width = "140px";
//       player1.style.height = "140px";
//     }, 1000);
//     input.value = "";
//   } else if (input.value == "a") {
//     steps -= 1;
//     // transform: translateX('30px');
//     // transition-duration: 1s;
//     console.log("chala");
//     player1.style.transform = `translateX(${steps * 30}px)`;
//     // player1.style.transitionDuration = "1s";
//     player1.style.backgroundImage =
//       'url("https://www.fightersgeneration.com/characters/asra-dashback.gif")';
//     player1.style.width = "420px";
//     setTimeout(() => {
//       console.log("set time out chala");
//       player1.style.backgroundImage =
//         'url("https://www.fightersgeneration.com/characters/azrabc.gif")';
//       player1.style.width = "140px";
//     }, 1000);
//     input.value = "";
//   } else if (input.value == "w") {
//     console.log("chal raha hun");
//     player1.style.backgroundImage =
//       'url("https://www.fightersgeneration.com/characters/asra-airp.gif")';
//     player1.style.height = "300px";
//     player1.style.width = "300px";
//     setTimeout(() => {
//       player1.style.backgroundImage =
//         'url("https://www.fightersgeneration.com/characters/azrabc.gif")';
//       player1.style.width = "140px";
//       player1.style.height = "140px";
//     }, 1000);
//     input.value = "";
//   }
// });

// // player1.style.transform = "translateX(30px)";


