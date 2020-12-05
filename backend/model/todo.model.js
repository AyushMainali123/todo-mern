let mongoose = require('mongoose')

let Schema = mongoose.Schema

let exerciseSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        // required: true
    }
}, {
    timestamps: true
})

let Todo = mongoose.model("Todo", exerciseSchema)

module.exports = Todo


