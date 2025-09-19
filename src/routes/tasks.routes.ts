import { Router } from "express";
import { getAllTasks, createTask, updateTask, deleteTask } from "../controllers/task.controllers";

const router = Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
