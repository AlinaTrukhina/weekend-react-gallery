const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     //console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// updated PUT route
router.put('/like/:id', (req, res) => {
    // console.log(req.params.id);
    sqlParams = [req.params.id];
    sqlText = `UPDATE photos
                SET likes = likes+1
                WHERE id = $1 ;`;
    
    pool.query(sqlText, sqlParams)
    .then((result) => {
        console.log('like counter up');
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error in PUT likes', error);
        res.sendStatus(500);
    })
});

// // GET Route
// router.get('/', (req, res) => {
//     //console.log('getting gallery items', galleryItems);
//     res.send(galleryItems);
// }); // END GET Route

// updated GET route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM photos
                        ORDER BY id
                        LIMIT 20;`;
    pool.query(sqlText)
    .then((result) => {
        console.log('sending photos from database');
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error getting photos', error);
        res.sendStatus(500);
    })
});




module.exports = router;