import bodyparse from 'body-parser'
import express from 'express'
import { bodySchema } from './zod'
import { pullOne, upOne } from './helper';

const app = express()
const port = parseInt(process.env.PORT) || 3000



export default () => {
    app.use(bodyparse.json())


    app.get('/favicon.ico', (req, res) => res.status(204));


    app.post('/', async (req, res) => {
        try {
            const body = bodySchema.parse(req.body)
            const { service } = body
            await pullOne(service, process.env.PROJECT)
            await upOne(service, process.env.PROJECT)
            res.json({ service: 'Ok' })
        } catch (error) {
            console.log(error)
            console.log('Catch by me')

            res.status(400).json({})
        }

    })
    //for errors
    app.use((error, req, res, next) => {
        if (error)
            res.status(400).json({})
        else next()

    });
    //for any others path
    app.use((req, res) => {
        res.status(400).json({})
    });

    app.listen(port, () => {
        console.log('Listen on :: ', port)
    })

}