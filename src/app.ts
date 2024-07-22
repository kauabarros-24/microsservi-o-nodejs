import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api', (req, res) => {
    res.send('Hello API')
});

app.listen(8000)
console.log('Listenig to port:8000')