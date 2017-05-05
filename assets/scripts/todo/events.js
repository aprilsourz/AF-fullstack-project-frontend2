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
  const content = getFormFields(event.target)
  event.preventDefault()

  api.itemCreate(content)
    .then(ui.itemCreateSuccess)
    .catch(ui.itemCreateFailure)
}

const onEditItem = (event) => {
  const content = getFormFields(event.target)
  event.preventDefault()
  const dataId = $(event.target).parent()[0]
  const editId = $(dataId).attr('data-id')

  api.itemEdit(editId, content)
    .then(ui.itemEditSuccess)
    .catch(ui.itemEditFailure)
}

const addHandlers = () => {
  $('#item-index').on('click', onItemIndex)
  $('#item-destroy').on('click', onItemDestroy)
  $('#item-create').on('submit', onCreateItem)
  $('#item-edit').on('submit', onEditItem)
}

module.exports = {
  addHandlers
}
