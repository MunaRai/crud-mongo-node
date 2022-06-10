const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    fullName: {
        required: true,
        type: String
    },
    class: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Student", studentSchema)