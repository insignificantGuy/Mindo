import express from 'express';
const router = express.Router();
import { getDiaryLogs, addDiaryLogs} from '../controllers/diaryController.js';

router.route("/getLogs").get(getDiaryLogs);
router.post("/addLogs",addDiaryLogs);

export default router