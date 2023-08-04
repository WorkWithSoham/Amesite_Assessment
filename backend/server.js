const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();
app.use(cors("*"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 3000;

const Pool = require('pg').Pool
// const pool = new Pool({
//     user: 'soham',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'password',
//     port: '5432'
// })

const pool = new Pool({
    user: 'superuser_amesite',
    host: 'dpg-cj6luscl975s73ce112g-a.oregon-postgres.render.com',
    database: 'amesite',
    password: 'QiTMRopDvbpVmowiLQMdtEqh2yZeWxIb',
    port: '5432'
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post("/userdata", (req, res) => {
    const userInfo = req.body
    console.log(req.hostname, "requested to add user details:", userInfo)
    pool.query('INSERT INTO amesite.user_data (email, name, grade) VALUES ($1, $2, $3) RETURNING *', [userInfo.email, userInfo.name, userInfo.grade], (error, response) => {
        if (error) {
            throw error
        }

        res.status(201).send(`User grades added with id: ${response.rows[0].id}`)
    })
});
