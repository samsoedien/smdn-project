import express, { Application, Request, Response } from 'express'


import { IProduct } from '@smdn-project/common'

const product: IProduct = {
  name: 'product'
}

console.log(product)

const app: Application = express()

app.get('/', (req: Request, res: Response) => res.send('Rest API Running.'))

export default app