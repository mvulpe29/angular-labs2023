import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'
import {Request, Response} from 'express'

admin.initializeApp()
const app = express()
const db = admin.database()
const cors = require('cors');
app.use(cors({origin: true}));

app.post('/review/:pizzaId', (req: Request, res: Response) => {
    const pizzaId = req.params.pizzaId
    try {

        db.ref('pizzas').child(pizzaId).child('reviews').once(
            "value", snap => {
                const length = Object.keys(snap.val()).length
                db.ref('pizzas').child(pizzaId).child('reviews').child('' + length).set(req.body).then()

            }
        ).then(() => {
            db.ref('pizzas').child(pizzaId).once(
                "value", snap => {
                    res.status(200).send(snap.val())
                }
            ).then()
        })


    } catch (error) {
        res.status(500).json(error.message)
    }
})

exports.app = functions.https.onRequest(app)