import { type } from "express/lib/response";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please prove a Username"],
    },
    password: {
        type: password,
        required: [true, "Please provide a password"],
    },
    role: {
        type: String,
        required: [true, "Please provide your Work Role First "],
    },
    userId: {
        type: String,
        required: [true, "Please provide your User ID"],
        unique: [true, "This User Id has Already Been Taken"],
    },
    conductorId: {
        type: String,
        required: [true, "Please provide your Conductor ID"],
        unique: [True, 'This is already been taken by someone Othes ']
    },
    conductorName: {
        type: String,
        required: [true, "Please prove a Username"],
        unique: [true, "This username is already being Taken"]
    },
    AssignedBusId: {
        type: String,
        required: [true, "Please provide your Bus ID"],
        unique: [true, 'Please provide your unique Bus ID']
    },

    contact: {
        type: String,
        required: [true, 'Please provide your contact number'],
        unique: [True, "This is Someone's others Contact"]
    },
    email: {
        type: String,
        required: [true, "Please provide your Email"],
        unique: [True, "This Email Address has already been Registered . Please Login!!"],
    },
    driverId: {
        type: String,
        required: [true, "Please provide your Driver's ID"],
        unique: [True, "Please Provide your Unique Driver's Id . This has already been Taken "],
    },
    licenseNuber: {
        type: String,
        required: [true, "Please provide your Driving License Number "],
        unique: [True, "This Driving License  has already been Registered . Please Login!!"],
    },
    driverName: {
        type: String,
        required: [true, "Please provide your Name "],
    },

    //Schema For Buses 
    routeId: {
        type: String,
        required: [true, "Please provide your Route ID"],
        unique: [true, "Please provide a unique Route Id "],

    },

    busId: {
        type: String,
        required: [true, "Please provide your Bus ID"],
        unique: [true, "Please provide a unique Bus Id "],
    },

    speed: {
        type: Float32Array,
        required: [true, "Please provide your Bus Speed"],
    },

    busnumber: {
        type: String,
        required: [true, "Please provide your Bus Number"],
        unique: [True, 'This Bus number has already been Registered. Please Login!! ']
    },
    currentlocation: {
        type: String,
        required: [True, "Please Enter your Current Location"],

    },

    // Schema for Bus Routes 

    routeId: {
        type: String,
        required: [true, "Please enter the Route ID"],
        unique: [true, "This Route Id is Already been Registered . Please LoginIn"]
    },
    routeName: {
        type: String,
        required: [true, "Please enter the Route Name"],
    },
    startLocation: {
        type: String,
    },

    endLocation: {
        type: String,
    },
    estimatedDuration: {
        type: int,
        required: [True, 'Please Enter the estimated Duration'],
    },


    //Schema for Traffic Conditions 

    location: {
        type: String,
        
    }






})




