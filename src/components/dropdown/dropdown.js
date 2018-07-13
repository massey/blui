import componentMixin from '@/mixins/component'
import clickoutMixin from '@/mixins/clickout'

export default {
  name: 'dropdown',

  mixins: [clickoutMixin, componentMixin],

  props: {
    inline: {
      type: Boolean,
      default: false
    }
  },

  render (h) {
    const items = this.$slots.default.slice(1)

    const dropdownPanel = h('div', { staticClass: 'dropdown-panel', class: this.panelClasses }, [items])

    return h('div', { class: this.dropdownClasses }, [this.$slots.default[0], dropdownPanel])
  },

  data () {
    return {
      active: false,
      visible: false
    }
  },

  computed: {
    display () {
      return { display: this.active ? 'block' : 'none' }
    },

    dropdownClasses () {
      return {
        'dropdown': true,
        'inline': this.inline
      }
    },

    hasItems () {
      if (!this.$slots.default.length > 1) return false
      return true
    },

    panelClasses () {
      return {
        'show': this.visible && this.hasItems
      }
    },

    position () {
      if (this.active) {
        return {
          top: '5px'
        }
      }
    }
  },

  methods: {
    clickOutListener () {
      this.visible = false
    },

    hide () {
      this.visible = false
    },

    show () {
      this.visible = true
    },

    toggle () {
      this.visible = !this.visible
    }
  },

  mounted () {
    const toggle = this.$slots.default[0]

    if (toggle) {
      // Vue Component
      if (toggle.componentInstance) {
        let instance = toggle.componentInstance

        this.$root.$on('blClick', component => {
          if (component._uid === instance._uid) {
            this.toggle()
          }
        })
      } else {
        toggle.elm.addEventListener('click', () => {
          this.toggle()
        })
      }
    }
  }
}
