

let userName = prompt('What is your userName') //sufiyan //Sufiyan //SUFIYAN
userName = userName.toLowerCase()

// if (userName === 'sufiyan') {
//     alert('You have admin access')
// } else if (userName === 'umer') {
//     alert('You have admin access')
// } else if (userName === 'aaqib') {
//     alert('You have admin access')
// } else {
//     alert('You donot have admin access')
// }

switch (userName) {
    case "sufiyan":
        alert('You have admin access')
        break;
    case 'aaqib':
        alert('You have admin access')
        break;
    case 'umer':
        alert('You have admin access')
        break;
    default:
        alert('You donot have admin access')
}