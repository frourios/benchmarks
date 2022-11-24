import { defineController } from './$relay'

export default defineController(() => ({
  get: {
    schemas: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    },
    handler: () => ({ status: 200, body: { hello: "world" } })
  }
}))
