
const showAllItems = require('../templates/item-index.handlebars')
const showItem = require('../templates/create-item.handlebars')
const showEditform = require('../templates/edit-item.handlebars')
const api = require('./api.js')
const getFormFields = require(`../../../lib/get-form-fields`)

// not the where these functions should go, couldn't get it to work anywhere else
// will refactor later

const onEditItem = (event) => {
  const newContent = getFormFields(event.target)
  const dataId = $(event.target).parents()
  const editId = $(dataId[1]).attr('data-id')
  console.log(editId)

  api.itemEdit(editId, newContent)
    .then(itemEditSuccess)
    .catch(itemEditFailure)
}

const onItemDestroy = (event) => {
  event.preventDefault()
  const dataId = $(event.target).parents()
  const destroyId = $(dataId[2]).attr('data-id')
  $(dataId[2]).hide()

  api.itemDestroy(destroyId)
    .then(itemDestroySuccess)
    .catch(itemDestroyFailure)
}

// end of stuff that shouldn't here

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

const itemCreateSuccess = (data) => {
  const showItemHtml = showItem({ item: data.item })
  $('#current-list').append(showItemHtml)
  createItemHandlers()
}

const itemCreateFailure = (data) => {
  console.log(data)
}

const itemEditSuccess = (data) => {
  console.log(data)
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
  const item = {
    id: getIdFromElement(event),
    content: getContentFromElement(event)
  }
  replaceCurrent(event, item, showEditform)
}

// grabs data-id from todo-item or edit form
const getIdFromElement = (event) => {
  const parentDiv = $(event.target).parents()
  return $(parentDiv[2]).attr('data-id')
}

// grabs data-content from to-do item or edit form
const getContentFromElement = (event) => {
  const parentDiv = $(event.target).parents()
  return $(parentDiv[2]).attr('data-content')
}

// replaces to do item with edit form
const replaceCurrent = (event, item, template) => {
  const htmlToInsert = template({item: item})
  const parentDiv = $(event.target).parents()[2]
  $(parentDiv).replaceWith(htmlToInsert)
}

// event that triggers the create item ajax request.
const saveItemEdit = (event) => {
  event.preventDefault()
  onEditItem(event)
}

// cancels the edit and puts the todo item where the form was
const cancelItemEdit = (event) => {
  event.preventDefault()
  console.log('click')
  const id = getIdFromElement(event)
  const content = getContentFromElement(event)
  replaceCurrent(event, id, content, showItem)
}

// handlers for edit item form
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
