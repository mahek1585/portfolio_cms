const {
  getClientList,
  addClient,
  editClient,
  getClient,
  removeClient,
} = require("../controllers/clients.controller");

const clientRouter = require("express").Router();

clientRouter.route("/").get(getClientList).post(addClient);

clientRouter.route("/:id").get(getClient).put(editClient).delete(removeClient);

module.exports = clientRouter;
