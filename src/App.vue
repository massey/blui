<template>
  <div id="app">
    <div>
      <ul>
        <router-link :to="{ name: 'dropdown' }" tag="li"><a>Dropdown</a></router-link>
        <router-link :to="{ name: 'input' }" tag="li"><a>Input</a></router-link>
        <router-link :to="{ name: 'select' }" tag="li"><a>Select</a></router-link>
      </ul>
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body, div {
  margin: 0;
  padding: 0;
}

#app {
  font-family: sans-serif, Helvetica, Arial, sans-serif;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100vh;
  margin: 0;
}

#main {
  padding: 2rem;
}
</style>
