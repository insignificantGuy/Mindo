import express from 'express';
const router = express.Router();
import { getQuiz, addQuestion} from '../controllers/quizController.js';

router.route("/getQuiz").get(getQuiz);
router.post("/addQuestion",addQuestion);

export default router