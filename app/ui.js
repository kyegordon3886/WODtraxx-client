const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#user-feedback-display').html(
    '<p>You signed up successfully! Go ahead and sign in to your account!</p>'
  )
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#user-feedback-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#user-feedback-display').html('<p>You are signed in!</p>').show()
  $('form').trigger('reset')
  $('#so-button').show('fade-in')
  $('#change-password-form').show('2000')
  $('#sign-in-form, #sign-up-form').hide('fade-out')
  store.user = response.user
}

const onSignInFailure = function () {
  $('#user-feedback-display').html('<p>Incorrect username or password</p>')
}

const onChangePasswordSuccess = function () {
  $('#user-feedback-display').html(
    '<p>Your password has been updated successfully!</p>'
  )

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#user-feedback-display').html('<p>Password change failed</p>')
}

const onSignOutSuccess = function () {
  $('#user-feedback-display').html('<p>Stay Hard!</p>').show()
  $('#so-button, #change-password-form').hide()
  $('#sign-in-form, #sign-up-form').show()
}

const onSignOutFailure = function () {
  $('#user-feedback-display').html('<p>Sign out failed...</p>')
}

// const startNewGameSuccess = function (response) {
// 	$('#game-board').show('fade-in')
// 	$('#game-display').hide(2000)

// 	console.log('New game start works')
// 	store.game = response.game
// 	console.log(store.game)
// 	$('.box').empty()
// 	$('.box').on('click')
// }

// const updateGameSuccess = function (response) {
// 	store.game = response.game
// 	console.log(store.game)
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
  // startNewGameSuccess,
  // updateGameSuccess,
}
