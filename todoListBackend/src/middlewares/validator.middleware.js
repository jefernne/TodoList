

export const validateShema = (schema)=>(req, res, next)=>{
    try{
        const {User, Email, Password} = req.body;
        schema.parse({User, Email, Password})
        next()
    }catch(error){
        
       
        res.status(400).json({message: error.errors.map(err => err.message)})
    }

}