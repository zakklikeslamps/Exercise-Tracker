const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                required: 'Please choose an exercise type to continue',
            },
            name: {
                type: String,
                required: 'Please enter the name of the exercise to continue',
            },
            duration: {
                type: Number,
                required: 'Please enter lenght of the exercise (minutes) to continue',
            },
            weight: {
                type: Number,
                required: 'Please enter your weight to continue',
            },
            sets: {
                type: Number,
                required: 'Please enter the number of sets to continue',
            },
            reps: {
                type: Number,
                required: 'Please enter the number of reps to continue',
            },
            sets: {
                distance: Number,
                required: 'Please enter distance exercised to continue',
            },
        },
    ],
    day: {
        type: Date,
        default: Date.now
    },
}),

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;