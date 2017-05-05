const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

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
const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNoAccount = () => {
  $('.landing-page').hide()
  $('.signup-page').show()
}

const onBackToSignIn = () => {
  $('.landing-page').show()
  $('.signup-page').hide()
}

const addHandlers = () => {
  $('#form-signup').on('submit', onSignUp)
  $('#form-signin').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#signout').on('click', onSignOut)
  $('#no-account').on('click', onNoAccount)
  $('#back-to-signin').on('click', onBackToSignIn)
}
module.exports = {
  addHandlers
}
