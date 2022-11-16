import express from 'express'
import { Router } from 'express'
const storage = require('../storage/items.json')

const app = express()
const route = Router()


route.get('/', (req, res) => {
    return res.json(storage)
})

app.use(route)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('Port ->' + port)
})
