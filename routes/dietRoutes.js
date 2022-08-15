import express from 'express';
const router = express.Router();
import { getDietPlan, addDietPlan} from '../controllers/dietController.js';

router.route("/getDietPlan").get(getDietPlan);
router.post("/addDietPlan",addDietPlan);

export default router