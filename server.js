const express = require("express")
require("dotenv").config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/", async(req,res,next) => {
    res.send({message: "Hey its working...."})
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`[+] Listening to PORT ${port}`);
})