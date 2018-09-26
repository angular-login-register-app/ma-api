/**
 *--------------------------------------------------------------------------
 * ClientController
 *--------------------------------------------------------------------------
 * @description :: API request handler
 */

const Client = require('../models/ClientModel')

module.exports = {

    /**
     * List clients
     * @param req
     * @param res
     * @returns {json}
     */
    index: async function (req, res) {
        try {
            const data = await Client.find()
            res.json({status: true, message: "List successfully", client: data})
        } catch (err) {
            res.json({status: false, message: "List failed", error: err})
        }
    },

    /**
     * Get clients
     * @param req
     * @param res
     * @returns {json}
     */
    view: async function (req, res) {
        try {
            const data = await Client.findById(req.params.id)
            res.json({status: true, message: "Get successfully", client: data})
        } catch (err) {
            res.json({status: false, message: "Get failed", error: err})
        }
    },

    /**
     * Create clients
     * @param req
     * @param res
     * @returns {json}
     */
    create: async function (req, res) {
        try {
            const data = await Client.create(req.body)
            res.json({status: true, message: "Create successfully", client: data})
        } catch (err) {
            res.json({status: false, message: "Create failed", error: err})
        }
    },


    /**
     * Update clients
     * @param req
     * @param res
     * @returns {json}
     */
    update: async function (req, res) {
        try {
            const data = await Client.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true})
            res.json({status: true, message: "Update successfully", client: data})
        } catch (err) {
            res.json({status: false, message: "Update failed", error: err})
        }
    },

    /**
     * Delete clients
     * @param req
     * @param res
     * @returns {json}
     */
    delete: async function (req, res) {
        try {
            const data = await Client.findByIdAndDelete(req.params.id)
            res.json({status: true, message: "Delete successfully", data: data})
        } catch (err) {
            res.json({status: false, message: "Delete failed", error: err})
        }
    }

}