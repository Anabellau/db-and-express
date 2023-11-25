const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000;


app.use(cors())

app.get('/',(req,res) => {
    res.send()
})

app.listen(port, () => console.log(`Listening on port https://localhost:${port}`))