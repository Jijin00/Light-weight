import express from "express"
import multer from "multer"
import { getmethod , getbyid ,postmethod , updatemethod , deletemethod} from "../controoller/women.js"

//----------------multer-------------

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })



 const route =express.Router()


route.get("/", getmethod)
route.get("/:id", getbyid)
route.post("/",upload.single('pics'),postmethod)
route.put("/:id", upload.single('pics'),updatemethod)
route.delete("/:id",deletemethod)


export default route