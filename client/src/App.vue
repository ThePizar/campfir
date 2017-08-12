<template>
  <div id="app">
    <nav class="navbar">
      <div class="container nav-background">
        <a class="navbar-item" href="https://github.com/ThePizar/pizar-site/">Github</a>
      </div>
    </nav>
    <h1 class="large has-text-centered" style="font-size: 48px">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Pizar\'s Site'
    }
  }
}
</script>

<style scoped>
  .nav-background {
    background: #47d1b1
  }
</style>