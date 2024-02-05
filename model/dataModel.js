const mongoose= require('mongoose')

const dataSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'A candidate  name is must']
    },
    job_title:{
        type:String,
        required:[true, 'A candidate  job_title is must']
    },
    // schedule_date:{
    //     type:Date,
    //     required:[true, 'A interview  schedule on fix schedule_date']
    // },
    // schedule_time:{
    //     type:String,
    //     required:[true, 'A interview  schedule on fix schedule_time']
    // }
},{
    timestamps: true
})

const Data= mongoose.model('Data',dataSchema)

module.exports= Data