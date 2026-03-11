const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({
    origin: "https://your-naruto-app.vercel.app", 
    methods: ["POST", "GET"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

var username = "kamal"
var password = 1234

app.post("/login", (req, res) => {
    if (req.body.username === username && req.body.password == password) {
        res.send(true)
    } else {
        res.send(false)
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})