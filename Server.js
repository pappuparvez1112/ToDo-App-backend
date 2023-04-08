const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require("body-parser")
const cors=require('cors')


const routes=require('./routes/ToDoRoute')

require('dotenv').config()

const app=express();
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

const PORT=process.env.port || 5000 





mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`connected to mongodb`))
.catch((err)=>console.log(err))





app.listen(PORT,()=>console.log(`Listening to port: ${PORT}`))

app.use(routes)

