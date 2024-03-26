import express from "express";
import {
  getContacts,
  createContact,
  updateContact,
  getContact,
  deleteContact,
} from "../controllers/contactController.js";
const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;
