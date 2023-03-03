import { createConnection } from "mysql2"

 export const data = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'final',
    port: '3306'
})



data.connect((err) => {
    if (err) {
        console.log(" db not connected")

    } else {
        console.log(" db connected")
    }


})