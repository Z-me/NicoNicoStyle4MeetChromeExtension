// NOTE: elements
let prevThread;

// NOTE: Values
const config = {
  attributes: true,
  subtree: true,
  childList: true,
  characterData: true
}
let isActive = false

let observer = new MutationObserver( (records) => {
  try {
    const thread = document.getElementsByClassName('z38b6 CnDs7d hPqowe')[0]

    if ( prevThread != undefined && thread.isEqualNode(prevThread) ) return
    if ( thread.getElementsByClassName('gYckH').length == 1 ) return
    // console.log('hogehogehogehoge', localStorage.getItem('mns-active') )
    if ( !isActive ) return

    prevThread = thread.cloneNode(true)
    const messages = thread.getElementsByClassName('oIy2qc')
    const message = messages[messages.length - 1].innerText

    // FIXME: スクリーンオブジェクトでかい‥。
    let screen = document.body
    let screenHeight = screen.offsetHeight
    let screenWidth = screen.offsetWidth

    let comment = document.createElement('span')

    comment.textContent = message
    document.getElementsByTagName('body')[0].appendChild(comment)

    // TODO: size設定
    let letterSize = screenHeight * 0.05
    // TODO: 色設定
    comment.setAttribute('class', 'comment')

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

document.addEventListener('DOMContentLoaded', () => {
  // FIXME: チャットボックス監視するように変更
  let elem = document.body
  console.log('oORaUb NONs6c XDitY classあるかどうかの判定したい')

  observer.observe(elem, config)

  let cas = document.createElement('iframe')
  // cas.setAttribute('src', 'https://river.tango-gacha.com/')
  cas.setAttribute('width', '100%')
  cas.setAttribute('height', '100%')
  cas.setAttribute('frameborder', '0')
  cas.setAttribute('style', "position:absolute;border:0;width:100%;filter:invert(100%);-webkit-filter:invert(100%);z-index:2147483647;pointer-events:none;")
  // let elem = document.body
  elem.appendChild(cas)
})

chrome.runtime.onMessage.addListener(function(request) {
  console.log('aaa', request)
  isActive = request
  return true
})
