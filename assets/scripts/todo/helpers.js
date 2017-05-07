const showEditform = require('../templates/edit-item.handlebars')
// replaces current template with edit or item template
const replaceCurrent = (event, item, template) => {
  const htmlToInsert = template({item: item})
  const parentDiv = $(event.target).parents()[2]
  $(parentDiv).replaceWith(htmlToInsert)
}

// creates object to pass to handlebars template
const createItemObject = (event) => {
  return {
    id: getIdFromElement(event),
    content: getContentFromElement(event)
  }
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

// swaps the edit form in for the event
// stores the items id and content
const editFormSwap = (event) => {
  const item = createItemObject(event)
  replaceCurrent(event, item, showEditform)
}

module.exports = {
  replaceCurrent,
  createItemObject,
  getIdFromElement,
  editFormSwap
}
