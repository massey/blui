export default {
  methods: {
    previousDOMSibling() {
      return this.$el.previousSibling
    },

    previousSibling() {
      const index = this.$parent.$children.findIndex(c => c === this)

      //  Return null if this component is the first child
      if (index === 0) return null

      if (index > 0) return this.$parent.$children[index - 1]
    }
  }
}
