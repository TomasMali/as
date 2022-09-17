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


const config130 = {
    host: '10.200.100.130',
    user: 'andvic',
    password: 'andvic',
}

const configBertin = {
    host: '10.0.17.131',
    user: 'beradmin9',
    password: 'adminber',
}



const poolWrk = require('node-jt400').pool(configWork);
const poolNse = require('node-jt400').pool(config188);
const pool130 = require('node-jt400').pool(config130);

const poolBer = require('node-jt400').pool(configBertin);


const allPool = {
    wrk: poolWrk,
    nse: poolNse,
    as130: pool130,
    bertin: poolBer
}


module.exports = allPool