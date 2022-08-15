import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const dietSchema = mongoose.Schema({
    ageCategory:{
        type:String,
        required:true
    },
    diet:{
        type : Array,
        required: true
    }
})

const Diet = mongoose.model('Diet', dietSchema);

export default Diet;