const express = require("express");
const router = express.Router();
const request = require('request');


var ibmdb = require("ibm_db");
var connStr =
    "DATABASE=CCMCSV;HOSTNAME=10.200.100.70;UID=db2read;PWD=BuDuNVibnUcA;PORT=50000;PROTOCOL=TCPIP";



require("dotenv").config()
const { Configuration, OpenAIApi } = require("openai")


const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
})


const openai = new OpenAIApi(configuration)


router.post("/openai", async (req, res, next) => {

    try {
        const question = req.body.question;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${question}`,
            temperature: 0, // Higher values means the model will take more risks.
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
            top_p: 1, // alternative to sampling with temperature, called nucleus sampling
            frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
            presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        });
        // console.log(response.data);
        res.status(200).send({
            bot: response.data.choices[0].text,
        });
    } catch (error) {
        // console.error(error);
        res.status(500).send(error || "Something went wrong");
    }
});

const axios = require('axios');


router.get("/log", async (req, res, next) => {
    // try {
    //     request.get(process.env.BOT_ENDPOINT + req.query.log, (err, res, body) => {
    //         if (err) { return console.log(err); }
    //         return res.send("hi")
    //         //  console.log(body);

    //     });

    // } catch (error) {
    //     // console.error(error);
    //     res.status(500).send(error || "Something went wrong");
    // }


    axios.get(process.env.BOT_ENDPOINT + req.query.log)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });

});




/**
 * Gets all the category
 */
// http://localhost:3300/files/all/?library=WRKTOMMAL&tablename=DB_IPS&as=10.200.100.160
router.get("/category", async (req, res, next) => {
    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(
            "SELECT DISTINCT NAME_COL, ITEM_ID FROM MODEL.CATEGORY ORDER BY NAME_COL ASC",
            function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(404).json(err);
                }
                //else console.log(data);
                conn.close(function () {
                    res.status(200).json(data);
                    console.log("done");
                });
            }
        );
    });
});

/**
 * Gets all the category
 */
// http://localhost:3300/files/all/?library=WRKTOMMAL&tablename=DB_IPS&as=10.200.100.160
router.get("/usernames", async (req, res, next) => {
    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        conn.query(
            "SELECT DISTINCT USER_COL FROM MARKERS.MARKER",
            function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(404).json(err);
                }
                //else console.log(data);

                conn.close(function () {
                    res.status(200).json(data);
                    console.log("done");
                });
            }
        );
    });
});

/**
 * Gets all the WI
 */
// http://localhost:3300/db2/wis/?category=_9vE4MN2YEeaKeZ4kM0Wuvw&user=tommal
router.get("/wis", async (req, res, next) => {
    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        user = req.query.user

        resolted = req.query.resolved

        var category = ""
        where = " WHERE CATEGORY_ITEM_ID IN("
        if (req.query.category != "") {

            req.query.category.split(",").forEach(element => {
                category += "'" + element + "',"
            });
            if (category != "") {
                category = where + category
                category = category.slice(0, -1)
                category += ") "
            }
        }


        var users = ""
        if (user != "") {

            user.split(",").forEach(element => {
                users += "'" + element + "',"
            });
            if (users != "") {
                users = users.slice(0, -1)

                users = " WHERE OWNER_ITEM_ID IN(" + users + ") "
            }
        }
        var noFilter = ""
        if (req.query.category == "" && user == "")
            noFilter = " FETCH FIRST 19 ROWS ONLY "

        var resoltedCondition = ""

        console.log(resolted)

        if (resolted != "") {
            if (category != "")
                resoltedCondition = " AND TRIM(RESOLUTION_DATE) IS  NULL "
            else
                resoltedCondition = " WHERE TRIM(RESOLUTION_DATE) IS  NULL "
        }


        console.log(category)

        sql = (user === "" ? "" : " SELECT * FROM ") + " (SELECT ID, WORK_ITEM_TYPE,(SELECT DISTINCT (NAME_COL)  FROM MODEL.CATEGORY WHERE ITEM_ID = CATEGORY_ITEM_ID) AS CATEGORIA, CREATION_DATE , MODIFIED, INTERNAL_STATE, RESOLUTION_DATE, SUMMARY,INTERNAL_SEVERITY, INTERNAL_PRIORITY , (SELECT DISTINCT(USER_COL) FROM MARKERS.MARKER WHERE MODIFIED_BY_ITEM_ID  = OWNER_ITEM_ID) AS OWNER_ITEM_ID FROM MODEL.WORK_ITEM " +
            category + resoltedCondition
            + " ORDER  BY ID DESC ) " + users + noFilter

        console.log("\n" + sql + "\n");

        conn.query(
            sql,
            function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(404).json(err);
                }

                conn.close(function () {

                    res.status(200).json(data);

                });
            }
        );
    });
});

function isNumeric(str) {
    if (typeof str != "string") return false; // we only process strings!
    return (
      !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
  }


router.get("/wi", async (req, res, next) => {
    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        const id = req.query.id.toString().trim();
 console.log(id)

        // sql = "SELECT ID, WORK_ITEM_TYPE,(SELECT DISTINCT (NAME_COL)  FROM MODEL.CATEGORY WHERE ITEM_ID = CATEGORY_ITEM_ID) AS CATEGORIA, CREATION_DATE , MODIFIED, INTERNAL_STATE, RESOLUTION_DATE, SUMMARY,INTERNAL_SEVERITY, INTERNAL_PRIORITY , (SELECT DISTINCT(USER_COL) FROM MARKERS.MARKER WHERE MODIFIED_BY_ITEM_ID  = OWNER_ITEM_ID) AS OWNER_ITEM_ID FROM MODEL.WORK_ITEM WHERE ID =" +
        //     req.query.id + " FETCH FIRST ROW ONLY"
        var sql = ""
        if (isNumeric(id))
            sql = "SELECT ID, WORK_ITEM_TYPE,(SELECT DISTINCT (NAME_COL)  FROM MODEL.CATEGORY WHERE ITEM_ID = CATEGORY_ITEM_ID) AS CATEGORIA, CREATION_DATE , MODIFIED, INTERNAL_STATE, RESOLUTION_DATE, SUMMARY,INTERNAL_SEVERITY, INTERNAL_PRIORITY , (SELECT DISTINCT(USER_COL) FROM MARKERS.MARKER WHERE MODIFIED_BY_ITEM_ID  = OWNER_ITEM_ID) AS OWNER_ITEM_ID FROM MODEL.WORK_ITEM  WHERE ID IN(" + req.query.id.toString() + ")  ORDER  BY ID DESC "
        else 
            sql = "SELECT ID, WORK_ITEM_TYPE,(SELECT DISTINCT (NAME_COL)  FROM MODEL.CATEGORY WHERE ITEM_ID = CATEGORY_ITEM_ID) AS CATEGORIA, CREATION_DATE , MODIFIED, INTERNAL_STATE, RESOLUTION_DATE, SUMMARY,INTERNAL_SEVERITY, INTERNAL_PRIORITY , (SELECT DISTINCT(USER_COL) FROM MARKERS.MARKER WHERE MODIFIED_BY_ITEM_ID  = OWNER_ITEM_ID) AS OWNER_ITEM_ID FROM MODEL.WORK_ITEM  WHERE SUMMARY LIKE '%" +  req.query.id.toString()  +"%' ORDER  BY ID DESC "

        conn.query(
            sql,
            function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(404).json(err);
                }

                conn.close(function () {

                    res.status(200).json(data);
                    console.log("\n" + sql + "\n");
                });
            }
        );
    });
});


// 	SELECT ID, WORK_ITEM_TYPE,(SELECT DISTINCT (NAME_COL)  FROM MODEL.CATEGORY WHERE ITEM_ID = CATEGORY_ITEM_ID) AS CATEGORIA, CREATION_DATE , MODIFIED, INTERNAL_STATE, RESOLUTION_DATE, SUMMARY,INTERNAL_SEVERITY, INTERNAL_PRIORITY , (SELECT DISTINCT(USER_COL) FROM MARKERS.MARKER WHERE MODIFIED_BY_ITEM_ID  = OWNER_ITEM_ID) AS OWNER_ITEM_ID FROM MODEL.WORK_ITEM WHERE CATEGORY_ITEM_ID = '_9vE4MN2YEeaKeZ4kM0Wuvw'  AND   (TRIM(RESOLUTION_DATE) IS  NULL)  ORDER  BY CREATION_DATE DESC

module.exports = router;
