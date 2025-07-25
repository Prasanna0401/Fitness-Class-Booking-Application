import express from "express";
import trainerController from "../controllers/trainerController.js";
import verifyAuth from "../middlewares/verifyAuth.js";
const router = express.Router();

router.put("/createTrainerProfile", trainerController.createTrainerProfile);
router.post("/createClass", verifyAuth, trainerController.createClass);
router.put("/editClass/:classId", verifyAuth, trainerController.editClass);
router.get("/viewBookedUsers/:classId", verifyAuth, trainerController.viewBookedUsers);
router.put("/cancelClass/:classId", verifyAuth, trainerController.cancelClass);
router.get("/viewPostedClasses", verifyAuth, trainerController.viewPostedClasses);
router.get("/viewClassById/:classId", verifyAuth, trainerController.viewClassById);
router.get("/filterClasses", verifyAuth, trainerController.filterClasses);
router.get("/viewReviewsByClassId/:classId", verifyAuth, trainerController.viewReviewsByClassId);
router.get("/searchClassesByName", verifyAuth, trainerController.searchClassesByName);

export default router;