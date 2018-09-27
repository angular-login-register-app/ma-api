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
    email: {type: String, unique: true, required: false, trim: true},
    country: {type: String, required: false, max: 30},
    phone: {type: String, required: false, max: 30},
    username: {type: String, unique: true, trim: true, required: true, max: 30},
    password: {type: String, required: true, max: 30},
    token: {type: String}
})

// Export model
module.exports = mongoose.model('Client', ClientSchema)