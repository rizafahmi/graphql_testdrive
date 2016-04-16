require('./server.js')

import express from 'express'


let app = express()

let PORT = 3000

app.post('/graphql', (req, res) => {
  res.send('Yello!')
})

let server = app.listen(PORT, () => {
  let host = server.address().address

  let port = server.address().port


  console.log('GraphQL listening at http://%s:%s', host, port)
})
