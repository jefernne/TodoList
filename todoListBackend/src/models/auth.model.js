import mongoose  from "mongoose";

const authSchema = new mongoose.Schema({
    idUser:{
        type:Number,
        require:true,
        trim:true
    },
    User:{
        type:String,
        required:true,
        trim:true 
    },
    Email:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    },
    Password:{
        type:String,
        required:true,
        trim:true 

    }
},{timestamps:true})

export default mongoose.model('singups',authSchema)