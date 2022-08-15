import express from 'express';
const router = express.Router();
import { getStory, addStory} from '../controllers/storyController.js';

router.route("/getStory").get(getStory);
router.post("/addStory",addStory);

export default router