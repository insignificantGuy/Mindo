import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const diarySchema = mongoose.Schema({
    userID:{
        type:Schema.ObjectId,
        required:true
    },
    records:[
        {
            dateOfEntry:{
                type:String,
                required:true
            },
            text:{
                type:String,
                required:true
            }
        }
    ]
})

const Diary = mongoose.model('Diary', diarySchema);

export default Diary;