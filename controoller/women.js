import { data  } from "../db.js";


export const getmethod = ( (req, res) => {
    let qr = 'SELECT * FROM women'
    data.query(qr, (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            res.send("cannot grt data" + err)
            console.log("blahahaha", err)
        }
    })
})


export const getbyid= (req, res) => {
    let pID = req.params.id
    let qr = `SELECT * FROM women WHERE id=${pID}`
    data.query(qr, (err, result) => {
        if (!err) {
            res.send(result)
        }
        else {
            res.send('cannot get data' + err)
            console.log('cannot get datas', err)
        }

    })
}

export const postmethod = (req, res) => {
    const url = "http://localhost:5678/uploads/"

    let qr = `INSERT  INTO women ( Name, price, description, pics) VALUES(?)`
    const values = [
        req.body.Name,
        req.body.price,
        req.body.description,
        url + req.file.filename

    ]

    data.query(qr, [values], (err, result) => {
        if (!err) {
            res.send(result)
        }
        else {
            res.send('cannot get data' + err)
            console.log('cannot get datas', err)
        }

    })
}

export const updatemethod = (req, res) => {
    const url = "http://localhost:5678/uploads/"

    const file=req.file
    if(!file){res.send({"gyugu":"reyhrtyutry"})}
    else{
    let pID = req.params.id
    let name = req.body.Name
    let price = req.body.price
    let desc = req.body.description

    let img = url + req.file.filename
    let qr = `UPDATE  women  SET  Name='${name}', price='${price}', description='${desc}', pics='${img} ' WHERE id=${pID}`





    data.query(qr, (err, result) => {
        if (!err) {
            res.send(result)
        }
        else {
            res.send('cannot get data' + err)
            console.log('cannot get datas', err)
        }

    })
}}

export const deletemethod =(req, res) => {
    let pID = req.params.id
    let qr = `DELETE FROM women WHERE id=${pID}`
    data.query(qr, (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            res.send("cannot delete" + err)
            console.log('cannot delete', err)
        }
    })
}