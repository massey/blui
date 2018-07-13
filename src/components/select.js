/**
* `props`
  * `optionValueKey` When the options are an array of objects, use this string
    to access the intended value to return
*/

export default {
  name: 'nuiSelect',

  render (h) {
    var options
    if (!this.options) {
      options = null
    } else {
      options = this.options.map(option => {
        if (option == null) {
          return h('option')
        }

        return h('option', {
          domProps: {
            innerHTML: option.name,
            selected: option[this.optionValueKey] === this.value,
            value: option[this.optionValueKey]
          }
        })
      })
    }

    return h(
      'select',

      // Options
      {
        class: this.classes,

        on: {
          change: e => {
            const index = e.target.options.selectedIndex

            this.localValue = e.target.options[index].value

            this.$emit('change', this.localValue)
            this.validate()
          }
        }
      },

      // Children
      [
        this.$slots.default,
        options
      ]
    )
  },

  props: {
    options: Array,
    optionValueKey: {
      type: String,
      default: 'value'
    },
    required: Boolean,
    value: null
  },

  data () {
    return {
      localValue: this.value,
      invalid: null
    }
  },

  computed: {
    classes () {
      return {
        invalid: this.invalid
      }
    }
  },

  methods: {
    validate () {
      if (this.required && this.localValue == null) {
        this.invalid = true
        this.$emit('invalid', this)

        return
      }

      this.invalid = false
    }
  },

  watch: {
    value (val) {
      this.localValue = val
    },

    localValue () {
      this.$emit('input', this.localValue)
    }
  }
}
