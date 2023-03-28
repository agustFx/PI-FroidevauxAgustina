import express from 'express'
import productsRouter from './routers/productsRouter.js'
import cartsRouter from './routers/cartsRouter.js'
import { PORT } from './config/servidor.js'
import mongoose from 'mongoose'
import { MONGODB_CNX_STR } from './config/mongodb.js'

export const app = express()

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

await mongoose.connect(MONGODB_CNX_STR)
app.listen(PORT, () => { console.log(`conectado a ${PORT}`) })