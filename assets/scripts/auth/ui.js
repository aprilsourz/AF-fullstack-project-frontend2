const store = require('../store.js')
const showMainPage = require('../templates/main-page.handlebars')
const api = require('./api.js')
const todo = require('../todo/ui.js')

const displayMessage = (errorText, errorPlace) => {
  $(errorPlace).text('')
  $(errorPlace).show()
  $(errorPlace).text(errorText)
  $(errorPlace).delay(3000).fadeOut()
}

const signUpSuccess = (data) => {
  displayMessage('Thank you for signing up!', $('#signup-message'))
  $('#form-signup')[0].reset()
}

const signUpFailure = (error) => {
  if (error.status === 400) {
    displayMessage('There was a problem signing up, please try again!', $('#signup-message'))
  } else {
    displayMessage('Unknown error', $('#signup-message'))
  }
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#form-signin')[0].reset()
  $('#current-page').html(showMainPage)
  $('#signout').on('click', onSignOut)
  todo.addHandlers()
}

const signInFailure = (error) => {
  if (error.status === 401) {
    displayMessage('There was a problem signing in.', $('#signin-message'))
  } else {
    displayMessage('Unknown error.', $('#signin-message'))
  }
}

const changePasswordSuccess = (data) => {
  displayMessage('You changed your password!', $('#password-error'))
  $('#change-password')[0].reset()
}

const changePasswordFailure = (error) => {
  if (error.status === 400) {
    displayMessage('Invalid password.', $('#password-error'))
  } else {
    displayMessage('Unknown error', $('#password-error'))
  }
}

const signOutSuccess = (data) => {
  console.log(data)
  console.log('You signed out!')
  store.user = null
}

const signOutFailure = () => {
  console.log('cant sign out')
}
// events

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(signOutSuccess)
    .catch(signOutFailure)
}
// handlers

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess

}
