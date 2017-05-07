const getFormFields = require(`../../../lib/get-form-fields`)
const showAllItems = require('../templates/item-index.handlebars')
const showItem = require('../templates/create-item.handlebars')
const showEditform = require('../templates/edit-item.handlebars')
const api = require('./api.js')
const {
  replaceCurrent,
  createItemObject,
  getIdFromElement
} = require('./helpers.js')

// not the where these functions should go, couldn't get it to work anywhere else
// will refactor later

const onEditItem = (event) => {
  const newContent = getFormFields(event.target)
  const editId = getIdFromElement(event)

  api.itemEdit(editId, newContent)
    .then(itemEditSuccess)
    .catch(itemEditFailure)
}

const onItemDestroy = (event) => {
  event.preventDefault()
  const parentDiv = $(event.target).parents()
  const destroyId = getIdFromElement(event)
  $(parentDiv[2]).hide()

  api.itemDestroy(destroyId)
    .then(itemDestroySuccess)
    .catch(itemDestroyFailure)
}

// end of stuff that shouldn't here

// successful ajax index
const itemIndexSuccess = (data) => {
  console.log(data.items)
  const allItemsHtml = showAllItems({ items: data.items })
  $('#current-list').html(allItemsHtml)
  createItemHandlers()
}

const itemIndexFailure = (data) => {

}

const itemDestroySuccess = (data) => {

}

const itemDestroyFailure = (data) => {
  console.log(data)
}

// successsful ajax post
const itemCreateSuccess = (data) => {
  const showItemHtml = showItem({ item: data.item })
  $('#current-list').append(showItemHtml)
  createItemHandlers()
}

const itemCreateFailure = (data) => {
  console.log(data)
}
// succesful ajax patch
const itemEditSuccess = (data) => {
  const showItemHtml = showItem({ item: data.item })
  const currentEdit = $('div').filter('#current-edit')
  $(currentEdit).replaceWith(showItemHtml)
  createItemHandlers()
}

const itemEditFailure = (data) => {
  console.log(data)
}

// stuff that ended up here because of the orginal issue while trying to trigger
// a required function in the click handler (itemDestroy)

// swamps form and adds handlers for form when edit button is clicked
const startItemEdit = (event) => {
  editFormSwap(event)
  editItemHandlers()
}

// swaps the edit form in for the event
// stores the items id and content
const editFormSwap = (event) => {
  const item = createItemObject(event)
  replaceCurrent(event, item, showEditform)
}

// event that triggers the create item ajax request.
const saveItemEdit = (event) => {
  event.preventDefault()
  onEditItem(event)
}

// cancels the edit and puts the todo item where the form was
const cancelItemEdit = (event) => {
  event.preventDefault()
  replaceCurrent(event, createItemObject(event), showItem)
  createItemHandlers()
}

const editItemHandlers = () => {
  $('.item-edit-form').off('submit', saveItemEdit)
  $('.item-edit-form').on('submit', saveItemEdit)
  $('.cancel-edit').off('click', cancelItemEdit)
  $('.cancel-edit').on('click', cancelItemEdit)
}

// handlers for whenever index item or create item happens
const createItemHandlers = () => {
  $('.item-destroy').off('click', onItemDestroy)
  $('.item-edit').off('click', startItemEdit)
  $('.item-destroy').on('click', onItemDestroy)
  $('.item-edit').on('click', startItemEdit)
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
