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
  $('#so-button, #change-password-form').hide()
  // $('#start-new-game').on('click', gameEvents.onStartNewGame)
  // $('.box').on('click', gameEvents.onBoxClick)
})
