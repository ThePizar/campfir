<template>
  <div class="column is-2 nav-background">
    <h1 class="large has-text-centered title">
      {{displayTitle}}
    </h1>
    <div class="is-sidebar-menu">
      <aside class="menu">
        <p class="menu-label"><a class="m-label">PlayLists</a></p>
        <ul class="menu-list">
          <li>
            <ul v-if="playlists.length > 0">
              <li v-for="list in playlists"><a>{{list.name}}</a></li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import config from '../config'

  export default {
    name: 'side-bar',
    data () {
      return {
        title: 'Campfir',
        title2: '',
        title2Loaded: false,
        playlists: []
      }
    },
    mounted () {
      this.loadVersion();
      this.loadPlayLists();
    },
    computed: {
      displayTitle () {
        return this.title2Loaded ? this.title2 : this.title;
      }
    },
    methods: {
      loadVersion () {
        axios.get(config.api).then(res => {
          console.log('api version', res.data);
          this.title2 = this.title + ' v.' + res.data;
          this.title2Loaded = true;
        }, err => {
          console.log(err);
        })
      },
      loadPlayLists () {
        axios.get(config.api + '/user/1/playlists').then(res => {
          this.playlists = res.data.playlists;
        }, err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
  .nav-background {
    background: #d17231
  }
  .m-label {
    color: black;
  }
</style>