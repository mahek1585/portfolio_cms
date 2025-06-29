const { getWorkList } = require("../controllers/works.controller");

const workRouter = require("express").Router();

workRouter.get("/", getWorkList);

module.exports = workRouter;
