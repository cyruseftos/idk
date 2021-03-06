import fastify from 'fastify'
import { interfaces } from '@idk/interfaces'

const server = fastify({
    logger: true,
})

server.get('/', async (request, reply) => {
    return { hello: 'world' }
})

const start = async () => {
    try {
        await server.listen(3000)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()
