import App from "./app.js";
import { PORT } from "./config/config.js";
import { conectDB } from "./database/todolist.js";


conectDB()
App.listen(PORT, ()=>{
    console.log(`It is listening on the port ${PORT}`)
})