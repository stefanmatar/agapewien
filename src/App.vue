<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .red {
    color: #D0343A;
  }

  .red-background {
    background-color: #D0343A;
  }

  .grey {
    color: #272727;
  }

  .grey-background {
    background-color: #272727
  }

  .dark-grey {
    color: #242424;
  }

  .dark-grey-background {
    background-color: #242424;
    color: white;
  }
  .dark-grey-background a {
    background-color: #242424;
    color: white;
  }
  
  .section {
    padding-bottom: 5em;
    padding-top: 5em;
  }
  
  .section-header {
    padding-bottom: 1em;
  }
  
  .section-text {
    margin-bottom: 3em;
  }
</style>
