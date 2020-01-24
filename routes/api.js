const Workout = require('./../models/workout');
const router = require('express').Router();

//add a new exersise and workout

router.post('/api/workouts', ({ body }, res) => {
  const workout = new Workout(body);
  Workout.create(workout)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.get('/api/workouts', ({ body }, res) => {
//   const workout = new Workout(body);
//   Workout.create(workout)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.get('/api/workouts', (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//add exersize to workout, put route, api/workout/:id

router.put('/api/workouts/:id', (req, res) => {
  Workout.update(
    {
      _id: req.params.id
    },
    {
      $set: {}
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

//push to workout id with exersize

//delete workout api.workouts

//get all workouts api/workouts

// get specific workout last 7 work outs api/workouts/range
module.exports = router;
