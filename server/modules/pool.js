// allows us to connect the node module for postgress
const pg = require('pg');

// sets up pg to connect to the database
const Pool = pg.Pool;

// this function constructs new object pool
const pool = new Pool({
    database: 'react-database',
    host: 'localhost', // look for database on our local server
    port: 5432, 
    max: 20 // don't allow more than 20 connections 
});

// set up error listener for potential troubleshooting
pool.on('error', (error) => {
    console.error('database error', error);
});

module.export = pool; // allows other files to use 'pool' (like the router)