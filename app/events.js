const wodTraxxUi = require('./ui.js')
const wodTraxxApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  wodTraxxApi
    .signUp(data)
    .then(() => wodTraxxUi.onSignUpSuccess())
    .catch(() => wodTraxxUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  wodTraxxApi
    .signIn(data)
    .then((response) => wodTraxxUi.onSignInSuccess(response))
    .catch(() => wodTraxxUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  wodTraxxApi
    .changePassword(data)
    .then(() => wodTraxxUi.onChangePasswordSuccess())
    .catch(() => wodTraxxUi.onChangePasswordFailure())
}

const onSignOut = function () {
  wodTraxxApi
    .signOut()
    .then(() => wodTraxxUi.onSignOutSuccess())
    .catch(() => wodTraxxUi.onSignOutFailure())
}

const onCreateWorkout = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  wodTraxxApi
    .createWorkout(data)
    .then((response) => wodTraxxUi.onCreateWorkoutSuccess(response))
    .catch(() => wodTraxxUi.onCreateWorkoutFailure())
}

const onShowWorkout = (event) => {
  event.preventDefault()
  // store the elements that emitted the event in a variable
  const form = event.target
  // pass the form to getFormFields and store the data an object in another variable
  const data = getFormFields(form)

  wodTraxxApi
    .showWorkout(data)
  // .then(response => console.log(response))
    .then((response) => wodTraxxUi.onShowWorkoutSuccess(response))
    .catch(() => wodTraxxUi.onShowWorkoutFailure())
}

const onIndexWorkouts = () => {
  wodTraxxApi
    .indexWorkouts()
  // JavaScript Promises
  // if the request/response is successful, run this callback
    .then((response) => wodTraxxUi.onIndexWorkoutsSuccess(response))
  // if the request/response has an error, run this callback
    .catch(() => wodTraxxUi.onIndexWorkoutsFailure())
}

const onUpdateWorkout = function (event) {
  event.preventDefault()
  const updateForm = event.target
  const workoutId = $(updateForm).data('id')
  const data = getFormFields(updateForm)

  wodTraxxApi
    .updateWorkout(data, workoutId)
    .then((response) => wodTraxxUi.onUpdateWorkoutSuccess(response))
    .catch(() => wodTraxxUi.onUpdateWorkoutFailure())
}

const onDeleteWorkout = function (event) {
  const deleteButton = event.target

  // we need to find the id of the workout
  const workoutId = $(deleteButton).data('id')
  wodTraxxApi
    .deleteWorkout(workoutId)
    .then((response) => wodTraxxUi.onDeleteWorkoutSuccess(response))
    .catch(() => wodTraxxUi.onDeleteWorkoutFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateWorkout,
  onShowWorkout,
  onIndexWorkouts,
  onUpdateWorkout,
  onDeleteWorkout
}
