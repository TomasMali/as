// This file is for handling request
const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");

// connection route

const tab = require("./api/routes/descriptionTables");
const db2 = require("./api/routes/db2Connection");
const utilizzatori = require("./api/routes/utilizzatori");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// security
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"
    );
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, GET, DELETE");
    res.header("Accept", "application/json");
    res.header("content-type", "application/json");

    next();
});
console.log("SERVER RUNNING ON PORT 3300...")
    // just go to the ather file if you pass me ...
app.use("/files", tab);
app.use("/db2", db2);
app.use("/utilizzatori", utilizzatori)

// if the user requires a path that doesnt exsists, i throw an error
app.use((req, ser, next) => {
    const error = new Error("Not found_");
    error.status = 404;
    next(error); // forword the request throut the appication
});

// i catch it here
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

module.exports = app;
