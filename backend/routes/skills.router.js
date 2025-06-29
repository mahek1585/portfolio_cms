const { getSkillList } = require("../controllers/skill.controller");

const skillRouter = require("express").Router();

skillRouter.get("/", getSkillList);

module.exports = skillRouter;


