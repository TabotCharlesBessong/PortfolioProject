const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createReqInventory,
  getSingleRequest,
  myRequests,
} = require("../controller/reqInventory.controller");

const router = express.Router();

router.post("/new", isAuthenticatedUser, createReqInventory);
router.post("/:id", isAuthenticatedUser, getSingleRequest);
router.post("/me", isAuthenticatedUser, myRequests);

module.exports = router;
