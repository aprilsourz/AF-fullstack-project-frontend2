const store = require('../store.js')

const displayMessage = (errorText, errorPlace) => {
  $(errorPlace).text('')
  $(errorPlace).show()
  $(errorPlace).text(errorText)
  $(errorPlace).delay(3000).fadeOut()
}

const signUpSuccess = (data) => {
  console.log(data)
  console.log('you signed up!')

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
  console.log(data)
  store.user = data.user
  $('#form-signin')[0].reset()
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
