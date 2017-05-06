const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onItemIndex = (event) => {
  event.preventDefault()
  api.itemIndex()
    .then(ui.itemIndexSuccess)
    .catch(ui.itemIndexFailure)
}
// this is where this function should go, will refactor later
//
// const onItemDestroy = (event) => {
//   event.preventDefault()
//   console.log('clicked')
//   const dataId = $(event.target).parent()[0]
//   const destroyId = $(dataId).attr('data-id')
//   api.itemDestroy(destroyId)
//     .then(ui.itemDestroySuccess)
//     .catch(ui.itemDestroyFailure)
// }

const onCreateItem = (event) => {
  const content = getFormFields(event.target)
  event.preventDefault()

  api.itemCreate(content)
    .then(ui.itemCreateSuccess)
    .catch(ui.itemCreateFailure)
}

// const onEditItem = (event) => {
//   const content = getFormFields(event.target)
//   event.preventDefault()
//   const dataId = $(event.target).parent()[0]
//   const editId = $(dataId).attr('data-id')
//
//   api.itemEdit(editId, content)
//     .then(ui.itemEditSuccess)
//     .catch(ui.itemEditFailure)
// }

const addHandlers = () => {
  $('#item-index').on('click', onItemIndex)
  $('#item-create').on('submit', onCreateItem)
}

module.exports = {
  addHandlers
}
