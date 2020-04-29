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
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background-color: #43119A
  }
  *{
    margin: 0;
    padding: 0;
  }
#app {

}
</style>
