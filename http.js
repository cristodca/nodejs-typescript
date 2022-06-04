const http = require('http')
const colors = require('colors')

const handleServer = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })

  res.write('<h1>Hello world</h1>')
  res.end()
} 

const server = http.createServer(handleServer)

server.listen(3000, () => {
  console.log('Server online at port: 3000'.green)
})