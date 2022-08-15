import Diary from '../models/diaryModel.js';

const getDiaryLogs = async(req,res)=>{
    const {userID} = req.body;

    try{
        const diaryLogs = await Diary.findByID(userID);
        return res.status(200).json(diaryLogs);
    }
    catch(err){
        return res.status(505).json(err);
    }
}

const addDiaryLogs = async(req,res)=>{
    const {userID, dateofEntry, text} = req.body;

    try{
        const diaryLogs = await Diary.findByID(userID);
        if(diaryLogs){
            diaryLogs.records.push({
                dateofEntry:dateofEntry,
                text:text
            });
            return res.status(200).json(diaryLogs);
        }
        else{
            const diaryLogs = await Diary.create({
                userID,
                records : [
                    {
                        dateofEntry:dateofEntry,
                        text:text
                    }
                ]
            });
            return res.status(200).json(diaryLogs);
        }
    }
    catch(err){
        return res.status(505).json(err);
    }
}

export {getDiaryLogs, addDiaryLogs};