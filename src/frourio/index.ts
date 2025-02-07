import fastify from 'fastify'
import server from './$server'

server(fastify()).listen({ port: 3000 })
