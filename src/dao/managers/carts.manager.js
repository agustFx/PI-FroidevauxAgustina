import { ManagerMongoose } from './MongooseManager.js'

export const cartsManager = new ManagerMongoose('carts', {
    id: { type: String, required: true },
    carts: { type: Number, required: true },
})