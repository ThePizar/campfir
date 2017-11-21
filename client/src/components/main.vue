<template>
  <div class="columns is-fullheight">
    <div class="column is-2 nav-background">
      <h1 class="large has-text-centered title">
        {{title}}
      </h1>
      <div class="is-sidebar-menu">
        <aside class="menu">
        </aside>
      </div>
    </div>
    <div class="column">
      <h1 class="large has-text-centered title is-1">Music feed</h1>
      <div class="tile is-ancestor">
        <div class="is-parent">
          <div class="tile is-child box" v-for="entry in entries">
            {{entry.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        title: 'Campfir',
        entries: [
          {
            name: 'Cat'
          },
          {
            name: 'Dog'
          },
          {
            name: 'Cow'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .nav-background {
    background: #d17231
  }
</style>