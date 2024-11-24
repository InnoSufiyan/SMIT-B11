import express from "express"

const app = express()

const tours = []

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Salaam")
})

app.get('/newyear', (req, res) => {
    res.status(200).json({
        status: true,
        message: "All Tours Data have been recieved",
        data: tours
    })
})
app.put('/newyear', (req, res) => {
    res.send("new year ka data update hogaya")
})
app.post('/newyear', (req, res) => {
    console.log(req.body, "===>>> body aai hai")
    tours.push(req.body)
    res.send("new year ka data add hogaya")
})
app.delete('/newyear', (req, res) => {
    res.send("new year ka data delete hogaya")
})


app.listen(3000, () => {
    console.log("server chal gaya")
})