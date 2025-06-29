const express = require("express");
const { getProfileData } = require("../controllers/profile.controller");

const profileRouter = express.Router();

profileRouter.get("/", getProfileData);

module.exports = profileRouter;

