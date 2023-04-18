<template>
    <v-app>
    <v-layout class="grid-header">
        <v-sheet elevation="4" class="grid-card">
            <slot></slot>
            <BottomNavigation></BottomNavigation>
        </v-sheet>
    </v-layout>
    </v-app>
    
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import BottomNavigation from '../navigation/BottomNavigation.vue';

export default defineComponent({
    name: "OnlyBottomView",
    components: {
        BottomNavigation
    },
    setup(){
    }
    
})

</script>
<style scoped>

@supports(display: grid){
    .grid-card {
        display: grid;
        grid-template-columns: max-content 1fr 1fr;
        grid-template-rows: max-content auto 1fr;
    }

    .grid-header {
        display: grid;
    }
}

</style>