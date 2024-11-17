const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    console.log(req.url, "===>> req.url")
    if (req.url == '/') {
        res.end('Salaam from Cholay ki dukaan')
    } else if (req.url == '/chanapaapri') {
        res.end('Yeh lo dost chana paapri enjoy karo')
    } else if (req.url == '/aalopaapri') {
        res.end('Yeh lo masaalay waley aalooooo')
    } else if(req.url == '/golgappay') {
        res.end('Yeh lo gol gappay')
    } else if(req.url == '/frenchfries') {
        res.end('Yeh lo masaalay waley french fries')
    } else if(req.url == '/chatniwalaroll') {
        res.end('Yeh lo chatni wala rolll')
    } else {
        res.end('Sorry not available')
    }
})

server.listen(8000, '0.0.0.0', (err, data) => {
    console.log('Server is listening on Port 8000')
    if (err) {
        throw err
    }
})

