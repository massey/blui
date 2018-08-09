export default {
  data () {
    return {
      contextX: null,
      contextY: null,
      dialog: null
    }
  },

  methods: {
    closeDialog () {
      this.dialog = null
    },

    hideContextMenu (x, y) {
      this.contextX = null
      this.contextY = null
    },

    showContextMenu (x, y) {
      this.contextX = x
      this.contextY = y
    },

    openDialog (dialog) {
      this.dialog = dialog
    }
  }
}
