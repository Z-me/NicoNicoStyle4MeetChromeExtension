$(() => {
  let isActive = false

  $('#active').on('change', (val) => {
    $('#active:checked').each(() => {
      changeActive(true)
    })
    $('#active:not(:checked)').each(() => {
      changeActive(false)
    })
  })

  const changeActive = (flag) => {
    // sendData2Content('isActive', flag)
    // sendData2Background('set', 'isActive', flag)
    // $('#active').prop('checked', flag)
    console.log(flag)
  }

})
