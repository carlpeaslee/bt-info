import express from 'express'
import bodyParser from 'body-parser'

const server = express()

server.use(bodyParser.json())

const port = process.env.PORT || 5000


server.post('/vis', (req, res) =>{
  console.log(req.body)

})




server.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`)
})
