const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String
    },
    name: {
      type: String
    },
    duration: {
      type: Number
    },
    distance: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    weight: {
      type: Number
    },
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
