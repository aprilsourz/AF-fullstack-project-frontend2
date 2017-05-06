
const showAllItems = require('../templates/item-index.handlebars')
const showItem = require('../templates/create-item.handlebars')
const api = require('./api.js')

// not the where this file should go, couldn't get it to work anywher else
// will refactor later
const onItemDestroy = (event) => {
  event.preventDefault()
  const dataId = $(event.target).parents()
  const destroyId = $(dataId[2]).attr('data-id')
  $(dataId[2]).hide()
  api.itemDestroy(destroyId)
    .then(itemDestroySuccess)
    .catch(itemDestroyFailure)
}

const itemIndexSuccess = (data) => {
  console.log(data.items)
  const allItemsHtml = showAllItems({ items: data.items })
  $('#current-list').html(allItemsHtml)
  deleteButtonHandlers()
}

const itemIndexFailure = (data) => {

}

const itemDestroySuccess = (data) => {

}

const itemDestroyFailure = (data) => {
  console.log(data)
}

const itemCreateSuccess = (data) => {
  const showItemHtml = showItem({ item: data.item })
  $('#current-list').append(showItemHtml)
  deleteButtonHandlers()
}

const itemCreateFailure = (data) => {
  console.log(data)
}

const itemEditSuccess = (data) => {
  console.log(data)
}

const itemEditFailure = (data) => {
  console.log(data)
}

const deleteButtonHandlers = () => {
  $('#item-destroy').off('click', onItemDestroy)
  $('.item-destroy').on('click', onItemDestroy)
}

module.exports = {
  itemIndexSuccess,
  itemIndexFailure,
  itemDestroyFailure,
  itemDestroySuccess,
  itemCreateSuccess,
  itemCreateFailure,
  itemEditSuccess,
  itemEditFailure
}
