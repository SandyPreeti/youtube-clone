import express from "express";
import {
  postComment,
  getAllComment,
  editComment,
  deleteComment,
} from "../controllers/comments.js";
import auth from '../middleware/auth.js';
const router = express.Router();

router.post("/post",auth, postComment);
router.get("/get", getAllComment);
router.patch("/edit/:id",auth, editComment);
router.delete("delete/:id",auth, deleteComment);

export default router;
