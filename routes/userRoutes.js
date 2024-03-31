const express = require("express");
const { getUsers, getUser, addUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:userId", getUser);
router.post("/", addUser);
router.put("/:userId", getUsers);
router.delete("/:userId", getUsers);

module.exports = router;
