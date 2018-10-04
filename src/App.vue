<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" class="mainContent" app>
        <v-list id="menu_list">
          <template v-for="item in items">
            <v-list-tile ripple :key="'menu_'+item.label" @click="goTo(item.label, item.name)">
              <v-list-tile-avatar>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                {{$t('menu.'+item.label)}}
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar dark color="primary" app>
        <v-toolbar-side-icon @click="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title>{{$t('menu.'+pageName)}}</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fill-height fluid class="mainContent">
          <transition mode="out-in" name="router" enter-active-class="animated slideInLeft fast" leave-active-class="animated slideOutRight fast">
          <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
      <v-footer color="primary" app></v-footer>
    </v-app>
  </div>
</template>

<script>
const menuItems = [
  { label: 'home', icon: 'home', name: 'home' },
  { label: 'transition', icon: 'home', name: 'transitions' },
  { label: 'about', icon: 'info', name: 'about' },
  { label: 'params', icon: 'settings', name: 'params' }
]

export default {
  data: () => ({
    drawer: false,
    items: menuItems,
    pageName: 'home'
  }),
  props: {
    source: String
  },
  created () {
  },
  methods: {
    goTo (lib, name) {
      this.pageName = lib
      this.$router.push({ name: name })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
.mainContent{
  background: #F9F7FF !important;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
