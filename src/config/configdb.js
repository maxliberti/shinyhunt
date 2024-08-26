const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "RedBush7",
    host: "localhost",
    port: 5432,
    database: "shinyhuntsimulator"
});

module.exports = pool;