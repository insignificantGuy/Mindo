import User from '../models/userModel.js';

const getUser = async(req,res)=>{
    const {firebaseID} = req.body;
    try{
        const user = await User.find({firebaseID:firebaseID});
        if(user){
            return res.status(200).json(user);
        }
        else{
            return res.status(404).json({});
        }
    }
    catch(err){
        return res.status(505).json(err);
    }
}

const registerUser = async(req,res)=>{
    const {firebaseID, name, mobileNo, dob} = req.body;

    try{
        const user = await User.create({
            firebaseID,
            name,
            mobileNo,
            dob
        });
        if(user){
            return res.status(200).json(user);
        }
    }
    catch(err){
        return res.status(505).json(err);
    }
}

export {getUser, registerUser};
