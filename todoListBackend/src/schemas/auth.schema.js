import z from 'zod'
export const registerschema = z.object({
    User: z.string({
        required_error:'User is required'
    }),
    Email: z.string({
        required_error:'Email is required'
    }).email({
        message:'Invalid Email'
    }),
    Password: z.string({
        required_error: 'Password is required'
    }).min(6,{
        message:'Password must be at least 6 characters'
    })

})

export const loginschema = z.object({
    Email: z.string({
        required_error:'Email is required'
    }).email({
        message:'Invalid Email'
    }),
    Password: z.string({
        required_error:'Password is required'
    })
})