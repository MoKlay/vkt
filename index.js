import 'dotenv/config'
import express from "express";
import api from "./routes/API.js";

export const secret = process.env.KEY_SECRET || 'secret';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))

app.use('/api', api)

app.listen(2000, () => {})