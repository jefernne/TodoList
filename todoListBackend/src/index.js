import App from "./app.js";
import { PORT } from "./config/config.js";
import { conectDB } from "./database/todolist.js";


conectDB()
App.listen(PORT, ()=>{
    console.log(`Se esta escuchando por el puerto ${PORT}`)
})