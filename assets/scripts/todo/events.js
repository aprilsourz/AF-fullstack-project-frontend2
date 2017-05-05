const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onItemIndex = (event) => {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.itemIndex(data)
    .then(ui.itemIndexSuccess)
    .catch(ui.itemIndexFailure)
}

const addHandlers = () => {
  $('#item-index').on('click', onItemIndex)
  // $('#form-signin').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#form-signout').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
