const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const authRouter = require("./routes/auth.route");
const swaggerFile = require("./swagger-output.json");
const profileRouter = require("./routes/profile.route");
const skillRouter = require("./routes/skills.router");

 const workRouter = require("./routes/works.router");
 const clientRouter = require("./routes/clients.route");
 const queryRouter = require("./routes/query.route");
const linksRouter = require("./routes/links.route");

const app = express();
// middlwares
app.use(express.json());
app.use(cors({ origin: "*" }));
// Swagger UI route
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// routes
app.get("/check-health", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/echo", (req, res) => {
  res.status(200).json({ youSent: req.body });
});
app.use("/auth", authRouter);

// Routes
app.use("/profile", profileRouter);
app.use("/skills", skillRouter);

 app.use("/works", workRouter);
 app.use("/clients", clientRouter);
 app.use("/queries", queryRouter);
 app.use("/links", linksRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`app is running on PORT:${PORT}`);
});
module.exports = app;
