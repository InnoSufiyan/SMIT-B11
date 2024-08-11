// // 4 log biscuit, chai, karahi, karahi, karahi, karahi, karahi, biscuit

// // promises -->> async
// // fetch -->> promise -->> async

// console.log("dadasd"); // biscuit

// // const meraWaada = new Promise(function  (resolve, reject) {
// //   // positive resolve()
// //   // negative reject()
// //   if (true) {
// //     resolve('larki maan gai');
// //   } else {
// //     reject('meri marzi');
// //   }
// // });

// const meraWaada = fetch(
//   "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=1&pageNo=1&keyWord=kutta&category="
// );
// const meraWaada2 = fetch(
//   "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=1&pageNo=1&keyWord=kutta&category="
// );
// const meraWaada3 = fetch(
//   "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=1&pageNo=1&keyWord=kutta&category="
// );
// const meraWaada4 = fetch(
//   "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=1&pageNo=1&keyWord=kutta&category="
// );
// const meraWaada5 = fetch(
//   "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=1&pageNo=1&keyWord=kutta&category="
// );

// async function callingApi() {
//   try {
//     // const response = await meraWaada;
//     // const response2 = await meraWaada2;
//     // const response3 = await meraWaada3;
//     // const response4 = await meraWaada4;
//     // const response5 = await meraWaada5;
//     // const responseJson = await response.json();
//     // console.log(responseJson, "==>> response");

//     const response = await Promise.all([
//       meraWaada,
//       meraWaada2,
//       meraWaada3,
//       meraWaada4,
//       meraWaada5,
//     ]);
//     console.log(response, "==>> response");
//   } catch (error) {
//     console.log("catch chala");
//     console.log(error);
//   }
// }

// callingApi();

// console.log("dadasd"); //biscuit

// // promise fetch -->> async
// // resolve reject
// // then catch -->> async
// // throw error

const countryApiCall = fetch("https://restcountries.com/v3.1/name/pakistan");

async function apiCall() {
  const res = await countryApiCall;
  const resJson = await res.json();
  console.log(resJson, "==>> country data");
}

apiCall();
