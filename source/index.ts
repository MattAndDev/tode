import { createServer } from 'http'
import { foo } from './modules/foo'

const PORT = 4242

const server = createServer((_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(foo())
  return false
})

server.listen(PORT, '0.0.0.0', () =>
  console.log(`Foo running on port: ${PORT}`)
)
