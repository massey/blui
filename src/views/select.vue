<template>
  <div>
    <h2>Select</h2>
    <section>
      <h4>Select</h4>
      <bl-select :options="$options.optionsList1"></bl-select>
    </section>
    <section>
      <h4>Custom Select</h4>
      <bl-select :options="$options.optionsList1"></bl-select>
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
  ]
}
</script>

<style lang="scss">
.options {
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
  list-style: none;
  margin: 0;
  padding: 1rem;
  width: 200px;
  z-index: 5;
}
</style>
