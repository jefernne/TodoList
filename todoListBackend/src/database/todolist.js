import mongoose from 'mongoose'
import { UrlMongoHost } from '../config/config.js';

const url = UrlMongoHost;

export const conectDB = async()=>{
    try{
        await mongoose.connect(url)
        console.log('>> It connected')
    }catch(error){
        console.log(`An error occurred ${error}`)
    }
}