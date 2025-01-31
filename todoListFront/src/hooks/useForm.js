import { useState } from "react"

export const useForms = (inputValue = {})=>{
const [form, setform] = useState(inputValue)

const inputChange = ({target})=>{
 const {name, value}= target

 setform({
    ...form,
    [name]:value
 })

 
}
const onResetForm = ()=>{
    setform(inputValue)
}
 
return{
    ...form,
    inputChange,
    onResetForm
}

}