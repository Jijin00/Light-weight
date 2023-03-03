
import express , {  } from "express";
import cors   from "cors"
import bodyparser   from "body-parser"



const db = express()
db.use(cors())
db.use(bodyparser.json())
db.use('/uploads', express.static('uploads'))

db.listen(5678, () => {
    console.log("successfully listening")
})



import "./db.js"

import menroute from "./routes/men.js"
import womenroute from "./routes/women.js"
import access from "./routes/access.js"


db.use("/men",menroute)
db.use("/women",womenroute)
db.use("/access",access)
