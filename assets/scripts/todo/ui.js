const store = require('../store.js')

const itemIndexSuccess = (data) => {
  console.log(data)
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
  console.log(data)
}

const itemCreateFailure = (data) => {
  console.log(data)
}

module.exports = {
  itemIndexSuccess,
  itemIndexFailure,
  itemDestroyFailure,
  itemDestroySuccess,
  itemCreateSuccess,
  itemCreateFailure
}
