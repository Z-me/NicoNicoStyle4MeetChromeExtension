$(() => {
  // NOTE: values
  let isActive = false

  // NOTE: functions
  const getActive = () => {
    isActive = localStorage.getItem('nsm-active') === 'true'

    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        active: isActive
      })
    })

    $('#active').prop('checked', isActive)
  }
  const changeActive = (flag) => {
   localStorage.setItem('nsm-active', flag.active)
   chrome.tabs.query({
     active: true,
     currentWindow: true
   }, function (tabs) {
     chrome.tabs.sendMessage(tabs[0].id, flag)
   })
  }
  const setTag = (payload) => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, payload)
    })
  }

  // NOTE: init
  getActive()

  // NOTE: popup triggers
  $('#active').on('change', (val) => {
    $('#active:checked').each(() => {
      changeActive({
        active: true
      })
    })
    $('#active:not(:checked)').each(() => {
      changeActive({
        active: false
      })
    })
  })

  // NOTE: tag setting triggers
  // NOTE: color
  $('#tag-color-red').on('click', () => {
    setTag({
      color: 'red'
    })
  })
  $('#tag-color-blue').on('click', () => {
    setTag({
      color: 'blue'
    })
  })
  $('#tag-color-green').on('click', () => {
    setTag({
      color: 'green'
    })
  })
  $('#tag-color-orange').on('click', () => {
    setTag({
      color: 'orange'
    })
  })
  $('#tag-color-purple').on('click', () => {
    setTag({
      color: 'purple'
    })
  })
  $('#tag-color-black').on('click', () => {
    setTag({
      color: 'black'
    })
  })
  // NOTE: color
  $('#tag-size-large').on('click', () => {
    setTag({
      size: 'large'
    })
  })
  $('#tag-size-small').on('click', () => {
    setTag({
      size: 'small'
    })
  })
})
