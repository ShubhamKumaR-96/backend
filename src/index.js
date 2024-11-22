// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
     console.log(`Server is running at http://localhost:${process.env.PORT || 8001}`)
    });
    app.on("err", (err) => {
      console.log("Error", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection error !!!", err);
  });

/*
import express from 'express'
const app=express();

(
    async ()=>{
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error",(error)=>{
                console.log("Error",error)
                throw error
            })

            app.listen(process.env.PORT,()=>{
                console.log(`App is lising on port ${PORT}`)

            })
        } catch (error) {
            console.log("Error",error)
            throw error
        }
    }
)()

*/
