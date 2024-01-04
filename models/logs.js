const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    harvestDate: { type: Date, default: Date.now },
    title: { type: String, require: true },
    entry: { type: String, require: true }, 
    shipIsBroken: { type: Boolean, timestamps: true }
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log
