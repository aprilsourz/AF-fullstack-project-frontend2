const store = require('../store.js')
const showMainPage = require('../templates/main-page.handlebars')
const api = require('./api.js')
const todo = require('../todo/ui.js')
const showSignIn = require('../templates/sign-in.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)
const showSignUp = require('../templates/sign-up.handlebars')
const showPasswordPage = require('../templates/change-password.handlebars')

const displayMessage = (errorText, errorPlace) => {
  $(errorPlace).text('')
  $(errorPlace).show()
  $(errorPlace).text(errorText)
  $(errorPlace).delay(3000).fadeOut()
}

const signUpSuccess = (data) => {
  $('#form-signup')[0].reset()
  $('#current-page').html(showSignIn)
  signInHandlers()
  displayMessage('Thank you for signing up!', $('#signin-message'))
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
  mainPage()
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
  store.user = null
  $('#current-page').html(showSignIn)
  signInHandlers()
}

const signOutFailure = () => {
  displayMessage('Problem signing out.', $('#signout-message'))
}

// events
const onNoAccount = () => {
  $('#current-page').html(showSignUp)
  signUpHandlers()
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(signOutSuccess)
    .catch(signOutFailure)
}

const onSignIn = (event) => {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(signInSuccess)
    .catch(signInFailure)
}

// back to sign in button
const onSignUp = (event) => {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(signUpSuccess)
    .catch(signUpFailure)
}

const onBackToSignIn = () => {
  $('#current-page').html(showSignIn)
  signInHandlers()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(changePasswordSuccess)
    .catch(changePasswordFailure)
}

const onGoToPasswordPage = () => {
  $('#current-page').html(showPasswordPage)
  $('#change-password').on('submit', onChangePassword)
  $('#back-to-todo').on('click', mainPage)
}

// handlers
const signUpHandlers = () => {
  $('#form-signup').off('submit', onSignUp)
  $('#back-to-signin').off('click', onBackToSignIn)
  $('#form-signup').on('submit', onSignUp)
  $('#back-to-signin').on('click', onBackToSignIn)
}

const signInHandlers = () => {
  $('#form-signin').off('submit', onSignIn)
  $('#no-account').off('click', onNoAccount)
  $('#form-signin').on('submit', onSignIn)
  $('#no-account').on('click', onNoAccount)
}

// helpers
const mainPage = () => {
  $('#current-page').html(showMainPage)
  $('#signout').on('click', onSignOut)
  todo.addHandlers()
  todo.onItemIndex()
  $('#goto-changepass').on('click', onGoToPasswordPage)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess,
  signUpHandlers,
  signInHandlers

}
