const { Router } = require("express");
const fetch = require("node-fetch");
const config = require("config");
const { allowCros } = require("../middleware/allowCros");
const router = Router();

const DOMAIN = config.get("apiDomain");
const PATH = config.get("apipath");
const KEY = config.get("x-api-key");

router.use(allowCros); // midlware for CORS

let cat = {};

// /api/user/   get user data
router.get("/", async (req, res) => {

  try {
    const response = await fetch(DOMAIN + PATH, {
      headers: {
        ["x-api-key"]: KEY,
      },
    });

    let result = await response.json();
    res.json({ cat : result[0] });
  } catch (e) {
    console.log(e);
  }
 
  
});



module.exports = router;
