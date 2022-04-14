const store = require('./store.js')
const config = require('./config.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    // where to we get our url for this, use development url in project api
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createWorkout = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/workouts',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const showWorkout = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/workouts/' + data.workout.name
  })
}

const indexWorkouts = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/workouts'
  })
}

const updateWorkout = function (data, id) {
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/workouts/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deleteWorkout = function (id) {
  console.log(id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/workouts/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const startNewGame = function () {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/games',
//     // where to we get our url for this, use development url in project api
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {}
//   })
// }

// const updateGame = function (index, value, over) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/games/' + store.game._id,
//     // where to we get our url for this, use development url in project api
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index,
//           value
//         },
//         over
//       }
//     }
//   })
// }

module.exports = {
  signUp,
  changePassword,
  signIn,
  signOut,
  createWorkout,
  showWorkout,
  indexWorkouts,
  updateWorkout,
  deleteWorkout
  // startNewGame,
  // updateGame,
}
