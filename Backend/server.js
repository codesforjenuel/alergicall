const express = require('express')

const app = express()

const PORT = 3001

app.listen(PORT, () => {
    console.log(`API server running on por ${PORT}`)
})
