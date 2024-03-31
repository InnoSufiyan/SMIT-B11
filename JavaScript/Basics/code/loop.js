// var tableIwant = prompt("k bhai konsa table chahiye")

// if(!isNaN(tableIwant)) {
//     for(let i = 1; i <=10; i++) {
//         document.write(tableIwant + " X " + i + " = " + (tableIwant * i) + " <br>")
//         // console.log(i, "==>> mera pyara i")
//     }
// } else {
//     alert("insan ban k number likho")
// }

// const resturantWaley = ["biryani", "korma", "white karahi", "daal chawal", "tikka", "behari boti"]

// const myDemand = prompt("kya khana hai")
// //6

// var myCounter
// var foodFound = false

// for (let i = 0; i < resturantWaley.length; i++) {
//     if (resturantWaley[i] == myDemand) {
//         foodFound = true
//         myCounter = i
//         break;
//     }
//     console.log(i)
// }

// console.log(myCounter, "==>myCounter")
//       //0 falsy
//       // true
// if (!foodFound) {
//     alert("Sorry jani tumhara food available nahin hai")
// } else {
//     alert("Haan jani khana available hai , counter number " + myCounter + " sey jaa k le lo")
// }


// const resturantWaley = ["biryani", "korma", " ", "white karahi", "daal chawal", "tikka", "behari boti"]

// for(let i = 0; i < resturantWaley.length; i++) {
//     if(resturantWaley[i] == " " || resturantWaley[i] == "daal chawal")  continue;
//     console.log("Counter number " + i + " per available hai, " + resturantWaley[i])
// }


// const resturantWaley = ["biryani", "korma", "white karahi", "daal chawal", "tikka", "behari boti"]

// const deal = ["cold drink", "raita", "salad", "french fries", "sweet dish"]

// for(i = 0; i < resturantWaley.length; i++) {
//     // console.log(i, resturantWaley[i] ,"====item")
//     for(j = 0; j < deal.length; j++) {
//         // console.log("Ek " + resturantWaley[i] + " kay saath ek " + deal[j] + " free", "==>> my deal")
//         console.log(`Ek ${resturantWaley[i]} kay saath ek ${deal[j]} free`)
//     }
// }

// var customerDemand = prompt('What is your demand')

// var fruits = ['apple', 'banana', 'orange', 'mango']

// for(i=0; i < fruits.length; i++) {
//     if(fruits[i] == customerDemand) {
//         alert('yeh raha aap ka fruit, ' + customerDemand)
//         break;
//     } else {
//         alert(`counter number ${i} per aap ka ${customerDemand} fruit available nahin`)
//     }
// }

// var cityToCheck = prompt('What is your city name')

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"]

// for (var i = 0; i < cleanestCities.length; i++) {
//     console.log(i , "===>> i")
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

// var food = ["biryani", "tikka", "dahi baray", "fruit chaat", "samosay"]

// var userDemand = prompt('Kya samaan chahiye')

// var orderAvailable = false

// for (var i = 0; i < food.length; i++) {
//     if (userDemand === food[i]) {
//         alert(`Yes your ${userDemand} order is available`)
//         orderAvailable = true
//         break;
//     }
// }

// if (!orderAvailable) {
//     alert(`${userDemand} hamarey pass nahin hai`)
// }

// var students = ['umer', 'tanzeel', 'aaqib', 'ehtisham', 'rashid', 'farhan', 'kamran']

// var managementCalledStudent = prompt('What is the name of the student')

// var isStudentAvailable = false

// for(var i = 0; i < students.length; i++) {
//     if(managementCalledStudent === students[i]) {
//         alert('Aaajaao bhaee management ne bulwaya hai')
//         isStudentAvailable = true
//         break
//     }
// }

// if(!isStudentAvailable) {
//     alert(`${managementCalledStudent} class main nahin hai`)
// }

var food = ["biryani", "tikka", "chinese", "mandi", "steak"]

var coldDrink = ['Pakola', 'colaNext', 'FizzUP']

for (var i = 0; i < food.length; i++) {
    for (var j = 0; j < coldDrink.length; j++) {
        console.log(`Hamarey pass hai aaj khaney main hai, ${food[i]}, aur sath main resturant ki taraf se ${coldDrink[j]} free`)
    }
}