const express = require('express')
const colors = require('colors')

const server = express()

server.get('/', (req: {}, res: any) => {
  res.send('<h1>Hello world using Express, Node and Typescript</h1>')
})

server.listen('3001', () => {
  console.log(colors.green('Server on port 3001'));
})