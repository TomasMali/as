const configWork = {
    host: '10.200.100.160',
    user: 'wrktommal',
    password: 'tommal',
}



const as400 = require('node-jt400')

const poolWrk = as400.pool(configWork);



getCustomPool = function (userDb, clientIp) {



    return poolWrk.query("SELECT * FROM WRKTOMMAL.DB_IPS WHERE USERDB = ? AND CLIEIP = ? ", [
        userDb, clientIp
    ])
        .then(result => {

            if (result.length > 0) {

                return as400.pool({
                    host: result[0].CLIEIP,
                    user: result[0].USERDB,
                    password: result[0].PASSDB
                })
            }
            else return as400.pool(configWork
            )

        })



}



// const allPool = {
//     wrk: poolWrk

// }


module.exports = getCustomPool