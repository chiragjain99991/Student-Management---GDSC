const mongoose = require('mongoose');


const DIVISIONS = ["a","b","c"]
const YEARS = ["FE","SE","TE","BE"]


const studentSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true
        },
        division: { 
            type: String, 
            required: true,
            enum: DIVISIONS
        },
        id: { 
            type: Number, 
            required: true 
        },
        year: { 
            type: String, 
            required: true ,
            enum:YEARS
        }
    },
    {
        timestamps: true,    
    }
);

const student = mongoose.model('Student',studentSchema);

module.exports = student;
