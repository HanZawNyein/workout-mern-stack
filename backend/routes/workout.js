const express = require('express');
const router = express.Router();
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workOutController')

// GET all workouts
router.get('/', getWorkouts)

//GET single workout
router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router