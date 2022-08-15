import Story from '../models/storyModel.js';

const getStory = async(req,res)=>{

    const {ageGroup} = req.body;
    try{
        const story = await Story.find({ageGroup:ageGroup});
        if(story){
            return res.status(200).json(story);
        }
    }
    catch(err){
        return res.status(505).json(err);
    }
}

const addStory = async(req,res)=>{
    const {ageGroup,title,context,image} = req.body;
    const video = req.body.video?req.body.video:"";

    try{
        const story = await Story.create({
            age,
            title,
            context,
            image,
            video
        });
        return res.status(200).json(story);
    }
    catch(err){
        return res.status(505).json(err);
    }
}

export {getStory, addStory};