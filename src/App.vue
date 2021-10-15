<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Heaters';
  src: url('./assets/Heaters.eot');
  src: url('./assets/Heaters.eot?#iefix') format('embedded-opentype'),
       url('./assets/Heaters.svg#Heaters') format('svg'),
       url('./assets/Heaters.ttf') format('truetype'),
       url('./assets/Heaters.woff') format('woff'),
       url('./assets/Heaters.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Share+Tech&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Heaters', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: black;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
