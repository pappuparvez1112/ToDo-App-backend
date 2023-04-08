const  mongoose=require('mongoose')
const Schema=mongoose.Schema;

const todoSchema=new mongoose.Schema({
    text:{
      type:String,
      require:true
    }
})

module.exports= mongoose.model('Todo',todoSchema)
