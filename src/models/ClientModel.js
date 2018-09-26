/**
 *--------------------------------------------------------------------------
 * ClientModel
 *--------------------------------------------------------------------------
 * @description :: Describe ClientModel schema
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema for ClientModel
let ClientSchema = new Schema({
    first_name: {type: String, required: true, max: 30},
    last_name: {type: String, required: true, max: 30},
    email: {type: String, required: false, max: 50},
    country: {type: String, required: false, max: 30},
    phone: {type: String, required: false, max: 30},
    username: {type: String, required: false, max: 30},
    password: {type: String, required: false, max: 30}
})

// Export model
module.exports = mongoose.model('Client', ClientSchema)