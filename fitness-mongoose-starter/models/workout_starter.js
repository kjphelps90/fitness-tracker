const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      // For the schema of this attribute, define type and default
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      // Schema for each item in exercises array
      {
        type: {
          // TODO: For the schema of this attribute, define type and trim and required
        },
        name: {
          // TODO: For the schema of this attribute, define type and trim and required
        },
        duration: {
          // TODO: For the schema of this attribute, define type as number and its required
        },
        weight: {
          // TODO: For the schema of this attribute, define type as number
        },
        reps: {
          // TODO: For the schema of this attribute, define type as number
        },
        sets: {
          // TODO: For the schema of this attribute, define type as number
        },
        distance: {
          // TODO: For the schema of this attribute, define type as number
        },
      },
    ],
  },

);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
