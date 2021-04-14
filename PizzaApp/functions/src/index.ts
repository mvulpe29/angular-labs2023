import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'
import {Request, Response} from 'express'

admin.initializeApp()
const app = express()
const db = admin.database()
const cors = require('cors')({origin: true});

app.post('/review/:pizzaId', (req: Request, res: Response) => {
    cors(req, res, () => {
        const pizzaId = req.params.pizzaId
        try {
            db.ref('pizzas').child(pizzaId).child('reviews').push(req.body)
            res.status(200).send('yes')
        } catch (error) {
            res.status(500).json(error.message)
        }
    })
})

exports.app = functions.https.onRequest(app)