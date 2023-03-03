import { data  } from "../db.js";


export const getmethod = ( (req, res) => {
    let qr = 'SELECT * FROM men'
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
    let qr = `SELECT * FROM men WHERE id=${pID}`
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

    let name = req.body.Name
    let price = req.body.price
    let desc = req.body.description
    let qr = `INSERT  INTO men ( Name, price, description, pics) VALUES('${name}','${price}','${desc}',?)`
    // const values = [
    //     req.body.Name,
    //     req.body.price,
    //     req.body.description,
       

    // ]
    let yui=url + req.file.filename
    data.query(qr,[yui], (err, result) => {
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
    let qr = `UPDATE  men  SET  Name='${name}', price='${price}', description='${desc}',pics=? WHERE id=${pID}`





    data.query(qr,[img], (err, result) => {
        if (!err) {
            res.send(result)
        }
        else {
            res.send('cannot get data' + err)
            console.log('cannot get datas', err)
        }

    })
}
}

export const deletemethod =(req, res) => {
    let pID = req.params.id
    let qr = `DELETE FROM men WHERE id=${pID}`
    data.query(qr, (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            res.send("cannot delete" + err)
            console.log('cannot delete', err)
        }
    })
}