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
  // $('#so-button', '#add-wod', '#find-wod', '#see-all-wods').show()
  // $('#change-password-form').show('2000')
  // $('#sign-in-form, #sign-up-form').hide('fade-out')
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
  $('#so-button, #change-password-form', '#add-wod', '#find-wod').hide()
  $('#sign-in-form, #sign-up-form').show()
}

const onSignOutFailure = function () {
  $('#user-feedback-display').html('<p>Sign out failed...</p>')
}

const onCreateWorkoutSuccess = function (response) {
  const workoutsHtml = `
                      <div>
                        <h4>New WOD Added</h4>
                        <h5>${response.workout.name}</h5>
                        <p>${response.workout.type}</p>
                        <p>${response.workout.description}</p>
                      </div>
                    `
  $('#created-wod').html(workoutsHtml)

  $('form').trigger('reset')

  $('#error-message').text('')
}

const onCreateWorkoutFailure = function () {
  $('#error-message').text('Add WOD Failed')
}

const onShowWorkoutSuccess = function (response) {
  // response.workout((workout) => {
    const workoutsHtml = `
                        <div>
                          <h5>${response.workout.name}</h5>
                          <p>${response.workout.type}</p>
                          <p>${response.workout.description}</p>

                          <button class="delete-wod-list" data-id=${response.workout._id}>Delete WOD</button>

                          <form class="update-wod-list" data-id=${response.workout._id}>
                            <button type="submit">Update WOD</button>
                            <input name="workout[name]" type="text" placeholder="WOD Name">
                            <input name="workout[type]" type="text" placeholder="WOD Type">
                            <input name="workout[description]" type="text" placeholder="Description">
                          </form>
                        </div>
                      `
    $('#found-wod').html(workoutsHtml)
  // })

  $('form').trigger('reset')
}

const onShowWorkoutFailure = function () {
  $('#error-message').text('There was an error')
}

const onIndexWorkoutsSuccess = function (response) {
  $('#created-wod').html('')
  let workoutsHtml = ''
  // use forEach to display every book
  response.workouts.forEach((workout) => {
    // booksHtml += '<li>' + book.title + '</li>'
    // booksHtml = booksHtml + '<li>' + book.title + '</li>'

    workoutsHtml += `
                      <div>
                        <h5>${workout.name}</h5>
                        <p>${workout.type}</p>
                        <p>${workout.description}</p>

                      </div>
                    `
  })

  $('#found-wod').html(workoutsHtml)
}

const onIndexWorkoutsFailure = function () {
  $('#error-message').text('There was an error')
}

const onUpdateWorkoutSuccess = function () {
  const workoutHtml = `
                      <div>
                        <p>The WOD was successfully Updated</p>
                      </div>
                    `
  $('#update-wod').html(workoutHtml)

  $('form').trigger('reset')
}

const onUpdateWorkoutFailure = function () {
  $('#error-message').text('WOD failed to update')
}

const onDeleteWorkoutSuccess = function () {
  const workoutHtml = `
                      <div>
                        <p>The WOD was deleted successfully</p>
                      </div>
                    `
  $('#delete-wod').html(workoutHtml)

  $('form').trigger('reset')
}

const onDeleteWorkoutFailure = function () {
  $('#error-message').text('There was an error')
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
  onSignOutFailure,
  onCreateWorkoutSuccess,
  onCreateWorkoutFailure,
  onShowWorkoutSuccess,
  onShowWorkoutFailure,
  onIndexWorkoutsSuccess,
  onIndexWorkoutsFailure,
  onUpdateWorkoutSuccess,
  onUpdateWorkoutFailure,
  onDeleteWorkoutSuccess,
  onDeleteWorkoutFailure
  // startNewGameSuccess,
  // updateGameSuccess,
}
