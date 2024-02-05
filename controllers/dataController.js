const moment = require('moment');
const Data = require('../model/dataModel')

// GET ALL Data

exports.getAllData = async (req, res) => {
  try {

    const type = req.params.type;
    const today = moment().startOf('day');
    const tomorrow = moment().add(1, 'day').startOf('day');
    let queryy = ''
    if (type === 'today') {
      queryy = {
        createdAt
          : { $gte: today, $lt: tomorrow }
      };
    } else if (type === 'tomorrow') {
      queryy = {
        createdAt
          : { $gte: tomorrow, $lt: moment(tomorrow).add(1, 'day') }
      };
    } else if (type === 'other') {
      queryy = {
        createdAt
          : { $gt: moment(moment().add(2, 'day').startOf('day')) }
      };
    }

    console.log("le bhaui===> ", queryy)

    const events = await Data.find(queryy)
    res.status(200).json({
      status: 'success',
      results: events.length,
      events
    })
  } catch (err) {
    console.log("le error===> ", err)
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
}

//CREATE A BOOK

exports.postData = async (req, res) => {
  try {

    const data = await Data.create(req.body)
    res.status(200).json({
      status: 'success',
      message: 'Data successfully posted',
      data
    });
  } catch (err) {
    console.error('Error posting data:', err);
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
