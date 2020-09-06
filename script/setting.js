$(() => {
  // NOTE: values
  let isActive = false

  // NOTE: functions
  const getActive = () => {
    isActive = localStorage.getItem('mns-active') === 'true'
    $('#active').prop('checked', isActive)
  }
  const changeActive = (flag) => {
   localStorage.setItem('mns-active', flag)
  }

  // NOTE: init
  getActive()

  // NOTE: popup triggers
  $('#active').on('change', (val) => {
    $('#active:checked').each(() => {
      changeActive(true)
    })
    $('#active:not(:checked)').each(() => {
      changeActive(false)
    })
  })
})
