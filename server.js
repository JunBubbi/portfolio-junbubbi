const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const mongo = require('./app/mongodb')
const router = require('./app/routes')

// set port
const port = process.env.PORT || 8080

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// register routes
app.use(router)

app.listen(port, function() {
    console.log(`Hi port ${port}!`)
})

// start mongo connection pool, then start express app
// mongo.connect(port)
//     .then(() => app.listen(port))
    // .then(() => console.log(`Connected to port ${port}`))
    // .catch((err) => {
    //     console.error(err)
    //     process.exit(1)
    // })
