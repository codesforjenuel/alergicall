const express = require('express')
const db = require('./models')
const app = express()

const PORT = 3001


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`)
})

})
