<template>
  <div>
    <h1 class="large has-text-centered title is-1">World of Tanks Matchmaker Simulator</h1>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>
            Top Tier
          </th>
          <td>Tier Spread</td>
          <td>Chance</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="battle in catalog.battles">
          <td>{{battle.topTier}}</td>
          <td>{{battle.spreadSize}}</td>
          <td>{{battle.chance}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table is-striped">
      <thead>
      <tr>
        <th>
          Top Tier
        </th>
        <td>Tier Spread</td>
        <td>Chance</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="battle in forCurrTier">
        <td>{{battle.topTier}}</td>
        <td>{{battle.spreadSize}}</td>
        <td>{{battle.chance}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Catalog from '../wot/mm/catalog'

  //This does not take into account players in queue

  export default {
    name: 'sample',
    data () {
      return {
        catalog: new Catalog(0.1, 0.25, 0.65), //Can't find source
        selectedTier: 8
      }
    },
    computed: {
      forCurrTier () {
        return this.catalog.battlesForTier(this.selectedTier)
      }
    }
  }
</script>

<style scoped>
</style>