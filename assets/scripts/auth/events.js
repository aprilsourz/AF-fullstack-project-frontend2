const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const showSignUp = require('../templates/sign-up.handlebars')
const showSignIn = require('../templates/sign-in.handlebars')

const onSignUp = (event) => {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// switch to sign up screen
const onNoAccount = () => {
  $('#current-page').html(showSignUp)
  signUpHandlers()
}

// back to sign in button
const onBackToSignIn = () => {
  $('#current-page').html(showSignIn)
  signInHandlers()
}

const signInHandlers = () => {
  $('#form-signin').off('submit', onSignIn)
  $('#no-account').off('click', onNoAccount)
  $('#form-signin').on('submit', onSignIn)
  $('#no-account').on('click', onNoAccount)
}

const signUpHandlers = () => {
  $('#form-signup').off('submit', onSignUp)
  $('#back-to-signin').off('click', onBackToSignIn)
  $('#form-signup').on('submit', onSignUp)
  $('#back-to-signin').on('click', onBackToSignIn)
}

const passwordHandler = () => {
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  signInHandlers,
  signUpHandlers
}
