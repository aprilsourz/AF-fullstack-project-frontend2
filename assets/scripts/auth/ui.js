const store = require('../store.js')


const displayErrorMessage = (errorText) => {
  $('#display-error').text('')
  $('#display-error').show()
  $('#display-error').text(errorText || 'Unknown error')
  $('#display-error').delay(3000).fadeOut()
}

const signUpSuccess = (data) => {
  console.log(data)
  console.log('you signed up!')
  displayErrorMessage('Thank you for signing up!')
}

const signUpFailure = (error) => {
  if (error.status === 400) {
    displayErrorMessage('There was a problem signing up, please try again!')
  } else {
    displayErrorMessage()
  }
}

const signInSuccess = (data) => {
  console.log(data)
  console.log('You signed in!')

  store.user = data.user
  console.log(store.user)
}

const signInFailure = (error) => {
  if (error.status === 401) {
    displayErrorMessage('There was a problem signing in.')
  } else {
    displayErrorMessage()
  }
}

const changePasswordSuccess = (data) => {
  displayErrorMessage('You changed your password!')
}

const changePasswordFailure = (error) => {
  if (error.status === 400) {
    displayErrorMessage('Invalid password.')
  } else {
    displayErrorMessage()
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
