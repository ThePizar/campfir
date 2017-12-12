<template>
  <div class="columns is-fullheight">
    <side-bar></side-bar>
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
  import SideBar from './sidebar.vue'

  export default {
    components: {SideBar},
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