const Workout = require('./../models/workout');
const router = require('express').Router();

//add a new exersise and workout
router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
//add exersize to workout, put route, api/workout/:id

//push to workout id with exersize

//delete workout api.workouts

//get all workouts api/workouts

// get specific workout last 7 work outs api/workouts/range
module.exports = router;
