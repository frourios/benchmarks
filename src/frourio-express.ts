import express from 'express'
import server from './frourio-express/$server'

const app = express()

app.disable('etag')
app.disable('x-powered-by')

server(app).listen(3000)
