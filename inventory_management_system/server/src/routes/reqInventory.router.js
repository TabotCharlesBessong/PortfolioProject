const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const {
  createReqInventory,
  getSingleRequest,
  myRequests,
  getAllRequest,
  updateRequest,
  deleteRequest,
} = require("../controller/reqInventory.controller");

const router = express.Router();

router.post("/request/new", isAuthenticatedUser, createReqInventory);
router.get("/request/:id", isAuthenticatedUser, getSingleRequest);
router.get("/request/me", isAuthenticatedUser, myRequests);
router.get("/request/all", isAuthenticatedUser, getAllRequest);
router.put("/request/:id", isAuthenticatedUser, updateRequest);
router.delete("/request/:id", isAuthenticatedUser, deleteRequest);

module.exports = router;
