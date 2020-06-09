const express = require("express");
const router = express.Router();

router.use('/shop', require('./shop'));
router.use('/cart', require('./cart'));


module.exports = router;

/*


router.get("/shop", async (req, res, next) => {
    console.log("shop jaja");
    let results = await shop.getItems();
    res.json(results);
  });
  
  router.get("/shop/:id", async (req, res, next) => {
    console.log("in get individual item");
    const queryObject = url.parse(req.url, true);
    let params = queryObject.path.split("/");
    let id = params[2];
  
    let results = await shop.getItem(id);
    res.json(results);
  });
  
  router.get("/shop/:id/comments", async (req, res, next) => {
    console.log("in get individual comment item");
    const queryObject = url.parse(req.url, true);
    let params = queryObject.path.split("/");
    let id = params[2];
    let results = await shop.getComments(id);
    console.log(results);
    res.json(results);
  });
  
  router.post("/shop/:id/comments", async (req, res, next) => {
    console.log("in post add comment ");
    let { username, text, rating } = req.body;
    const queryObject = url.parse(req.url, true);
    let params = queryObject.path.split("/");
    let id = params[2];
    let results = await item.addComment(id, username, text, rating);
    res.json(results);
  });
  
  router.put("/shop/:id/review", async (req, res, next) => {
    let theItem = req.body.item;
    await item.updateItemReview(theItem);
  });
  

*/