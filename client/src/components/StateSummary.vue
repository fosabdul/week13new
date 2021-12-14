<template>
  <div v-if="states.length > 0">    
    <h3>You have visited {{ totalVisited }} {{ units }}</h3>
    <p id="all-visited-message" v-if="areAllVisited">You have visited !</p>
  </div>
</template>

<script>

export default {
  name: 'StateSummary',
  props: {
    states: Array,
  },
  computed: { // each one will check if the state is visited or not
      totalVisited() {
          let visitedCount = 0
          this.states.forEach( state => {
              if (state.visited) {
                  visitedCount++
              }
          })
          return visitedCount
      },
      areAllVisited() {
          // totalVisited is a computed property and 
          // even though there's a method called totalVisited we have to 
          // refer to totalVisited in the same way as data or a prop, so no () 
          return this.totalVisited === this.states.length
      },
      units() { // the msg will be if one or more states as singular or plural statemant display
          if (this.totalVisited === 1) {
              return 'state'
          } else {
              return 'states'
          }
      }, 
  }
}
</script>

<style scoped>

#all-visited-message {
    color: rgb(33, 131, 211);
    font-weight: 600;
}

</style>