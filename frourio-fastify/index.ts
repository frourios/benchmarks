import fastify from 'fastify'
import server from './$server'

server(fastify()).listen(3000)
