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
  @font-face {
    font-family: Montserrat;
    src: url('/static/font/Montserrat-Regular.ttf');
  }

  @font-face {
    font-family: Montserrat-SemiBold;
    src: url('/static/font/Montserrat-SemiBold.ttf');
  }

  @font-face {
    font-family: Montserrat-Medium;
    src: url('/static/font/Montserrat-Medium.ttf');
  }

  @font-face {
    font-family: Montserrat-Light;
    src: url('/static/font/Montserrat-Light.ttf');
  }

  #app {
    font-family: Montserrat;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .red {
    color: #D0343A;
  }

  .red-bg {
    background-color: #D0343A;
  }

  .grey {
    color: #272727;
  }

  .grey-bg {
    background-color: #070f1e;
  }

  .dark-grey {
    color: #242424;
  }

  .dark-grey-bg {
    background-color: #070f1e;
    color: white;
  }

  .dark-grey-background a {
    background-color: #242424;
    color: white;
  }

  h1 {
    font-family: Montserrat-SemiBold;
    font-size: 40px;
  }

  h2 {
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    text-transform: uppercase;
    color: #272727;
    margin-bottom: 20px;
    letter-spacing: 3px;
  }

  h3 {
    font-family: Montserrat-SemiBold !important;
    font-size: 28px !important;
    letter-spacing: 1.25px !important;
    text-transform: none !important;
  }

  .header-subtext {
    font-family: Montserrat-Medium;
    font-size: 18px;
    line-height: 35px;
    margin: 40px 0;
  }

  .section {
    padding: 140px 20px !important;
  }

  .section-header {
    padding-bottom: 1em;
  }

  .section-text {
    font-family: Montserrat-Light;
    font-size: 18px;
    text-align: left;
  }

  .section-text-heading {
    font-family: Montserrat-Medium;
    font-size: 18px;
    text-align: left;
    margin-bottom: 0;
  }

  .section-btn-primary {
    background-color: white;
    color: #272727;
    text-align: left;
    margin-top: 40px;
    float: left;
  }

  .fa-arrow-right {
    margin-left: 1em;
  }
</style>
