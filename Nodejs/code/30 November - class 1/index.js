import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'

const app = express()
console.log(process.env.PORT, "==>>> process.env.PORT")
const PORT = process.env.PORT

app.use(express.json()) //body-parse
app.use(morgan()) //logging

app.use((req, res, next) => {
    req.abhiKaTime = new Date().toISOString()   //req data changed
    next()
})

app.get('/', (req, res) => {
    console.log(req.abhiKaTime, "==>> abhi ka time")
    res.status(200).json({
        status: true,
        message: "Request handled successfully at Home Page",
        waqt: req.abhiKaTime
    })
})
app.get('/cholayChaat', (req, res) => {
    res.status(200).send("Hello Sir, yeh leyn aap k choley ki plate")
})

app.post('/money', (req, res) => {
    console.log(req.body)
    if (req.body.price > 200) {
        res.status(200).send(`Hello sir, thank you, this is your chutta amount ${+ req.body.price - 200}`)
    } else if (req.body.price < 200) {
        res.status(400).send(`Yeh kya mazakh hai, ${200 - req.body.price} paisay kam hain`)
    } else if (req.body.price == 200) {
        res.status(200).send("Thank you sir, wapsi aana")
    }

    res.status(200).send("Haan lifafa mil gaya")
})

app.listen(PORT, () => {
    console.log("Server chal gaya")
})