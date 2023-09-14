const mongoose= require("mongoose");
const validator= require("validator");

const stSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email: {
        type:String,required:true,
        unique:[true,"Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email");
            }
        }
    },
    phone: {
         type:Number,
         required:true,
         min:10,
    },
    address: {
        type:String,
        required:true
    }

})

/////////////////// make collection
const Student= new mongoose.model('Student',stSchema);

module.exports= Student;