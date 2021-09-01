const div = dom.create("<div>new div</div>");
console.log(div);
dom.after(test, div);

dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'tittle', 'hi, haha')
// 写入标题
const title = dom.attr(test, 'tittle')
// 得到标题
console.log(`title: ${title}`)
// ${}打印出标题
dom.text(test, '你好啊')
dom.text(test)

dom.style(test, {
    border: '1px solid red',
    color: 'blue'
})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'blue'))
const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)


const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('test2')[0]
console.log(dom.find('.red', test2))

console.log(dom.parent(test))

const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const travel = dom.find('#travel')[0]
dom.each(dom.children(travel), (n) => dom.style(n, 'color', 'red'))
console.log(dom.index(s3))