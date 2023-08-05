const express = require("express");
const cors = require("cors");
const axios = require("axios")
const bodyParser = require("body-parser")

const app = express();
app.use(cors("*"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 3000;

const moodleURL = "https://elearning-assessment-moodle.moodlecloud.com/webservice/rest/server.php"

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
    port: '5432',
    ssl: true
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post("/userdata", (req, res) => {
    const userInfo = req.body
    console.log(req.headers.origin, "requested to add user details:", userInfo)

    const createUserParams = {
        wstoken: 'bc8b228b23cb9518c59d638d5ff677d3',
        wsfunction: 'core_user_create_users',
        moodlewsrestformat: 'json',
        users: [
            {
                username: userInfo.name.toLowerCase(),
                firstname: userInfo.name,
                lastname: '',
                email: userInfo.email,
                password: 'password@123'
            }
        ]
    }

    const enrolStudentParams = {
        wstoken: 'bc8b228b23cb9518c59d638d5ff677d3',
        wsfunction: 'enrol_manual_enrol_users',
        moodlewsrestformat: 'json',
        enrolments: [
            {
                roleid: 5,
                userid: 0,
                courseid: 8
            }
        ]
    };

    const gradeParams = {
        wstoken: 'bc8b228b23cb9518c59d638d5ff677d3',
        wsfunction: 'mod_assign_save_grade',
        moodlewsrestformat: 'json',
        assignmentid: 1,
        userid: 0,
        grade: userInfo.grade,
        attemptnumber: -1,
        addattempt: 0,
        workflowstate: 'Completed',
        applytoall: 0
    };


    axios.post(moodleURL, {}, {params: createUserParams}).then(resp => {
        enrolStudentParams.enrolments.at(0).userid = resp.data[0].id
        gradeParams.userid = resp.data[0].id

        axios.post(moodleURL, {}, {params: enrolStudentParams}).then(resp => {

            axios.post(moodleURL, {}, {params: gradeParams}).then(resp => {
                console.log("Grades successfully posted!")
            })
        })
    })

    pool.query('INSERT INTO user_data (email, name, grade) VALUES ($1, $2, $3) RETURNING *', [userInfo.email, userInfo.name, userInfo.grade], (error, response) => {
        if (error) {
            throw error
        }

        res.status(201).send(`User grades added with id: ${response.rows[0].id}`)
    })
});
