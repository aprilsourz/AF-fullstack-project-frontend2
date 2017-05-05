const config = require('../config.js')
const store = require('../store.js')

const itemIndex = () => {
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token }
  })
}

const itemDestroy = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const itemCreate = (content) => {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: content
  })
}

const itemEdit = (id, content) => {
  return $.ajax({
    url: config.apiOrigin + '/items/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: content
    // data: data
  })
}

module.exports = {
  itemIndex,
  itemDestroy,
  itemCreate,
  itemEdit
}
