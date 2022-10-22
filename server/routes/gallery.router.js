const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    //console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// updated PUT route


// // GET Route
// router.get('/', (req, res) => {
//     //console.log('getting gallery items', galleryItems);
//     res.send(galleryItems);
// }); // END GET Route

// updated GET route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM photos
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