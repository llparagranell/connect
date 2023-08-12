const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getuser,
  person,
  deleteUser
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", getuser);
router.get('/:email',person)
router.delete('/:email',deleteUser)

module.exports = router;
