!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).DirTree = t()
}(this, function () {
  class DirTree {
    constructor({root, data, style, bindClick}) {

      console.log(data)
      const _this = this
      this.root = document.querySelector(root)
      this.data = data
      this.bindClick = bindClick || function (type, name, target) {
        console.log(`type: ${type}, name: ${name}`)
      }
      this.lineHeight = style.lineHeight || 20
      this.marginLeft = style.marginLeft || 28
      this.paddingLeft = style.paddingLeft || 15
      this.root.addEventListener('click', function (e) {
        let parentDir = e.target.parentElement
        if (parentDir.className === 'directory-tree-dir') {
          let childrenOfParent = parentDir.children
          if (childrenOfParent.length > 1) {
            _this.bindClick('dir', childrenOfParent[0].innerHTML, e.target)
            let nameClassName = childrenOfParent[0].className
            if (nameClassName === 'directory-tree-name dir-icon-close') {
              childrenOfParent[0].className = 'directory-tree-name dir-icon-open'
              childrenOfParent[1].style.height = ''
            } else if (nameClassName === 'directory-tree-name dir-icon-open') {
              childrenOfParent[1].style.height = '0px'
              childrenOfParent[0].className = 'directory-tree-name dir-icon-close'
            }

          } else {
            _this.bindClick('file', childrenOfParent[0].innerHTML, e.target)
          }
        }
      })
      this.root.appendChild(this.createTree(data))
    }


    // return
    //<container>
    //  <dir>
    //    <name></name>
    //    <children-contaienr>
    //
    //    </children-container>
    //  <dir>
    //  <dir>
    //    <name></name>
    //    <children-container>
    //    </children-container>
    //  <dir>
    //</container>
    createTree(data) {
      const container = document.createElement('div')
      container.className = 'directory-tree-container'
      data.forEach(node => {
        const dir = document.createElement('div')
        const name = document.createElement('div')

        dir.className = 'directory-tree-dir'
        name.innerText = node.name
        name.style.cursor = 'pointer'
        name.style.paddingLeft = this.paddingLeft + 'px'
        name.style.position = 'relative'
        name.className = 'directory-tree-name'

        dir.appendChild(name)
        if (node.hasOwnProperty('children')) {
          name.className = 'directory-tree-name dir-icon-close'
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