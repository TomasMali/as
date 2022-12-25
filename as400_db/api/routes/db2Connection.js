const express = require("express");
const router = express.Router();


var ibmdb = require("ibm_db");
var connStr =
    "DATABASE=CCMCSV;HOSTNAME=10.200.100.70;UID=db2read;PWD=BuDuNVibnUcA;PORT=50000;PROTOCOL=TCPIP";



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
        console.log(category)

        sql = (user === "" ? "" : " SELECT * FROM ") + " (SELECT ID, WORK_ITEM_TYPE,(SELECT DISTINCT (NAME_COL)  FROM MODEL.CATEGORY WHERE ITEM_ID = CATEGORY_ITEM_ID) AS CATEGORIA, CREATION_DATE , MODIFIED, INTERNAL_STATE, RESOLUTION_DATE, SUMMARY,INTERNAL_SEVERITY, INTERNAL_PRIORITY , (SELECT DISTINCT(USER_COL) FROM MARKERS.MARKER WHERE MODIFIED_BY_ITEM_ID  = OWNER_ITEM_ID) AS OWNER_ITEM_ID FROM MODEL.WORK_ITEM " +
            category
            + " ORDER  BY ID DESC )" + (user === "" ? " FETCH FIRST 100 ROWS ONLY" : (" WHERE OWNER_ITEM_ID='" + req.query.user.trim() + "' FETCH FIRST 100 ROWS ONLY "))

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




router.get("/wi", async (req, res, next) => {
    ibmdb.open(connStr, function (err, conn) {
        if (err) return console.log(err);

        sql = "SELECT ID, WORK_ITEM_TYPE,(SELECT DISTINCT (NAME_COL)  FROM MODEL.CATEGORY WHERE ITEM_ID = CATEGORY_ITEM_ID) AS CATEGORIA, CREATION_DATE , MODIFIED, INTERNAL_STATE, RESOLUTION_DATE, SUMMARY,INTERNAL_SEVERITY, INTERNAL_PRIORITY , (SELECT DISTINCT(USER_COL) FROM MARKERS.MARKER WHERE MODIFIED_BY_ITEM_ID  = OWNER_ITEM_ID) AS OWNER_ITEM_ID FROM MODEL.WORK_ITEM WHERE ID =" +
            req.query.id + " FETCH FIRST ROW ONLY"

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
