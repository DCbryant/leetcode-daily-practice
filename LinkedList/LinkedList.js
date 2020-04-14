class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode('null');
    this.size = 0;
  }

  // 向链表尾部添加元素
  append(el) {
    const node = new ListNode(el)
    let current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }

  // 从链表中移除元素
  removeAt(index) {
    if (index >= 0 && index < this.size) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        // let prev
        // for (let i = 0; i < index; i++) {
        //   prev = current
        //   current = current.next
        // }
        // prev.next = current.next
        const prev = this.getElementAt(index - 1)
        const current = prev.next
        prev.next = current.next
      }
      this.size--
      return current.val
    }
    return undefined
  }

  // 循环迭代链表到目标位置
  getElementAt(index) {
    if (index >= 0 && index <= this.size) {
      let node = this.head
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  // 任意位置插入元素
  insert(el, index) {
    if (index >= 0 && index <= this.size) {
      const node = new ListNode(el)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const pre = this.getElementAt(index - 1)
        const current = pre.next
        node.next = current
        pre.next = node
      }
      this.size++
      return true
    }
    return false
  }

  // 查找元素位置
  indexOf(el) {
    let current = this.head
    for (let i = 0; i < this.size && current !== null; i++) {
      if (current.val === el) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove(el) {
    const index = this.indexOf(el)
    this.removeAt(index)
  }

  size() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head === null) {
      return ''
    }

    let objString = `${this.head.val}`
    let current = this.head.next
    for (let i = 1; i <= this.size && current !== null; i++) {
      objString += `=>${current.val}`
      current = current.next
    }

    return objString
  }

  reverse (head = this.head) {
    let prev = null
    let current = head
    // console.log(current)
    while (current !== null) {
      const next = current.next
      // 反转 将当前节点反向
      current.next = prev
      // 更新
      prev = current
      current = next
    }
    console.log(prev)
    return prev
  }
}

const a = new LinkedList();
a.append(1)
a.append(2)
a.append(3)
const reverse = a.reverse(a.getHead())
console.log(reverse.toString())