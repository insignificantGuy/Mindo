import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    ageGroup:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    context:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    video:{
        type:String
    }
})

const Story = mongoose.model('Story', storySchema);

export default Story;