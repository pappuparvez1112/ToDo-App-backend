const ToDoModel=require('../models/TodoModel')



module.exports.getToDo=async(req,res)=>{
    const toDo=await ToDoModel.find()
    res.send(toDo)
}
module.exports.saveToDo=async(req,res)=>{ 
//    try{
//     const model=new ToDoModel({
//         text:req.body.text,
//     });
//     const result=await model.save();
//     res.send("added sucessful"+result);
//    }catch(error){
//     res.send(error.message);

//    }
    // myModel.save()
    // .then(result=>{
    //     console.log(result);
    //     res.status(201).json({
    //         message:'my model create succesfully',

    //     })
    // })
     const {text}=req.body

     ToDoModel
     .create({text})
      .then((data)=>{     
        console.log('added data',data);
        console.log(data);
        res.send(data)
    })
}
module.exports.updateToDo=async(req,res)=>{
    const {_id,text}=req.body

    ToDoModel
    .findByIdAndUpdate(_id,{text})
     .then(()=>{     
       res.send("update successfully")
       
   })
}
module.exports.deleteToDo=async(req,res)=>{
    const {_id}=req.body

    ToDoModel
    .findByIdAndDelete(_id)
     .then(()=>{     
       res.send("Delete successfully")
       
   })
}
