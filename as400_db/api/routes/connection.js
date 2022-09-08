const configWork = {
    host: '10.200.100.160',
    user: 'WRKJEXP',
    password: 'WRKJEXP',
}

const config188 = {
    host: '10.200.100.188',
    user: 'nsetommal',
    password: 'tommal1',
}

    


const poolWrk = require('node-jt400').pool(configWork);
const poolNse = require('node-jt400').pool(config188);

const allPool = {
    wrk: poolWrk,
    nse: poolNse,


}



module.exports = allPool