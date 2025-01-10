import express, { json, urlencoded } from "express"

const app = express()

//app.use(urlencoded({extended:true}))
//app.use(json())

//routes
import statsRouter from "./routes/stats.route.js";

app.use("/api/v1",statsRouter)

export {app};