import express from "express";
import homeController from "./controllers/homeController.mjs";

const router = express.Router();

router.get("/", homeController.home);
router.get("/complete", homeController.complete);

export { router };

