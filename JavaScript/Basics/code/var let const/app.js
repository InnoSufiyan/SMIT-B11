welcome()
console.log(student1, "==>>> student1")  //undefined
console.log(student2, "==>>> student2") //ca
console.log(student3, "==>>> student3") //ca

// //var let const

// // var -->> jab chaho change kardo

// // var salary;  //declare
// // salary = 1000 //value assign

// // var salary = 1000 // declare + assign


// let student = 'sufiyan'

// const car = 'civic';

// // car = 'corolla'


// let motorbike;



// function greet() {
//     alert(student)
// }

// greet()












// student = 'aaqib'












// greet()







// {
//     var student = 'umer'
//     let student1 = 'sharukh'      //blockscoped
//     const student2 = 'salman'   //blockscoped
//     console.log(student, "==>> student blocklevel1")
//     console.log(student1, "==>> student1 blocklevel1")
//     console.log(student2, "==>> student2 blocklevel1")
// }
// {
//     var student = 'umer'
//     let student1 = 'babar'      //blockscoped
//     const student2 = 'kohli'   //blockscoped
//     console.log(student, "==>> student blocklevel2")
//     console.log(student1, "==>> student1 blocklevel2")
//     console.log(student2, "==>> student2 blocklevel2")
// }
// {
//     var student = 'umer'
//     let student1 = 'shaheen'      //blockscoped
//     const student2 = 'starc'   //blockscoped
//     console.log(student, "==>> student blocklevel3")
//     console.log(student1, "==>> student1 blocklevel3")
//     console.log(student2, "==>> student2 blocklevel3")
// }

// let student1 = 'tanzeel'
// const student2 = 'ehtisham'

// console.log(student, "==>> student globalscope")
// console.log(student1, "==>> student1 globalscope")
// console.log(student2, "==>> student2 globalscope")

var student1 = 'umer' //undefined
let student2 = 'tanzeel' //cannot access before initialize
const student3 = 'ehtisham' //cannot access before initialize

function welcome() {
    alert('welcome to our website')
}

const add2 = function () {
    alert(`Welcome to our website again`)
}