const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();
app.use(cors("*"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 3000;

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'soham',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: '5432'
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post("/userdata", (req, res) => {
    const userInfo = req.body
    pool.query('INSERT INTO amesite.user_data (email, name, grade) VALUES ($1, $2, $3) RETURNING *', [userInfo.email, userInfo.name, userInfo.grade], (error, response) => {
        if (error) {
            throw error
        }

        res.status(201).send(`User grades added with id: ${response.rows[0].id}`)
    })
});
