const wodTraxxEvents = require('./events.js')

$(() => {
  $('#sign-up-form').on('submit', wodTraxxEvents.onSignUp)
  $('#sign-in-form').on('submit', wodTraxxEvents.onSignIn)
  $('#change-password-form').on('submit', wodTraxxEvents.onChangePassword)
  $('#sign-out-button').on('click', wodTraxxEvents.onSignOut)
  $('#add-wod').on('submit', wodTraxxEvents.onCreateWorkout)
  $('#find-wod').on('submit', wodTraxxEvents.onShowWorkout)
  $('#see-all-wods').on('click', wodTraxxEvents.onIndexWorkouts)
  $('#wod-feedback').on('submit', '.update-wod-list', wodTraxxEvents.onUpdateWorkout)
  $('#wod-feedback').on('click', '.delete-wod-list', wodTraxxEvents.onDeleteWorkout)
  $('#so-button, #change-password-form, #add-wod, #find-wod, #see-all-wods').hide()
})
