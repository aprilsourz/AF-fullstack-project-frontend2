const getFormFields = require(`../../../lib/get-form-fields`)
const showAllItems = require('../templates/item-index.handlebars')
const showItem = require('../templates/create-item.handlebars')
const api = require('./api.js')
const {
  replaceCurrent,
  createItemObject,
  getIdFromElement,
  editFormSwap
} = require('./helpers.js')

// not the where these functions should go, couldn't get it to work anywhere else
// will refactor later
const onCreateItem = (event) => {
  const content = getFormFields(event.target)
  event.preventDefault()

  api.itemCreate(content)
    .then(itemCreateSuccess)
    .catch(itemCreateFailure)
}

const onItemIndex = (event) => {
  event.preventDefault()
  api.itemIndex()
    .then(itemIndexSuccess)
    .catch(itemIndexFailure)
}

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
  $('#item-create')[0].reset()
}

const itemCreateFailure = (data) => {
  console.log(data)
}
// succesful ajax patch
const itemEditSuccess = (data) => {
  const showItemHtml = showItem({ item: data.item })
  const currentEdit = $('div').filter('.current-edit')
  $(currentEdit).replaceWith(showItemHtml)
  createItemHandlers()
}

const itemEditFailure = (data) => {
  console.log(data)
}

// stuff that ended up here because of the orginal issue while trying to trigger
// a required function in the click handler (itemDestroy)

// swamps form and adds handlers for form when edit button is clicked
const onStartEdit = (event) => {
  console.log(event.target)
  onClickOutCancelEdit()
  editFormSwap(event)
  editItemHandlers()
  console.log('start edit')
}

// event that triggers the create item ajax request.
const onSaveEdit = (event) => {
  event.preventDefault()
  onEditItem(event)
}

// cancels the edit and puts the todo item where the form was
const onCancelEdit = (event) => {
  event.preventDefault()
  replaceCurrent(event, createItemObject(event), showItem)
  createItemHandlers()
}

const onClickOutCancelEdit = () => {
  event.preventDefault()
  const toReplace = $('.current-edit')[0]
  const replaceId = $(toReplace).attr('data-id')
  const replaceContent = $(toReplace).attr('data-content')
  const item = {
    id: replaceId,
    content: replaceContent
  }
  const sameItem = showItem({item: item})
  $(toReplace).replaceWith(sameItem)
  createItemHandlers()
}

const editItemHandlers = () => {
  $('.item-edit-form').off('submit', onSaveEdit)
  $('.item-edit-form').on('submit', onSaveEdit)
  $('.cancel-edit').off('click', onCancelEdit)
  $('.cancel-edit').on('click', onCancelEdit)
  // mouseMoveHandlers()
}

// handlers for whenever index item or create item happens
const createItemHandlers = () => {
  $('.item-destroy').off('click', onItemDestroy)
  $('.item-edit').off('click', onStartEdit)
  $('.item-destroy').on('click', onItemDestroy)
  $('.item-edit').on('click', onStartEdit)
}

const addHandlers = () => {
  $('#item-index').on('click', onItemIndex)
  $('#item-create').on('submit', onCreateItem)
}

module.exports = {
  itemIndexSuccess,
  itemIndexFailure,
  itemDestroyFailure,
  itemDestroySuccess,
  itemCreateSuccess,
  itemCreateFailure,
  itemEditSuccess,
  itemEditFailure,
  addHandlers
}
