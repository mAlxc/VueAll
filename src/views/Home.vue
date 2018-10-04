<template>
  <v-layout column fluid>
    <v-flex>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </v-flex>
    <v-flex>
      test
    </v-flex>
    </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    HelloWorld
  }
}
</script>
