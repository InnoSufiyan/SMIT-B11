const fs = require('fs')

const meraFileData = fs.readFile('./firstClass.txt', 'utf-8', (err, data) => {
    if (data) {

        console.log(data)
    } else {

        console.log(err)
    }
})
console.log("===>> me file parh raha hun")

const meraNewText = 'blah blah blah'
fs.writeFileSync('./output.txt', meraNewText)
console.log('data likh daala')
