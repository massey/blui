<template>
  <div>
    <h2>Input</h2>
    <section>
      <h4>Normal</h4>
      <bl-input></bl-input>
    </section>
    <section>
      <h4>Icons</h4>
      <bl-input>
        <slot name="iconLeft">Hi</slot>
        <slot name="iconRight">Bye</slot>
      </bl-input>
    </section>
  </div>
</template>

<script>
export default {
  name: 'inputView',

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
