import jwt from 'jsonwebtoken'
import { secretOrPrivateKey } from '../config/config.js'

export const createAccresToken = (payolad)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(
            payolad,
            secretOrPrivateKey,
            {expiresIn:"1d"},
            (error, token)=>{
                if(error){
                    return reject(error)
                }
                return resolve(token)
            }
        )
    })
}