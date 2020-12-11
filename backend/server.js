let express = require('express')
let cors = require('cors')
let dotenv = require('dotenv')
let mongoose = require('mongoose')

let app = express()

app.use(express.json())
app.use(cors())

dotenv.config({ path: './.env' })

let PORT = process.env.PORT || 5000;
// let URI = process.env.URI || 
let URI = "mongodb://127.0.0.1/todo";

// Mongodb Connection
let connection = mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
connection.then(connect => console.log(`Successfully established connection to dataase`))
.catch(err => console.log(`Couldnot connect to database`))


// Users
let userRoutes = require('./routes/users')
app.use('/user/', userRoutes)

// Routes
let todoRoutes = require('./routes/todos')
app.use('/todo/', todoRoutes)


// 404 page
app.use((req, res) => res.json({msg: "404 Page"}))


// Port
app.listen(PORT, ()=>console.log(`Server Started at Port ${PORT}`))