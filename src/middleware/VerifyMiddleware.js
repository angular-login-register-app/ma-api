//Verify Token ( Middleware)
module.exports = {
    /**
     * Auth Token
     * @param req
     * @param res
     * @param next
     * @returns {json}
     */
    authToken: async function verifyToken(req, res, next) {
        try { //Get auth header value
            const authHeader = req.headers['authorization']

            //Check if is bearer is undifined

            if (typeof  authHeader !== 'undefined') {

                //Set the token
                req.token = authHeader

                //Next middleware
                next()

            } else {
                // Forbidden
                res.sendStatus(403)
            }

        }
        catch (err) {
            res.json({status: false, message: "Create failed", error: err})
        }
    }

    /**
     * Check if Client Exist
     * */

}
