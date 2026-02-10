import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routers/studentsRouter.js";
import dns from "node:dns";
import userRouter from "./routers/userRouter.js";

dns.setServers(["1.1.1.1","8.8.8.8"]);
const app = express();

const mongodbURI = "mongodb+srv://admin:2004TNJss@cluster0.irrrimh.mongodb.net/?appName=Cluster0"

mongoose.connect(mongodbURI).then(
    ()=>{
        console.log("connected to mongoDB");
    }
)


app.use( express.json() )
app.use("/students",studentRouter)
app.use("/users",userRouter)



app.listen(3000, (req,res) => {
	console.log("Server is running on port 3000");
});
