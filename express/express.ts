const express = require('express')
const colorsTwo = require('colors')

const serverExpress = express()

serverExpress.get('/', (req: {}, res: any) => {
  res.send('<h1>Hello world using Express, Node and Typescript</h1>')
})

serverExpress.listen('3001', () => {
  console.log(colorsTwo.green('Server on port 3001'));
})