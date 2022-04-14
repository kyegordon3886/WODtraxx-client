// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const wodTraxxEvents = require('./events.js')

$(() => {
  $('#sign-up-form').on('submit', wodTraxxEvents.onSignUp)
  $('#sign-in-form').on('submit', wodTraxxEvents.onSignIn)
  $('#change-password-form').on('submit', wodTraxxEvents.onChangePassword)
  $('#sign-out-button').on('click', wodTraxxEvents.onSignOut)
  $('#add-wod').on('submit', wodTraxxEvents.onCreateWorkout)
  $('#find-wod').on('submit', wodTraxxEvents.onShowWorkout)
  $('#see-all-wods').on('click', wodTraxxEvents.onIndexWorkouts)
  $('#update-wod').on('submit', '.update-wod-list', wodTraxxEvents.onUpdateWorkout)
  $('#delete-wod').on('click', 'delete-wod-list', wodTraxxEvents.onDeleteWorkout)
 
  // $('#so-button, #change-password-form, #add-wod, #find-wod, #see-all-wods').hide()
  // $('#start-new-game').on('click', gameEvents.onStartNewGame)
  // $('.box').on('click', gameEvents.onBoxClick)
})
