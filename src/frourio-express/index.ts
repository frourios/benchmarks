import express from 'express'
import server from './$server'

const app = express()

app.disable('etag')
app.disable('x-powered-by')

server(app).listen(3000)
