var prevThread;

var observer = new MutationObserver(records=>{
  try {
    const thread = document.getElementsByClassName('z38b6 CnDs7d hPqowe')[0];

    if (prevThread != undefined && thread.isEqualNode(prevThread)) return;
    if (thread.getElementsByClassName('gYckH').length == 1) return;
    prevThread = thread.cloneNode(true);
    const messages = thread.getElementsByClassName('oIy2qc');
    const message = messages[messages.length-1].innerText;

    var screen = document.body; // よくない
    var screenHeight = screen.offsetHeight;
    var screenWidth = screen.offsetWidth;

    var comment = document.createElement('span');

    comment.textContent = message;
    document.getElementsByTagName('body')[0].appendChild(comment);

    var letterSize = screenHeight*0.05;

    comment.setAttribute('class', 'comment');

    var commentStyle = {
      left: screenWidth + 'px',
      top: Math.floor((screenHeight - letterSize) * Math.random()) + 'px',
      fontSize: letterSize + 'px',
    }
    for(var prop in commentStyle) {
      comment.style[prop] = commentStyle[prop];
    }


    $(comment).animate(
      {
        'left': -comment.offsetWidth + 'px'
      },
      {
        'duration': 6000,
        'easing': 'linear',
        'complete': function() {
          document.getElementsByTagName('body')[0].removeChild(comment);
        }
      });
  }
  catch(e) {
    return;
  }
});

const config = {
  attributes: true,
  subtree: true,
  childList: true,
  characterData: true
}

document.addEventListener('DOMContentLoaded', () => {
  var elem = document.body; // ほんとはチャットボックスを監視するべきだけどmeetに参加画面と判断するのめんどくさい これのせいで重い
  observer.observe(elem, config);

  var cas = document.createElement('iframe');
  // cas.setAttribute('src', 'https://river.tango-gacha.com/')
  cas.setAttribute('width', '100%')
  cas.setAttribute('height', '100%')
  cas.setAttribute('frameborder', '0')
  cas.setAttribute('style', "position:absolute;border:0;width:100%;filter:invert(100%);-webkit-filter:invert(100%);z-index:2147483647;pointer-events:none;")
  var elem = document.body;
  elem.appendChild(cas)
});
