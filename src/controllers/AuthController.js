/**
 *--------------------------------------------------------------------------
 * AuthController
 *--------------------------------------------------------------------------
 * @description :: API request handler
 */

const Client = require('../models/ClientModel')
// import jwt from jsonwebtoken
const jwt = require('jsonwebtoken')

module.exports = {

    /**
     * Auth client
     * @param req
     * @param res
     * @returns {json}
     */
    auth: async function (req, res) {
        try {
            const data = await Client.findOne({'username': req.body.username})
            console.log(data)
            if (data) {

                let token = await jwt.sign({client: data}, 'secretkey')
                await data.update({token})

                let clientData = (({ first_name, last_name, email}) => ({first_name, last_name, email}))(data)

                res.json({status: true,token: token, client: clientData})

            }
            else {
                res.json({status: false, message: "Failed", error: err})
            }


        } catch (err) {
            res.json({status: false, message: "Failed", error: err})
        }
    },

    /**
     * Login client
     * @param req
     * @param res
     * @returns {json}
     */

    login: async function (req, res) {
        try {
            //authData is our authentication data which in our case is the user.
            //iat means issued at.
            jwt.verify(req.token, 'secretkey', (err, authData) => {
                if (err) {
                    res.sendStatus(403)
                } else {
                    res.json({
                        message: 'success'
                        // authData
                    })
                }
            })
        } catch (err) {
            res.json({status: false, message: "Failed", error: err})
        }
    }
}