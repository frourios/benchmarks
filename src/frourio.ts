import fastify from 'fastify'
import server from './frourio/$server'

server(fastify()).listen({ port: 3000 })
