const express= require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
app.use(express.json())
dotenv.config({ path: './config.env' })
const dataRouter = require('./routes/dataRoutes');
require('./controllers/db')


app.use(cors());
app.options("*",cors())

app.use('/api', dataRouter)
const port = process.env.PORT || 3009
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
  })

module.exports = app
