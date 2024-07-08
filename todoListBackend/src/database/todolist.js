import mongoose from 'mongoose'
import { UrlMongoHost } from '../config/config.js';

const url = UrlMongoHost;

export const conectDB = async()=>{
    try{
        await mongoose.connect(url)
        console.log('>> Se concecto')
    }catch(error){
        console.log(`Se produjo un error ${error}`)
    }
}