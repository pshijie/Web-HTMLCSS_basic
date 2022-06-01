(function flexible(window, document) {
    var docEl = document.documentElement
    // dpr表示物理像素比,PC端是1,移动端是2
    var dpr = window.devicePixelRatio || 1

    // 设置body字体大小
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面由于元素还未加载完成导致没有body元素,则触发DOMContentLoaded事件,即等页面主要DOM元素加载完毕,再去设置字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // 设置html元素的文字大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // 当页面大小发生变化时,需要重新设置rem大小
    window.addEventListener('resize', setRemUnit)
    // pageshow是页面重新加载时触发的事件
    window.addEventListener('pageshow', function (e) {
        // persisted判断是否是缓存中的页面触发的pageshow事件
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))