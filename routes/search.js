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
        // if (result.stat === 'ok') {
        //         let allPhotos = result.photos.photo.map(photo => ({
        //             photoStaticURL: 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg',
        //             PhotoFlickrURL: 'https://www.flickr.com/photos/' + photo.owner + '/' + photo.id,
        //             photoOwnerURL: 'https://www.flickr.com/photos/' + photo.owner,
        //             photoTitle: photo.title,
        //             photoOwner: photo.owner

        //         }))
        // }
    })
})

module.exports = router;