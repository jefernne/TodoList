import mongoose from "mongoose";


const TasksDelete = new mongoose.Schema({
    idTask:{
        type:Number,
        require:true
    },idUser:{
        type:Number,
        require:true,
        trim:true
    },
     title:{
        type:String,
        require:true
     },
     Description:{
        type:String,
        require:true
     },
     State:{
        type:Boolean,
        require:true
     },
     order:{
      type:Number,
      require:true
     }
})

export default mongoose.model('TasksDeltes', TasksDelete)