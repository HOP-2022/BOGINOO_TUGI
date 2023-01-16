const express = require('express')
const router = express.Router();

const {
    getLink,
    getLinks,
    createLink,
    deleteLink
} = require("../Controllers/linkController")


router 
    .get("/:id", getLink)
    .get("/", getLinks)
    .post('/', createLink)
    .delete('/:id', deleteLink)

module.exports = router;
