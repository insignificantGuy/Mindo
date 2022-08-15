import Diet from '../models/dietModel.js';

const getDietPlan = async(req,res)=>{
    const {ageCategory} = req.body;
    try{
        const dietPlan = await Diet.find({ageCategory:ageCategory});
        if(dietPlan){
            return res.status(200).json(dietPlan);
        }
        else{
            return res.status(404).json({});
        }
    }
    catch(err){
        return res.status(505).json(err);
    }
}

const addDietPlan = async(req,res)=>{
    const {ageCategory, diet} = req.body;

    try{
        const dietPlan = await Diet.create({
            ageCategory,
            diet
        });
        return res.status(200).json(dietPlan);
    }
    catch(err){
        return res.status(505).json(err);
    }
}

export {getDietPlan, addDietPlan};