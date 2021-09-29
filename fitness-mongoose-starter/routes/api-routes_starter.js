const router = require('express').Router();
const db = require('../models');

// Use 'db.Workout' to refernce the model and use the methods provided with the model to execute database operatioms

router.post('/api/workouts', (req, res) => {

  db.Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {

  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });

});

router.get('/api/workouts', (req, res) => {

  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });

});

router.get('/api/workouts/range', (req, res) => {

  db.Workout.aggregate([
    {
      // TODO: use $addField to add 'totalDuration'
      // TODO: use $sum to create the sum for totalDuration

    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });

});

router.delete('/api/workouts', ({ body }, res) => {


  db.Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });

});

module.exports = router;
