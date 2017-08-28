<template>
  <div>
    <h1 class="large has-text-centered title is-1">{{ title }}</h1>
    <div class="columns" style="padding-left: 20px">
      <div class="column is-2">
        <a class="menu-label" @click="goHome">Home</a>
        <aside class="menu">
          <ul class="menu-list">
            <li v-for="poem in poems" @click="goTo(poem.title)"><a>{{poem.title}}</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <p v-if="current !== ''">{{current}}</p>
      </div>
    </div>
  </div>
</template>

<script>
//  import fs from 'fs';

  export default {
    name: 'poetry',
    data () {
      return {
        title: 'Poetry by Elizabeth Teixeira',
        poems: [
          {title: "Test"},
          {title: "Hills"}
        ],
        current: ''
      }
    },
    mounted () {
      this.loadPoems();
    },
    methods: {
      loadPoems () {
        console.log('loading');
//        fs.readdir('../assets/poems', (err, files) => {
//          console.log(files);
//        });
      },
      goTo (poemName) {
        console.log(poemName);
        this.current = poemName;
      },
      goHome () {
        this.current = '';
      }
    }
  }
</script>