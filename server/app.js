import express from "express"
import cors from "cors"
export const app = express();
import userRouter from "./Routes/users.js"

app.use(express.json())
app.use(cors())


 app.get("/",(req,res)=>{
    res.send("hello");
})

app.use("/api/v1/users" , userRouter)


