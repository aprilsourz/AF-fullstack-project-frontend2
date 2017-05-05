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

// const createGame = () => {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiOrigin + '/games',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {}
//   })
// }

module.exports = {
  itemIndex,
  itemDestroy
}
