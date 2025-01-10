import { Router } from "express";
import { getCoinDeviation, getCoinStats } from "../controllers/stats.controller.js";

const router = Router()

router.route("/stats").get(getCoinStats)
router.route("/deviation").get(getCoinDeviation)

export default router