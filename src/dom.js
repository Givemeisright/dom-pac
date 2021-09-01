window.dom = {
    create(string) {
        const template = document.createElement("template");
        //创建容纳任意元素的标签template
        template.innerHTML = string.trim();
        return template.content.firstChild;
    },
    after(node, node2) {
        console.log(node.nextSibling);
        node.parentNode.insertBefore(node2, node.nextSibling);
        // 在源节点的下一个节点前面加入
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) {
        parent.appendChild(node)
    },
    wrap(node, parent) {
        dom.before(node, parent)
        // 把新结点放在原来节点前面
        dom.append(parent, node)
        // 把原来节点放到新节点里面
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
        // 保留节点的引用
    },
    empty(node) {
        //node.innerHTML = ''
        const {
            childNode
        } = node
        // 相当于const childNode = node.childNode
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            // 移除节点
            // 节点放回数组中
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) { //重载
        if (arguments.length === 3) {
            // 当参数为3时
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            // 当参数为2时
            return node.getAttribute(name)
        }
    },
    text(node, string) { //适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerHTML
            } else {
                return node.textContent = string
            }
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length = 1) {
            return node.innerHTML
        }

    },
    style(node, name, value) {
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(div, 'color')
                return node.style[name]
            } else if (name instanceof Object) {
                // dom.style(div, {color: 'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {

        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i + 1
    }
};