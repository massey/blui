export default {
  name: 'dropdownItem',

  render (h) {
    return h('a', {
      staticClass: 'item',

      on: {
        click: () => {
          this.$parent.$emit('selection', this.value)
          this.$parent.hide()
        }
      }
    },
    
    [this.$slots.default])
  },

  props: {
    value: null
  }
}
