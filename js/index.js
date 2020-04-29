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
        let childrenOfParent = e.target.parentElement.children
        if (childrenOfParent.length > 1) {

          let nameClassName = childrenOfParent[0].className
          if (nameClassName === 'directory-tree-name dir-icon-close') {
            childrenOfParent[0].className = 'directory-tree-name dir-icon-open'
            childrenOfParent[1].style.height = ''
          } else if (nameClassName === 'directory-tree-name dir-icon-open') {
            childrenOfParent[1].style.height = '0px'
            childrenOfParent[0].className = 'directory-tree-name dir-icon-close'
          }
        } else {
          alert(childrenOfParent[0].innerText)
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