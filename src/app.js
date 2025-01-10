import express, { json, urlencoded } from "express"
const app = express()

app.use(urlencoded({extended:true}))
app.use(json())

export {app};