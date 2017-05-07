// replaces current template with edit or item template
const replaceCurrent = (event, item, template) => {
  const htmlToInsert = template({item: item})
  const parentDiv = $(event.target).parents()[2]
  $(parentDiv).replaceWith(htmlToInsert)
}

module.exports = {
  replaceCurrent
}
