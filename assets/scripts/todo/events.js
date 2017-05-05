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

const onItemDestroy = (event) => {
  event.preventDefault()
  const dataId = $(event.target).parent()[0]
  const destroyId = $(dataId).attr('data-id')

  api.itemDestroy(destroyId)
    .then(ui.itemDestroySuccess)
    .catch(ui.itemDestroyFailure)
}

const addHandlers = () => {
  $('#item-index').on('click', onItemIndex)
  $('#item-destroy').on('click', onItemDestroy)
  // $('#change-password').on('submit', onChangePassword)
  // $('#form-signout').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
