const express = require("express");
const router = express.Router();
const pool = require("./connection");





// http://localhost:3300/utilizzatori/find/?userDb=wrktommal&as=10.200.100.160&includesql=&showoccurence=&programName=GCCNT
router.get("/find", async (req, res, next) => {
    console.log("GET: " + req.query.programName + "\n");


    pool_upd = await pool(req.query.userDb, req.query.as)

    // const sql_str = "   SELECT * FROM PALSV.CAT_SORGEN cs WHERE trim(ROWCT) LIKE '%" + req.query.programName + "%'" + (req.query.includesql === 's' ? "" : " AND SRCTCT <> 'SQL'")

    // const show_only_progrm = " SELECT SRCCT , LIBRCT   FROM PALSV.CAT_SORGEN cs WHERE trim(ROWCT) LIKE '%" + req.query.programName + "%'" + (req.query.includesql === 's' ? "" : " AND SRCTCT <> 'SQL'")



    const sql = "SELECT " + (req.query.showoccurence === 's' ? "" : "DISTINCT") + "  SRCCT, LIBRCT, SRCTCT " + (req.query.showoccurence === 's' ? ",ROWCT" : "") + " FROM PALSV.CAT_SORGEN  WHERE  TRIM(ROWCT) LIKE '%" + req.query.programName.toUpperCase() + "%'  order by LIBRCT DESC"

    console.log(sql)

    pool_upd
        .query(
            sql
            // (req.query.showoccurence === 's') ? sql_str : show_only_progrm
        )
        .then((result) => {

            console.log(result)
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log("error");
            console.log(error);
        });
});
























module.exports = router;