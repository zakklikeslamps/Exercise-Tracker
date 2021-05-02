const router = require("express").Router();
Workout = require("../models/workout.js");

//create a new workout route
router.post("../models/workout.js", ({body}, res) => {
    Workout.create({})
        .then(WorkoutDB => {
            console.log(`post: $(WorkoutDB)`)
            res.json(WorkoutDB);
        })
        .catch(err => {
            res.status(400).json(err);    
})

});
//});

//find all workouts in db route
router.get("../models/workout.js", (req, res) => {
    //agg. function
    Workout.aggregate([
        {$addFields: {
            totalDuration: { $sum: "$exercises.duration"}
        }
        }
    ])
    .then(WorkoutDB => {
        console.log(`get: ${WorkoutDB}`);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//add a workout route
router.put("/workouts/:id", ({ params, body}, res) => {
    Workout.findOneAndUpdate(
       { _id: params.id },
       { $push: { exercises: body} },
       { new: true}
    ) .then(WorkoutDB => {
        console.log(`put: ${JWorkoutDB}`)
        res.json(WorkoutDB);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

//gets past 7 workouts for stats page route
router.get("/workouts/range", (req, res) => {
    Workout.aggregate([
        {$addfields: {
            totalDuration: {$sum: "$exercises.duration"},
            totalWeight: {$sum: "$exercises.weight"}
        }
        }
    ])
    .limit(7)
    .then(WorkoutDB => {
        console.log(`range: ${WorkoutDB}`)
        res.json(WorkoutDB);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;