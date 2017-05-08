function resetForm ($form) {
  $form.find('input:text, input:password, input:email, select, textarea').val('')
}

module.exports = {resetForm}
