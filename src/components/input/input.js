/**
* `props`
  * `validator` {Function} A function that validates the current `localVal`.
    When the value is invalid, return a message to indicate an invalid state.
    OTherwise return null or undefined.

#### Event: `validate`

The 'validate' event is emitted when the `validate` method is called.  The event
is emitted with the input's name and if the validation is invalid, then a reason
is also passed as the third argument.
*/
export default {
  name: 'blInput',

  render (h) {
    return h('input', {
      staticClass: 'input',
      class: this.classes,
      attrs: {
        name: this.name,
        type: this.type,
        disabled: this.disabled,
        required: this.required,
        placeholder: this.placeholder,
        value: this.value
      },

      ref: 'input',

      on: {
        blur: () => { this.hasFocus = false },

        change: () => {
          this.validate()
        },

        click: () => {
          this.$root.$emit('blClick', this)
        },

        focus: () => { this.hasFocus = true },

        input: e => {
          const val = e.target.value

          this.localValue = val
        }
      }
    }, [this.$slots.default])
  },

  props: {
    name: String,
    placeholder: String,
    required: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    validator: Function,
    value: [String, Number]
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
      const val = this.localValue

      if (this.required && !val && val !== 0) {
        this.invalid = true
        this.$parent.$emit('validate', this.name, 'Required')
        return { [this.name]: 'Required' }
      }

      if (this.validator && !this.invalid) {
        let result = this.validator(val)
        if (result) {
          this.invalid = true
          this.$parent.$emit('validate', this.name, result)
          return { [this.name]: result }
        }
      }

      this.$parent.$emit('validate', this.name)
      this.invalid = false
    }
  },

  watch: {
    value (val) {
      this.localValue = val
      if (this.invalid) this.validate()
    },

    localValue (newVal) {
      if (!this.hasFocus) {
        this.$el.value = newVal
        return
      }

      this.$emit('input', this.localValue)
    }
  }
}
