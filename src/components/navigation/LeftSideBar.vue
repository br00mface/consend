<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
        <template v-slot:append>
          <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Nachrichten" value="users"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Logout" value="users"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>


      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
<script lang="ts">
import { reactive } from 'vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const drawer = ref(true);
    const items = reactive([
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'Pinnwand', icon: 'mdi-account-group-outline' },
      { title: 'Nachrichten', icon: 'mdi-account-group-outline' },
      { title: 'My Account', icon: 'mdi-account' },
      { title: 'Users', icon: 'mdi-account-group-outline' },
    ]);
    const rail = ref(true);
    return {
      drawer,
      items,
      rail
    }
  }

})
</script>