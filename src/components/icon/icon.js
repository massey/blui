export default {
  name: 'blIcon',

  render (h) {
    return h(
      'svg',
      {
        staticClass: 'icon',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          width: this.size,
          height: this.size,
          'stroke-width': this.strokeWidth,
          stroke: this.color,
          fill: this.fill,
          viewBox: '0 0 24 24'
        },
      },
      [this.$slots.default]
    )
  },

  props: {
    color: {
      type: String,
      default: 'currentColor'
    },

    fill: {
      type: String,
      default: 'none'
    },

    iconName: {
      type: String,
      default: 'box'
    },

    size: {
      type: [Number, String],
      default: 18
    },

    strokeWidth: {
      type: [Number, String],
      default: 2
    }
  }
}
