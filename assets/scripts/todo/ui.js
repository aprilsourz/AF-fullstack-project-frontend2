const store = require('../store.js')
const showAllItems = require('../templates/item-index.handlebars')
const showItem = require('../templates/create-item.handlebars')

const itemIndexSuccess = (data) => {
  console.log(data.items)
  const allItemsHtml = showAllItems({ items: data.items })
  $('#current-list').html(allItemsHtml)
}

const itemIndexFailure = (data) => {
  console.log(data)
}

const itemDestroySuccess = (data) => {
  console.log(data)
}

const itemDestroyFailure = (data) => {
  console.log(data)
}

const itemCreateSuccess = (data) => {
  const showItemHtml = showItem({ item: data.item })
  $('#current-list').append(showItemHtml)
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
