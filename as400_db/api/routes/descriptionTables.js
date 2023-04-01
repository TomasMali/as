const express = require("express");
const router = express.Router();
const pool = require("./connection");




// {
//     "ip": "10.200.100.160",
//     "userDb": "wrktommal",
//     "passwordDb": "tommal"
// }
router.post('/insertConnection', async (req, res, next) => {

    const ip = req.body.ip;
    const userDb = req.body.userDb
    const password = req.body.passwordDb


    const config = {
        host: ip,
        user: userDb,
        password: password,
    }
    const poolTestConnection = require('node-jt400').pool(config);
    const connectionTest = "SELECT * FROM QSYS2.SYSTABLES WHERE SYSTEM_TABLE_SCHEMA = 'QTEMP' LIMIT 1"

    poolTestConnection
        .query(connectionTest)
        .then(async resultConnection => {

            pool_upd = await pool("fake", "fake")

            pool_upd
                .insertAndGetId('INSERT INTO WRKTOMMAL.DB_IPS (CLIEIP, USERDB, PASSDB) VALUES(?,?,?)', [ip, userDb, password])
                .then(result => {
                    console.log('Inserted new row with id ' + result);
        
                    res.status(200).json({
                        "message": "La connessione è stata inserita con successo"
                    });
                })
                .catch(error => {
                    res.status(403).json({
                        "error": "Connessione esiste già"
                    });
                })
        })
        .catch(error => {
            console.log('error: Connection does not exists for: ' +  ip + " User: " + userDb);

            res.status(404).json({
                "error": "La connessione non esiste. Attenzione a non bloccare l'utente dopo 3 tentativi!"
            })
        });


})


/**
 * Gets all the dances
 */
// http://localhost:3300/files/all/?library=WRKTOMMAL&tablename=DB_IPS&as=10.200.100.160
router.get("/all", async (req, res, next) => {
    console.log("GET: " + req.query.library + "\n");
    console.log("GET: " + req.query.tablename + "\n");

    pool_upd = await pool(req.query.userDb, req.query.as)

    const sql_str = "SELECT * FROM " +
        req.query.library.toUpperCase().trim() +
        "." +
        req.query.tablename.toUpperCase().trim() +
        " LIMIT 500"

    pool_upd
        .query(
            sql_str
        )
        .then((result) => {
            console.log("Okkkkkkkkkkkkk")
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log("error");
            console.log(error);
        });
});

http://localhost:3300/files/getIps/?library=WRKTOMMAL
router.get("/getIps", async (req, res, next) => {
    console.log("GET: " + req.query.library + "\n");

    // const ipAddress = req.socket.remoteAddress;
console.log( req.socket.remoteAddress)

    

    pool_upd = await pool("fake", "fake")

    const sql_str = "SELECT USERDB, CLIEIP FROM WRKTOMMAL.DB_IPS "

    pool_upd
        .query(
            sql_str
        )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log("error");
            console.log(error);
        });
});





/**
 * Gets all the dances  @used
 */
// http://localhost:3300/files/?library=WRKTOMMAL&tablename=role_user
router.get("/", async (req, res, next) => {

    pool_upd = await pool(req.query.userDb, req.query.as)

    console.log("GET: " + req.query.str + "\n");
    if (req.query.str.toUpperCase().includes('DELETE') || req.query.str.toUpperCase().includes('UPDATE') || req.query.str.toUpperCase().includes('DROP')) {
        res.status(500).json({
            "message": "Operazione non permessa!"
        })
        return
    }

    pool_upd
        .query(
            req.query.str
        )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            //    console.log(error);
            res.status(500).json({ error: error });
        });
});


// SELECT * FROM QSYS2.SYSCOLUMNS WHERE  TABLE_SCHEMA = 'WRK90MUL' AND TABLE_NAME = 'GCMOV00F'
// http://localhost:3300/files/PRTFFLD1/?library=WRK90MUL&tablename=gcpro00f
router.get("/PRTFFLD1", async (req, res, next) => {
    var q = req.query;
    pool_upd = await pool(req.query.userDb, req.query.as)

    console.log("GET: " + q.library + "\n");
    console.log("GET: " + q.tablename.toUpperCase() + "\n");
    pool_upd
        .query(
            "SELECT	c.ordinal_position,	c.column_name, c.table_schema,	c.table_name,	k.ordinal_position AS key_column,	k.asc_or_desc AS key_order,	c.data_type,	c.length,	c.numeric_scale,	c.is_nullable,	c.column_text,	c.COLUMN_DEFAULT FROM	qsys2.syscolumns c JOIN qsys2.systables t ON	c.table_schema = t.table_schema	AND c.table_name = t.table_name LEFT OUTER JOIN sysibm.sqlstatistics k ON	c.table_schema = k.table_schem	AND c.table_name = k.table_name	AND c.table_name = k.index_name	AND c.column_name = k.column_name WHERE	c.table_schema = ?	AND c.table_name = ? ORDER BY ORDINAL_POSITION", [q.library.toUpperCase(), q.tablename.toUpperCase()]
        )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});

// SELECT * FROM QSYS2.SYSCOLUMNS WHERE  TABLE_SCHEMA = 'WRK90MUL' AND TABLE_NAME = 'GCMOV00F'
// http://localhost:3300/files/PRTFFLD_SMART/?search_word=CDCNCN&user=WRKTOMMAL

// @used
router.get("/PRTFFLD_SMART", async (req, res, next) => {
    var q = req.query;
    var all = q.all === 'all' ? true : false
    var seachFile = q.searchFile == 'true' ? true : false
    // console.log("GET: " + q.search_word.toUpperCase() + "\n");

    var wordArr = q.search_word.toUpperCase().trim().split(" ")
    var completeWord = ""

    wordArr.forEach(element => {
        completeWord += ("%" + element.trim())
    });

    completeWord += "%"
    // console.log(completeWord)

    pool_upd = await pool("fail", "fail")

    pool_upd
        .query("SELECT * FROM WRKTOMMAL.DB_HELPER WHERE LIBDAT = ? AND ip = ? ", [
            q.user.toUpperCase(), q.as
        ])
        .then(async (result) => {

            var str = ""

            if (result.length > 0)
                str =
                    " c.table_schema in ('" +
                    result[0].PREFL1.trim() +
                    "', '" +
                    result[0].PREFL2.trim() +
                    "', '" +
                    result[0].PREFL3.trim() +
                    "','" +
                    result[0].PREFL4.trim() +
                    "', '" +
                    result[0].PREFL5.trim() +
                    "') AND ";


            final_sql = "SELECT	c.ordinal_position,	c.column_name,	k.ordinal_position AS key_column,	k.asc_or_desc AS key_order,	c.data_type,	c.length,	c.numeric_scale,	c.is_nullable,	c.column_text,	c.COLUMN_DEFAULT,	c.table_schema,	c.table_name FROM	qsys2.syscolumns c JOIN qsys2.systables t ON c.table_schema = t.table_schema AND c.table_name = t.table_name LEFT OUTER JOIN sysibm.sqlstatistics k ON	c.table_schema = k.table_schem	AND c.table_name = k.table_name	AND c.table_name = k.index_name	AND c.column_name = k.column_name WHERE  " +
                (!all && (result.length > 0) ?
                    str :
                    "") +
                "(c.column_name LIKE '" +
                completeWord +
                "' OR 	UPPER(c.column_text) LIKE '" +
                completeWord +
                "') ORDER BY	c.table_schema,	c.table_name, ORDINAL_POSITION "


            // Richerca solo per colonne
            if (!seachFile) {
                pool_upd = await pool(req.query.userDb, req.query.as)
                pool_upd
                    .query(
                        "SELECT	c.ordinal_position,	c.column_name,	k.ordinal_position AS key_column,	k.asc_or_desc AS key_order,	c.data_type,	c.length,	c.numeric_scale,	c.is_nullable,	c.column_text,	c.COLUMN_DEFAULT,	c.table_schema,	c.table_name FROM	qsys2.syscolumns c JOIN qsys2.systables t ON c.table_schema = t.table_schema AND c.table_name = t.table_name LEFT OUTER JOIN sysibm.sqlstatistics k ON	c.table_schema = k.table_schem	AND c.table_name = k.table_name	AND c.table_name = k.index_name	AND c.column_name = k.column_name WHERE  " +
                        (!all && (result.length > 0) ?
                            str :
                            "") +
                        "(c.column_name LIKE '" +
                        completeWord +
                        "' OR 	UPPER(c.column_text) LIKE '" +
                        completeWord +
                        "') ORDER BY	c.table_schema,	c.table_name, ORDINAL_POSITION ", []
                    )
                    .then((result) => {
                        res.status(200).json(result);
                    })
                    .catch((error) => {
                        res.status(404);
                        console.log("error");
                        console.log(error);
                    });
            }
            else {
                pool_upd = await pool(req.query.userDb, req.query.as)
                // Richerca per file
                sqlFiles_2 = "   SELECT TABLE_SCHEMA, TABLE_NAME, TABLE_TEXT ,TABLE_DEFINER FROM QSYS2.SYSTABLES WHERE UPPER(TABLE_NAME) LIKE '" + completeWord + "'  OR UPPER(TABLE_TEXT) LIKE '" + completeWord + "'"
                pool_upd
                    .query(
                        sqlFiles_2, []
                    )
                    .then((result_2) => {
                        console.log("Otiimo")
                        res.status(200).json(result_2);
                    })
                    .catch((error) => {
                        res.status(404);
                        console.log("error");
                        console.log(error);
                    });

            }
            //  res.status(200).json(result);
        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});

//SELECT DISTINCT(TABLE_SCHEMA) FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA LIKE '%%'
//http://localhost:3000/files/SCHEMA/?library=WRK
router.get("/SCHEMA", async (req, res, next) => {
    var q = req.query;

    pool_upd = await pool(req.query.userDb, req.query.as)
    console.log("#####################: " + req.query.as + "\n");

    pool_upd
        .query(
            "SELECT DISTINCT(TABLE_SCHEMA) FROM QSYS2.SYSTABLES s WHERE TABLE_SCHEMA LIKE '%" +
            q.library.toUpperCase() +
            "%'"
        )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});





/**
 * 
 */
router.get("/getUserNote", async (req, res, next) => {

    let username = req.query.username

    pool_upd = await pool("fake", "fake")

    const sql_str = "SELECT CONTENT FROM WRKTOMMAL.QUILL WHERE USERNAME = '" + username + "'"

    pool_upd
        .query(
            sql_str
        )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log("error");
            console.log(error);
        });
});


/**
 * http://10.100.0.30:3300/files/inserOrUpdateNotes
 * Notes
 */
router.post("/inserOrUpdateNotes", async (req, res, next) => {

    var username = req.body.username
    var content =  req.body.content

    console.log(username)

    pool_upd = await pool("fake", "fake")

    pool_upd
        .query(
            "SELECT USERNAME FROM WRKTOMMAL.QUILL WHERE USERNAME = '" +
            username.toUpperCase() + "'"
        )
        .then(async (result) => {
            var sql = "INSERT INTO WRKTOMMAL.QUILL VALUES('" + username.toUpperCase() + "','" + content + "'"
            if (result.length > 0) {
              //  sql = "UPDATE WRKTOMMAL.QUILL SET CONTENT = '" + content + "' WHERE USERNAME = '" +  username.toUpperCase() + "'"
                pool_upd = await pool("fake", "fake")
                pool_upd
                  .update('UPDATE WRKTOMMAL.QUILL SET CONTENT=? WHERE USERNAME=?', [content, username.toUpperCase()])
                    .then((result) => {
                        res.status(200).json(result);
                    })
                    .catch((error) => {
                        res.status(404);
                        console.log("error");
                        console.log(error);
                    });
            }
            else {
                pool_upd = await pool("fake", "fake")
                pool_upd
                .insertAndGetId('INSERT INTO WRKTOMMAL.QUILL VALUES(?,?)', [username.toUpperCase(), content])
                .then((result_all) => {
                        res.status(200).json(result_all);
                    })
                    .catch((error) => {
                        res.status(404);
                        console.log("error");
                        console.log(error);
                    });
            }

        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});




//SELECT DISTINCT(TABLE_SCHEMA) FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA LIKE '%%'
//http://localhost:3000/files/SCHEMA/?library=WRK
router.get("/inserOrUpdatePref", async (req, res, next) => {
    var q = req.query;

    pool_upd = await pool("fake", "fake")

    pool_upd
        .query(
            "SELECT * FROM WRKTOMMAL.DB_HELPER WHERE LIBDAT = '" +
            q.libdat.toUpperCase() +
            "' AND ip='" + q.as + "'"
        )
        .then(async (result) => {
            var sql = "INSERT INTO WRKTOMMAL.DB_HELPER VALUES('" + q.libdat.toUpperCase() + "','" + q.PREFL1.toUpperCase() + "', '" + q.PREFL2.toUpperCase() +
                "', '" + q.PREFL3.toUpperCase() + "', '" + q.PREFL4.toUpperCase() + "', '" + q.PREFL5.toUpperCase() + "', 'no', '" + q.as + "') "

            if (result.length > 0) {
                sql = "UPDATE WRKTOMMAL.DB_HELPER SET PREFL1 = '" + q.PREFL1.toUpperCase() + "', PREFL2 = '" + q.PREFL2.toUpperCase() +
                    "', PREFL3 = '" + q.PREFL3.toUpperCase() + "', PREFL4 = '" + q.PREFL4.toUpperCase() + "', PREFL5 = '" + q.PREFL5.toUpperCase() + "' WHERE LIBDAT = '" +
                    q.libdat.toUpperCase() +
                    "' AND ip = '" + q.as + "'"
            }
            pool_upd = await pool("fake", "fake")
            pool_upd
                .update(
                    sql, []
                )
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(404);
                    console.log("error");
                    console.log(error);
                });

        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});





router.get("/selectUserQuery", async (req, res, next) => {
    var q = req.query;

    console.log("GET: " + q.libdat.toUpperCase() + "\n");

    pool_upd = await pool("fake", "fake")
    pool_upd
        .query(
            "SELECT * FROM WRKTOMMAL.DB_QUERIES WHERE LIBDAT = '" +
            q.libdat.toUpperCase() +
            "' AND ip = '" + q.as + "'"
        )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});




//SELECT DISTINCT(TABLE_SCHEMA) FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA LIKE '%%'
//http://localhost:3300/files/inserOrUpdateUserQuery/?libdat=WRKTOMMAL&title=miotitolo&sqlstr=select * from WRKTOMMAL.db_helper&note=mia nota
router.get("/inserOrUpdateUserQuery", async (req, res, next) => {
    var q = req.query;

    pool_upd = await pool("fake", "fake")
    pool_upd
        .query(
            "SELECT * FROM WRKTOMMAL.DB_QUERIES WHERE LIBDAT = '" +
            q.libdat.toUpperCase() +
            "' AND TITLE='" + q.title + "'"
        )
        .then(async (result) => {
            var sql = "INSERT INTO WRKTOMMAL.DB_QUERIES VALUES('" + q.libdat.toUpperCase() + "','" + q.title + "', '" + q.sqlstr.replace(new RegExp("'", 'g'), "`") +
                "', '" + q.note + "' , 'N', 'no', '" + q.as + "')"

            if (result.length > 0) {
                sql = "UPDATE WRKTOMMAL.DB_QUERIES SET SQLSTR = '" + q.sqlstr.replace(new RegExp("'", 'g'), "`") + "', TITLE = '" + q.title +
                    "', NOTE = '" + q.note + "' WHERE LIBDAT = '" +
                    q.libdat.toUpperCase() +
                    "' AND TITLE='" + q.title + "' AND ip='" + q.as + "'"

                console.log(q.sqlst)
            }

            pool_upd = await pool("fake", "fake")
            pool_upd
                .update(
                    sql, []
                )
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(404);
                    console.log("error");
                    console.log(error);
                });

        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});


router.get("/deleteUserQuery", async (req, res, next) => {
    var q = req.query;

    console.log("GET: " + q.libdat.toUpperCase() + "\n");

    pool_upd = await pool("fake", "fake")
    pool_upd
        .update('DELETE FROM WRKTOMMAL.DB_QUERIES WHERE LIBDAT=? AND TITLE = ? AND ip = ?', [q.libdat.toUpperCase(), q.title, q.as])
        .then(nUpdated => {
            console.log('Deleted ' + nUpdated + ' rows');
            res.status(200).json(nUpdated);
        });


});




router.get("/updateStatusPref", async (req, res, next) => {
    var q = req.query;

    console.log("PREF: " + q.pref.toUpperCase() + "\n");
    console.log("LIBDAT: " + q.libdat.toUpperCase() + "\n");

    console.log("TITLE: " + q.title + "\n");

    console.log("ip: " + q.as + "\n");


    pool_upd = await pool("fake", "fake")
    pool_upd
        .update('UPDATE WRKTOMMAL.DB_QUERIES SET PREF = ? WHERE LIBDAT=? AND TITLE = ? AND ip = ?', [q.pref.toUpperCase(), q.libdat.toUpperCase(), q.title, q.as])
        .then(nUpdated => {
            console.log('UPDATED ' + nUpdated + ' rows');
            res.status(200).json(nUpdated);
        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });


});


//SELECT * FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA='WRKTOMMAL'
//http://10.100.0.30:3300/files/FILENAMES/?library=WRKTOMMAL
router.get("/FILENAMES", async (req, res, next) => {
    var q = req.query;

    console.log(req.query.as)

    pool_upd = await pool(req.query.userDb, req.query.as)

    //  console.log("GET: " + q.library.toUpperCase() + "\n");
    pool_upd
        .query(
            "SELECT TABLE_NAME, TABLE_TEXT FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA='" +
            ("" + q.library).toUpperCase().trim() +
            "'"
        )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});

//SELECT * FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA='WRKTOMMAL'
//http://10.100.0.30:3300/files/USERPREF/?user=WRKTOMMAL
router.get("/USERPREF", async (req, res, next) => {
    var q = req.query;

    console.log("GET: " + q.user.toUpperCase() + "\n");
    pool_upd = await pool("fake", "fake")
    pool_upd
        .query(
            "SELECT * FROM WRKTOMMAL.DB_HELPER WHERE LIBDAT='" +
            q.user.toUpperCase().trim() +
            "' AND ip='" + q.as + "'"
        )
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(404);
            console.log("error");
            console.log(error);
        });
});

module.exports = router;