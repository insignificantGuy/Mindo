import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firebaseID:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type : String,
        required: true
    },
    mobileNo:{
        type : String,
        required: true
    },
    dob:{
        type :  String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

export default User;