import mongoose from "mongoose";
import app from "./app.js";
import { connect } from  './dbconfig/dbconfig.js';


(async ()=>{
    try {
     connect();

    } catch (error) {
        console.error("ERROR:" , error)
        throw error
        
    }
})()