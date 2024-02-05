const express = require('express')
const dataController = require('../controllers/dataController')

const router = express.Router()

router.get('/hii', (req, res)=>
{
  res.json({
    mess: "hello from "
  })
})

router.route('/getData/:type').get(dataController.getAllData)
router.route('/postData').post(dataController.postData);




module.exports = router;