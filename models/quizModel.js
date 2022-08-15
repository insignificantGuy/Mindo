import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    questionText:{
        type:String,
        required:true
    },
    options:{
        type:Array,
        required:true
    },
    correctNumber:{
        type:Number,
        required:true
    },
    image:{
        type:String
    }
})

const Quiz = mongoose.model('Quiz', questionSchema);

export default Quiz;