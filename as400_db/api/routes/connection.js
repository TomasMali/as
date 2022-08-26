const config = {
    host: '10.200.100.160',
    user: 'WRKJEXP',
    password: 'WRKJEXP',
}
const pool = require('node-jt400').pool(config);



module.exports = pool