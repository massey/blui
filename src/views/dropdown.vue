<template>
  <div>
    <h2>Dropdown</h2>
    <section>
      <p>
        Dropdowns toggle a panel of actions. The dropdown is shown when the
        first child of the dropdown component is clicked.
      </p>
    </section>
    <section>
      <h3>Dropdown Items</h3>
      <p>
        Dropdown items must be supplied in a template.
      </p>
      <bl-dropdown inline @selection="onSelection">
        <button type="button">List</button>
        <bl-dropdown-item :value="true">Hi</bl-dropdown-item>
        <bl-dropdown-item><span>Hi</span></bl-dropdown-item>
        <bl-dropdown-item>
          <p>
            Complicated<br /><span style="font-size: 0.825rem">Schmomplicated</span>
          </p>
        </bl-dropdown-item>
      </bl-dropdown>
      <p>
        Use v-for if you like.
      </p>
      <bl-dropdown inline @selection="onSelection">
        <button type="button">List</button>
        <bl-dropdown-item style="min-width: 12rem" v-for="option in $options.optionsList1" :value="option.value">{{ option.name }}</bl-dropdown-item>
      </bl-dropdown>
      <p>
        Use with input to make a search select.
      </p>
      <bl-dropdown inline @selection="onSelection('normal', $event)">
        <bl-input class="input" v-model="search"></bl-input>
        <bl-dropdown-item style="min-width: 12rem" v-for="option in $options.optionsList1" :value="option">{{ option.name }}</bl-dropdown-item>
      </bl-dropdown>
      <p>
        Do it async.
      </p>
      <bl-dropdown inline @selection="onSelection('async', $event)">
        <div class="flex items-center">
          <bl-input class="icon-right" v-model="asyncSearch" ref="trigger"></bl-input>
          <div class="icon right">
            <bl-icon size="1.5rem">
              <spinner-icon v-if="waiting"/>
            </bl-icon>
          </div>
        </div>
        <bl-dropdown-item style="min-width: 12rem" v-for="option in searchResults" :value="option">
          <p>
            <span>{{ option.name }}</span><br/>
            <span>{{ option.sub }}</span>
          </p>
        </bl-dropdown-item>
      </bl-dropdown>
      {{ asyncSearch }}
    </section>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'inputView',

  optionsList1: [
    { name: 'Option One', value: 'option1' },
    { name: 'Option Two', value: 'option2' },
    { name: 'Option Three', value: 'option3' }
  ],

  data () {
    return {
      search: null,
      asyncSearch: null,
      searchResults: null,
      waiting: false
    }
  },

  methods: {
    callSearch () {
      this.waiting = true
      setTimeout(() => {
        this.searchResults = [
          { name: 'Option One', value: 'option1', sub: 'Werribee' },
          { name: 'Option Two', value: 'option2', sub: 'Laverton' },
          { name: 'Option Three', value: 'option3', sub: 'Paris' },
          { name: 'Option Four', value: 'option4', sub: 'Berlin' }
        ]
        this.waiting = false
      }, 800)
    },

    onAsyncSelection (value) {
      this.asyncSearch = value.name
    },

    onSelection (el , value) {
      if (el === 'async') {
        this.asyncSearch = value.name
      } else {
        this.search = value.name
      }
    }
  },

  watch: {
    asyncSearch (newVal, oldVal) {
      debounce(this.callSearch, 200)()
    }
  }
}
</script>

<style lang="scss">
.icon.right {
  border-top: 1px solid grey;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;
}

input.icon-right {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}
</style>
