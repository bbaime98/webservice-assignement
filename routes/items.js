// import required essentials
const express = require('express');
// create new router
const router = express.Router();
// create a JSON data array
const data = [
    { id: 23330, firstName: 'Bien', lastName: 'Aime', age: 24, gender: 'Male', academicYear: 2019, createdOn: new Date() },
    { id: 22220, firstName: 'Eric', lastName: 'Arthur', age: 20, gender: 'Female', academicYear: 2021, createdOn: new Date() },
];

// READ
// this api end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// READ
// this api end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE
// this api end-point add new object to item list
// that is add new object to `data` array
router.post('/', function (req, res) {
    let newItem = {
        id: req.body.id,
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        gender: req.body.gender,
        academicYear: req.body.academicYear,
        createdOn: new Date()
    };

    // push new item object to data array of items
    data.push(newItem);

    // return with status 201
    // 201 means Created. The request has been fulfilled and 
    // has resulted in one or more new resources being created. 
    res.status(201).json(newItem);
});

module.exports = router;
