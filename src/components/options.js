import componentMixin from '@/mixins/component'

export default {
  name: 'BluiOptions',

  mixins: [componentMixin],

  render (h) {
    if (this.inactive) return

    return h(
      'ul',
      {
        attrs: { style: 'position: absolute' },
        on: {
          click: () => { this.active = false },

          mousedown: (e) => {
            e.preventDefault()
          }
        },
        style: this.styles
      },
      [this.$slots.default]
    )
  },

  props: {
    element: null
  },

  data () {
    return {
      active: false
    }
  },

  computed: {
    styles () {
      const top = this.inputRect ? `${this.inputRect.height + 5}px` : null
      return {
        display: this.active ? 'block' : 'none',
        top
      }
    }
  },

  methods: {
    up () {
      console.log('up')
    },

    down () {
      console.log('down')
    },

    select () {
      console.log('select')
    }
  },

  created () {
    const input = this.previousSibling()

    if (input) {
      if (input.$el.nodeName === 'INPUT') {
        this.inactive = false
      } else {
        this.inactive = true
        return
      }
    }

    input.$el.onfocus = () => { this.active = true }

    input.$el.onblur = (e) => {
      this.active = false
    }

    input.$el.onkeyup = e => {
      const keyCode = e.keyCode

      switch (keyCode) {
        case 13: this.select(); break
        case 38: this.up(); break
        case 40: this.down(); break
      }
    }
  },

  mounted () {
    var element = this.$parent.$refs[this.element]

    if (element.constructor.name === 'VueComponent') {
      element = element.$refs.input
    }

    this.inputRect = element.getBoundingClientRect()

    console.log(this.inputRect)
  }
}
