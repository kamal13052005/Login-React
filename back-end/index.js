const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

var username = "kamal"
var password = 1234

app.post("/login", (req, res) => {
    if (req.body.username === username && req.body.password == password) {
        res.send(true)
    } else {
        res.send(false)
    }
})

app.listen(5000, () => {
    console.log("Server is get ready...")
})