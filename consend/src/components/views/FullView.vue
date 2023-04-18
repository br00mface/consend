<template>
  <v-app>
    <LeftSideBar>
      <slot></slot>
      <BottomNavigation></BottomNavigation>
    </LeftSideBar>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BottomNavigation from '@/components/navigation/BottomNavigation.vue';
import LeftSideBar from '@/components/navigation/LeftSideBar.vue';
export default defineComponent({
  name: "FullView",
  props: {
    msg: String,
  },
  components: {
    BottomNavigation,
    LeftSideBar
  },
  setup() {
    const count = ref(0);
    return {
      count,
    }
  }

})


</script>