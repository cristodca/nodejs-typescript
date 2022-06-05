const fs = require('fs')

// This functions are async
// * Estas funciones son asíncronas
fs.writeFile('./file.txt', 'Hello World', (error: NodeJS.ErrnoException) => {
  if (error) console.log(error)
  else console.log('File created successfully')
})


fs.readFile('./file.txt', (error: NodeJS.ErrnoException, data: Buffer) => {
  if (error) console.log(error)
  else {
    console.log(data.toString())
  }
})

console.log('I\'m the last line of the code')