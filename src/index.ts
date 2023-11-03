import express from 'express'
import productRouter from './routes/products'

const app = express()
const port = 3000

app.use('/api/products', productRouter)

app.get('/', (_, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on portt ${port}!`))
