const express = require("express");
const router = express.Router();
const pool = require("./connection");

// http://localhost:3300/utilizzatori/find/?userDb=wrktommal&as=10.200.100.160&includesql=&showoccurence=&programName=GCCNT
router.get("/find", async (req, res, next) => {
  console.log("GET: " + req.query.programName + "\n");

  pool_upd = await pool(req.query.userDb, req.query.as);

  // const sql_str = "   SELECT * FROM PALSV.CAT_SORGEN cs WHERE trim(ROWCT) LIKE '%" + req.query.programName + "%'" + (req.query.includesql === 's' ? "" : " AND SRCTCT <> 'SQL'")

  // const show_only_progrm = " SELECT SRCCT , LIBRCT   FROM PALSV.CAT_SORGEN cs WHERE trim(ROWCT) LIKE '%" + req.query.programName + "%'" + (req.query.includesql === 's' ? "" : " AND SRCTCT <> 'SQL'")

  const sql =
    "SELECT * FROM (SELECT " +
    (req.query.showoccurence === "s" ? "" : "DISTINCT") +
    "  SRCCT, LIBRCT, SRCTCT " +
    (req.query.showoccurence === "s" ? ",ROWCT" : "") +
    " FROM PALSV.CAT_SORGEN  WHERE  TRIM(ROWCT) LIKE 'CALLP " +
    req.query.programName.toUpperCase() +
    "%' OR TRIM(ROWCT) LIKE 'CALL " +
    req.query.programName.toUpperCase() +
    "%') C  order by LIBRCT DESC";

  console.log(sql);

  pool_upd
    .query(
      sql
      // (req.query.showoccurence === 's') ? sql_str : show_only_progrm
    )
    .then((result) => {
      //     console.log(result);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log("error");
      console.log(error);
    });
});

// http://localhost:3300/utilizzatori/getProgram/?programName=GCDEN00F&lib=PTF90MUL&filetype=QSQLSRC
router.get("/getProgram", async (req, res, next) => {
  console.log("GET: " + req.query.programName + "\n");
  console.log("GET: " + req.query.lib + "\n");
  console.log("GET: " + req.query.filetype + "\n");

  const programName = req.query.programName;
  const lib = req.query.lib;
  const filetype = req.query.filetype;

  pool_upd = await pool("WRKTOMMAL", "10.200.100.160");

  const create_alias =
    "CREATE ALIAS WRKTOMMAL." +
    programName +
    "_ALI FOR " +
    lib +
    "." +
    filetype +
    "(" +
    programName +
    ")";

  const select_alias = 'SELECT * FROM WRKTOMMAL.' + programName + '_ALI';

  const drop_alias = "DROP ALIAS WRKTOMMAL." + programName + "_ALI";

  console.log(create_alias);
  console.log(select_alias);
  console.log(drop_alias);

  const queryOptions = {
    trim: false
  };

  pool_upd
    .update(drop_alias)
    .then((result) => {
      return pool_upd
        .update(create_alias)
        .then((result) => {
          return pool_upd.query(select_alias, [], {
            trim: false
          }).then((result_final) => {
            return pool_upd.update(drop_alias).then((result) => {
              // console.log(result_final);
              res.status(200).json(result_final);
            });
          });
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    })
    .catch((error) => {
      return pool_upd
        .update(create_alias)
        .then((result) => {
          return pool_upd.query(select_alias, [], {
            trim: false
          }).then((result_final) => {
            return pool_upd.update(drop_alias).then((result) => {
              //       console.log(result_final);
              res.status(200).json(result_final);
            });
          });
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    });

  //   pool_upd
  //     .update(create_alias)
  //     .then((result) => {
  //      return pool_upd
  //         .query(select_alias)
  //         .then((result_final) => {
  //         return  pool_upd
  //             .update(drop_alias)
  //             .then((result) => {
  //               console.log(result_final);
  //               res.status(200).json(result_final);
  //             })
  //         })
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //       console.log(error);
  //     });
});

module.exports = router;
