const express = require("express");
const router = express.Router();

const User = require("../../models/User.model");
const Post = require("../../models/Post.model");

const controller = require("../../controllers/api/post.controller");

router.get("/", (req, res) => {
    
});

router.post("/", (req, res, next) => {
    req.body.postedBy = req.session.user;

    if(!req.body || !req.body.content) {
        console.log("Content param not send with request")
        return res.sendStatus(400);
    }

    Post.create(req.body)
    .then(async newPost => {
        newPost = await User.populate(newPost, { path: "postedBy" });

        res.status(200).send(newPost);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

module.exports = router;