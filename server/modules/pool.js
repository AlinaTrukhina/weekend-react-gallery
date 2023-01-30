// allows us to connect the node module for postgress
const pg = require('pg');

// sets up pg to connect to the database
const Pool = pg.Pool;

// When our app is deployed to the internet 
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

// this function constructs new object pool
const pool = new Pool({
    database: 'react_gallery',
    host: 'localhost', // look for database on our local server
    port: 5432, 
    // max: 20 // don't allow more than 20 connections 
});

// set up error listener for potential troubleshooting
pool.on('error', (error) => {
    console.error('database error', error);
});

module.exports = pool; // allows other files to use 'pool' (like the router)