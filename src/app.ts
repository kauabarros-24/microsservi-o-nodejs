import * as express from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']
}))

app.use(express.json())
console.log('Listennig to port:8000')

app.listen(port:8000)