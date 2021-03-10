const express = require('express');
const router = express.Router();
const User = require('../db/models/user');
const connectDB = require('../db/connection')

connectDB();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/insert', async function (req, res, next) {
  var user = new User({
    name: req.body.name,
    work: req.body.work,
    phone: req.body.phone,
    email: req.body.email
  })

  console.log(user)

  await user.save()
  res.redirect('/')
}, (err, req, res, next) => res.status(404).send({ error: err }))

module.exports = router;
