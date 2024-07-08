import express from 'express'
import cors from 'cors';
import auth from './routes/auth.routes.js';
import cookieParser from 'cookie-parser'
import task from './routes/task.routes.js';
const App = express ();

App.use(cors({
    origin: 'http://localhost:5173', // Cambia esto al origen de tu front-end
    credentials: true
  }));

App.use(express.json())
App.use(cookieParser())
App.use(auth)
App.use(task)



export default App 