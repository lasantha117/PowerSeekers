const path = require("path");
const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "development") {
    const morgan = require("morgan");
    const morganBody = require("morgan-body");
    /* It's a middleware that logs all requests, including the body, to the console. */
    morganBody(app);
    app.use(morgan("combined"));
}

const authRoutes = require("./routes/auth.routes");
const morganBody = require("morgan-body");

/* A middleware that parses the body of the request and makes it available on the `req.body` property. */
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

module.exports = app;
