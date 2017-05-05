const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onItemIndex = (event) => {
  event.preventDefault()
  api.itemIndex()
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
const onCreateItem = (event) => {
  const data = getFormFields(event.target)
  console.log(data)
  event.preventDefault()

  api.itemCreate(data)
    .then(ui.itemCreateSuccess)
    .catch(ui.itemCreateFailure)
}

const addHandlers = () => {
  $('#item-index').on('click', onItemIndex)
  $('#item-destroy').on('click', onItemDestroy)
  $('#item-create').on('submit', onCreateItem)
  // $('#form-signout').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
