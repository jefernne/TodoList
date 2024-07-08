import { Router } from "express";
import { logout, posregister, postlogin, profile, verifyToken } from "../controllers/singup.js";
import { authRequire } from "../middlewares/ValidationToken.js";
import { loginschema, registerschema } from "../schemas/auth.schema.js";
import { validateShema } from "../middlewares/validator.middleware.js";


//Backend de auntenticacion para el todo List
const auth = Router()

auth.post('/singup',validateShema(registerschema),posregister)
auth.post('/login', validateShema(loginschema),postlogin)
auth.get('/verify', verifyToken)
auth.post('/logout',logout)
auth.get('/profile',authRequire,profile)


export default auth