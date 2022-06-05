'use strict'
const { Router } = require('express');
const Flickr = require('flickr-sdk');
    // "d6cacf1b6fb71236"
const router = Router();
const flickr = new Flickr("73e32d14af055a26dc0f5b68aa5389bf");

router.post('/search', (req, res) => {
    
    
    flickr.photos.search({ text: req.body.submitSearch }).then(result => {
        res.status(200).send({
            status: 'ok',
            result,
        })
    })
})

module.exports = router;
