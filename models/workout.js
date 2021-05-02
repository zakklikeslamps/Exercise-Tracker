const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                required: 'Please choose an exercise type to continue',
                trim: true
            },
            name: {
                type: String,
                required: 'Please enter the name of the exercise to continue',
                trim: true
            },
            duration: {
                type: Number,
                required: 'Please enter lenght of the exercise (minutes) to continue',
                trim: true
            },
            weight: {
                type: Number,
                required: 'Please enter your weight to continue',
                trim: true
            },
            sets: {
                type: Number,
                required: 'Please enter the number of sets to continue',
                trim: true
            },
            reps: {
                type: Number,
                required: 'Please enter the number of reps to continue',
                trim: true
            },
            distance: {
                type: Number,
                required: 'Please enter distance exercised to continue',
                trim: true
            },
        },
    ],
    day: {
        type: Date,
        default: Date.now
    },
}),

Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;