const express = require('express');
const router = express.Router();

// Item Model | Item Name
const Item = require('../../models/Item');

// @route   Get api/items
// @desc    Get All Items
// @access  Public
// represent as 'routes/api/items.js' or 'api/items' this endpoints
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })// -1 is descending
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
// represent as 'routes/api/items.js' or 'api/items' this endpoints
router.post('/', (req, res) => {
    const newItem =  new Item({//// Item Model | Item Name
        name: req.body.name
    });

    //save to db
    newItem.save()
        .then(item => res.json(item));

});//router

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
// represent as 'routes/api/items.js' or 'api/items' this endpoints
router.delete('/:id', (req, res) => {

    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));

});//router


module.exports = router;