<template>
  <div class="state-info">
    <span class="state-name">{{ state.name }}</span>
    <div>
      <input class="visit-state" type="checkbox" v-model="visited" v-on:change="updateVisited">
      <!-- check box for each state -->
    </div>

    <div>

    </div>
      <router-link v-bind:to="{ name: 'StateMap', params: { state: state.name } }">
        <img class="map-icon" src="@/assets/map.png">
      </router-link>
  </div>
</template>

<script>

export default {
  name: 'StateDetail',
  emits: ['update-visited'],
  props: {
    state: Object, // this the visited 
  },
  data() {
    return { //ok to modify the visited data 
      visited: this.state.visited  // copied from prop
    }
  },
  methods: {
    updateVisited() { // here emit a msg to parent / handle all API calls together
      this.$emit('update-visited', this.state.name, this.visited)
    }
  }
}

</script>

<style scoped>

.state-info { 
   padding: 1rem;
   height: 8rem;
   width: 10rem;
   border: 1px gainsboro solid;
   border-radius: .3rem;
   background-color: whitesmoke;
}
/* che */
.visit-state {
    margin: 1rem;
}

.map-icon {
  width: 2rem;
  height: 2rem;
}

</style>