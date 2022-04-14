const wodTraxxUi = require('./ui.js')
const wodTraxxApi = require('./api.js')
// const store = require('./store.js')
const getFormFields = require('../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Button works')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  wodTraxxApi
    .signUp(data)
    .then(() => wodTraxxUi.onSignUpSuccess())
    .catch(() => wodTraxxUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Sign in button works')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  wodTraxxApi
    .signIn(data)
    .then((response) => wodTraxxUi.onSignInSuccess(response))
    .catch(() => wodTraxxUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Password change button works')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

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
  console.log('in events.js')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

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
  console.log(data)

  wodTraxxApi
    .showWorkout(data)
    // .then(response => console.log(response))
    .then((response) => wodTraxxUi.onShowWorkoutSuccess(response))
    .catch(() => wodTraxxUi.onShowWorkoutFailure())
}

const onIndexWorkouts = () => {
  console.log('Button Works!!!!!')
  // get the books from the API
  // check the Network tab!
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
  console.log('in events.js')
  const updateForm = event.target
  const workoutId = $(updateForm).data('id')
  const data = getFormFields(updateForm)
  console.log(data)
  console.log(workoutId)

  wodTraxxApi
    .updateBook(data, workoutId)
    .then((response) => wodTraxxUi.onUpdateWorkoutSuccess(response))
    .catch(() => wodTraxxUi.onUpdateWorkoutFailure())
}

const onDeleteWorkout = function (event) {
  const deleteButton = event.target

  // we need to find the id of the workout
  const workoutId = $(deleteButton).data('id')
  console.log(workoutId)
  wodTraxxApi
    .deleteWorkout(workoutId)
    .then(response => console.log(button works))
    .then((response) => wodTraxxUi.onDeleteBookSuccess(response))
    .catch(() => wodTraxxUi.onDeleteBookFailure())
}

// const gameOver = function () {
//   $('.box').off('click')
//   store.game.over = true
//   document.getElementById('game-over').innerHTML = 'Game Over Amigos.'
// }

// const onStartNewGame = function (event) {
//   event.preventDefault()
//   $('.box').on('click', onBoxClick)
//   document.getElementById('winner').innerHTML = ' '
//   document.getElementById('game-over').innerHTML = ' '
//   $('#winner, #game-over').show()
//   board = ['', '', '', '', '', '', '', '', '']
//   store.currentPlayer = store.playerOne

//   gameApi
//     .startNewGame()
//     .then((response) => gameUi.startNewGameSuccess(response))
//     .then((response) => console.log(response))
// }

// const checkForWin = function (board) {
//   if (
//     (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
// 		(board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
// 		(board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
// 		(board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
// 		(board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
// 		(board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
// 		(board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
// 		(board[2] === 'X' && board[4] === 'X' && board[6] === 'X')
//   ) {
//     document.getElementById('winner').innerHTML = 'X wins!'
//     gameOver()
//   }
//   if (
//     (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
// 		(board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
// 		(board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
// 		(board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
// 		(board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
// 		(board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
// 		(board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
// 		(board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
//   ) {
//     document.getElementById('winner').innerHTML = 'O wins!'
//     gameOver()
//   } else if (board.every((value) => value === 'X' || value === 'O')) {
//     document.getElementById('winner').innerHTML = 'The game is a draw'
//     gameOver()
//   }
// }

// const onBoxClick = function (event) {
//   const index = event.target.getAttribute('data-cell-index')
//   // this below conditional statement is saying: start the game board at playerOne, on click, if it is playerOne = true, make it playerTwo, if not, make it playerOne
//   if (board[index] === '') {
//     board[index] = store.currentPlayer
//     $(this).text(store.currentPlayer)
//     store.currentPlayer =
// 			store.currentPlayer === store.playerOne
// 			  ? store.playerTwo
// 			  : store.playerOne
//   }

//   console.log(board)
//   console.log(store.game)
//   console.log(store.game.over)

//   gameApi
//     .updateGame(index, board[index], store.game.over)
//     .then((response) => gameUi.updateGameSuccess(response))
//   checkForWin(board)
// }

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
  //   onStartNewGame,
  //   onBoxClick,
  //   checkForWin,
  //   gameOver
}
