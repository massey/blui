<template>
  <div>
    <bl-icon>
      <spinner-icon/>
    </bl-icon>
  </div>
</template>

<script>
import { spinnerIcon } from '../components/icon'

export default {
  name: 'inputView',

  components: {
    spinnerIcon
  },

  optionsList1: [
    { name: 'Option One', value: 'option1' },
    { name: 'Option Two', value: 'option2' },
    { name: 'Option Three', value: 'option3' }
  ],

  data () {
    return {
      value1: null
    }
  }
}
</script>

<style lang="scss">
.options {
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
  list-style: none;
  margin: 0;
  padding: 0;
  width: 200px;
  z-index: 5;

  li {
    cursor: default;
    padding: 1rem;
  }

  li:hover {
    background-color: #eeeeee;
  }
}
</style>
