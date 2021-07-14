<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app{
  background: #E5E5E5;
}
div{
  margin: 0;
  padding: 0;
}
:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
</style>
