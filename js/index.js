!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).DirTree = t()
}(this, function () {
  class DirTree {
    constructor({root, data}) {

      console.log(data)
      const _this = this
      this.root = document.querySelector(root)
      this.data = data
      this.lineHeight = 20
      this.marginLeft = 20
      this.paddingLeft = 15
      this.root.addEventListener('click', function (e) {
        let childrenLen = e.target.parentElement.children.length
        if (childrenLen > 1) {

          let childHeight = e.target.parentElement.children[1].style.height
          if (childHeight === '0px') {
            e.target.parentElement.children[0].className = 'dir-icon-open'
            e.target.parentElement.children[1].style.height = ''
          } else {
            e.target.parentElement.children[1].style.height = '0px'
            e.target.parentElement.children[0].className = 'dir-icon-close'
          }
        } else {
          alert(e.target.parentElement.children[0].innerText)
        }
      })
      this.root.appendChild(this.createTree(data))
    }

    // return
    //<container>
    //  <dir>
    //    <name></name>
    //    <children>
    //      <container></container>
    //    </children>
    //  <dir>
    //  <dir>
    //    <name></name>
    //    <children>
    //      <container></container>
    //    </children>
    //  <dir>
    //</container>

    createTree(data) {
      const container = document.createElement('div')
      data.forEach(node => {
        const dir = document.createElement('div')
        const name = document.createElement('div')
        name.innerText = node.name
        name.style.cursor = 'pointer'
        name.style.paddingLeft = this.paddingLeft + 'px'
        name.style.position = 'relative'

        dir.appendChild(name)
        if (node.hasOwnProperty('children')) {
          name.className = 'dir-icon-close'
          const children = this.createTree(node.children)
          children.style.marginLeft = this.marginLeft + 'px'
          children.style.height = '0px'
          children.style.overflow = 'hidden'
          dir.appendChild(children)
        }
        container.appendChild(dir)
      })
      return container
    }
    
  }
  return DirTree
})