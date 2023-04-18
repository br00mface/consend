<script lang="ts">
import { defineComponent } from "vue";
import ReloadPWA from "./components/pwa/ReloadPWA.vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "App",
  components: {
    ReloadPWA,
  },
  setup() {
    const router = useRouter();
  }
});
</script>

<template>
  <ReloadPWA />
  <router-view />
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>