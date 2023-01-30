const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// updated PUT route
router.put('/like/:id', (req, res) => {
    sqlParams = [req.params.id];
    sqlText = `UPDATE photos
                SET likes = likes+1
                WHERE id = $1 ;`;
    
    pool.query(sqlText, sqlParams)
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in PUT likes', error);
        res.sendStatus(500);
    })
});

// updated GET route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM photos
                        ORDER BY id
                        LIMIT 20;`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error getting photos', error);
        res.sendStatus(500);
    })
});

// route to add a photo to database
router.post('/', (req, res) => {
    const photo = req.body;
    const sqlText = `INSERT INTO photos ("path", "description", "likes")
                        VALUES ($1, $2, 0);
                        `;
    const sqlParams = [photo.path, photo.description];
    pool.query(sqlText, sqlParams)
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in POST', error);
        res.sendStatus(500);
    })
});

// route to delete photo
router.delete('/delete/:id', (req, res) => {
    sqlParams = [req.params.id];
    sqlText = `DELETE FROM photos
                WHERE id = $1 ;`;
    
    pool.query(sqlText, sqlParams)
    .then((result) => {
        res.sendStatus(204);
    })
    .catch((error) => {
        console.log('error in DELETE photo', error);
        res.sendStatus(500);
    })
});


module.exports = router;