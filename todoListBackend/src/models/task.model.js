import mongoose from 'mongoose';
const taskSchema = new mongoose.Schema({
    idTask :{
        type:Number,
        require:true,
        trim:true
    },
    idUser:{
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

export default mongoose.model('tasks',taskSchema)

