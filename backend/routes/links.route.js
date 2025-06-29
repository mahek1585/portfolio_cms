const { getLinks } = require("../controllers/links.controller");



const linksRouter = require("express").Router();

linksRouter.get("/", getLinks);

module.exports = linksRouter;




