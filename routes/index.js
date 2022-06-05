'use strict'
const { Router } = require('express');
const router = Router();
const axios = require("axios");
const parser = require('xml2js').parseString;

router.get('/', async (req, res) => {
    axios({
        method: "get",
        url: "https://api.flickr.com/services/feeds/photos_public.gne",
    }).then(response => {
        parser(response.data, (err, result) => {
            if (err) return res.status(500).send({
                status: 'error',
                result: err
            });
            res.status(200).send({
                status: 'ok',
                result
            })
        });
    });
})

module.exports = router;