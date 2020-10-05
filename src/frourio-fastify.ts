import fastify from 'fastify'
import server from './frourio-fastify/$server'

server(fastify()).listen(3000)
