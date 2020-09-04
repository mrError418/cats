const { Router } = require("express");
const fetch = require('node-fetch');
const config = require("config");
const { allowCros } = require("../middleware/allowCros");
const router = Router();

const DOMAIN = config.get('apiDomain')
const PATH = config.get('apipath')
const KEY = config.get('x-api-key')

router.use(allowCros); // midlware for CORS

let cat = {};

// /api/user/   get user data
router.get("/",  (req, res) => {
    res.json({cat});
         getCat()
  // const fetch()
  
});

async function getCat(){
    const response = await fetch(DOMAIN+PATH,
        {
            headers:{
                ['x-api-key']:KEY
            }
        })

        let result = await response.json()
        cat =  result[0];
}


getCat();

module.exports = router;
