// NOTE: elements
let prevThread;
let isActive = localStorage.getItem('mns-active') === 'true'

let observer = new MutationObserver( (records) => {
  try {
    const thread = document.getElementsByClassName(CLASS_OBJ.thread)[0]

    if ( prevThread != undefined && thread.isEqualNode(prevThread) ) return
    if ( thread.getElementsByClassName('gYckH').length == 1 ) return
    if ( !isActive ) return

    prevThread = thread.cloneNode(true)
    const messages = thread.getElementsByClassName(CLASS_OBJ.messages)
    const message = messages[messages.length - 1].innerText

    // FIXME: スクリーンオブジェクトでかい‥。
    let screen = document.body
    let screenHeight = screen.offsetHeight
    let screenWidth = screen.offsetWidth

    let comment = document.createElement('span')

    let { msg, size, color } = getMessages(message)
    comment.textContent = msg
    document.getElementsByTagName('body')[0].appendChild(comment)

    let letterSize = screenHeight * 0.05 * size
    comment.setAttribute('class', 'comment')
    if (color) {
      comment.setAttribute('class', `comment color-${color}`)
    }

    const footerHeight = 88
    let topPosition = Math.floor((screenHeight - letterSize - footerHeight) * Math.random())
    let commentStyle = {
      left: `${screenWidth}px`,
      top: `${topPosition}px`,
      fontSize: `${letterSize}px`,
    }
    for(let prop in commentStyle) {
      comment.style[prop] = commentStyle[prop]
    }


    $(comment).animate(
      {
        'left': `${-comment.offsetWidth}px`
      },
      {
        'duration': 6000,
        'easing': 'linear',
        'complete': function() {
          document.getElementsByTagName('body')[0].removeChild(comment)
        }
      })
  }
  catch(e) {
    return
  }
})

const getMessages = (msg) => {
  const tagReg = /<("[^"]*"|'[^']*'|[^'">])*>/g
  let size = 1
  let color = false

  if (!tagReg.test(msg)) {
    return { msg, size, color}
  } else {
    const colorReg = /<.*\#(C|c):.*>/g
    const resultColor = colorReg.exec(msg)
    if (resultColor !== null) {
      const reg = /(red|blue|green|orange|purple|black)/g
      const result = reg.exec(resultColor[0].toLowerCase())
      color = result[0]
    }

    const sizeReg = /<.*\#(S|s):.*>/g
    const resultSize = sizeReg.exec(msg)
    if (resultSize !== null) {
      const small = /(s|S)/g
      const large = /(l|L)/g
      if (small.test(resultSize[0])) {
        size = 0.5
      }
      if (large.test(resultSize[0])) {
        size = 1.5
      }
    }
  }
  return {
    msg: msg.replace(tagReg, ''),
    size,
    color
  }
}

const setActivateState = (flag) => {
  localStorage.setItem('nsm-active', flag)
  isActive = flag
}

const setColorTag = (color) => {
  const inputText = $(INPUT_AREA).val()
  const colorReg = /<#(C|c):(red|blue|green|orange|purple|black)>/g
  let message = inputText.replace(colorReg, '')
  let tag = `<#C:${color}>`
  $(INPUT_AREA).val(`${tag}${message}`)
  return true
}

const setSizeTag = (size) => {
  const inputText = $(INPUT_AREA).val()
  const sizeReg = /<#(S|s):(l|s)>/g
  let message = inputText.replace(sizeReg, '')
  let tag = `<#S:${size}>`
  $(INPUT_AREA).val(`${tag}${message}`)
  return true
}

document.addEventListener('DOMContentLoaded', () => {
  let elem = document.body

  observer.observe(elem, OBSERVE_CONFIG)

  let cas = document.createElement('iframe')
  // cas.setAttribute('src', 'https://river.tango-gacha.com/')
  cas.setAttribute('width', '100%')
  cas.setAttribute('height', '100%')
  cas.setAttribute('frameborder', '0')
  const styleText = 'position:absolute;' +
    'border:0;' +
    'width:100%;' +
    'filter:invert(100%);' +
    '-webkit-filter:invert(100%);' +
    'z-index:2147483647;' +
    'pointer-events:none;'
  cas.setAttribute('style', styleText)
  elem.appendChild(cas)
})

chrome.runtime.onMessage.addListener(function(request) {
  const keys = Object.keys(request)
  if (keys.includes('active')) {
    setActivateState(request.active)
  }
  if (keys.includes('color')) {
    setColorTag(request.color)
  }
  if (keys.includes('size')) {
    const size = request.size === 'large' ? 'l' : 's'
    setSizeTag(size)
  }
  return true
})
