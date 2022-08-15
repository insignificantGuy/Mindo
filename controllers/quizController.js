import Quiz from '../models/quizModel.js';

const getQuiz = async(req,res)=>{
    const {topic} = req.body;
    try{
        const quizQuestion = await Quiz.find({topic:topic});
        return res.status(200).json(quizQuestion);
    }
    catch(err){
        return res.status(505).json(err);
    }
}

const addQuestion = async(req,res)=>{
    const {topic, questionText, options, correctNumber} = req.body;
    const imageLink = req.body.imageLink?req.body.imageLink:"";

    try{
        const question = await Quiz.create({
            questionText,
            topic,
            image,
            options,
            correctNumber
        });

        return res.status(200).json(question);
    }
    catch(err){
        return res.status(505).json(err);
    }
}

export {getQuiz, addQuestion};

