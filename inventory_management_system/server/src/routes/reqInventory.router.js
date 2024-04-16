const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createReqInventory,
  getSingleRequest,
  myRequests,
  getAllRequest,
  updateRequest,
} = require("../controller/reqInventory.controller");

const router = express.Router();

router.post("/request/new", isAuthenticatedUser, createReqInventory);
router.post("/request/:id", isAuthenticatedUser, getSingleRequest);
router.post("/request/me", isAuthenticatedUser, myRequests);
router.post("/request/all", isAuthenticatedUser, getAllRequest);
router.post("/request/:id", isAuthenticatedUser, updateRequest);

module.exports = router;
