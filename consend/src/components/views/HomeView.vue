<template>
    <OnlyBottomView>
        <v-avatar class="grid-item-1">
            <v-img
                alt="Avatar"
                src="https://randomuser.me/api/portraits/men/85.jpg"
              ></v-img>
        </v-avatar>
        <strong class="grid-item-2" v-html="'John Leider'"></strong>

        <v-icon class="grid-item-3" icon="mdi-plus">
            
        </v-icon>
        
</OnlyBottomView>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import OnlyBottomView from './OnlyBottomView.vue';

export default defineComponent({
    name: "HomeView",
    components: {
        OnlyBottomView
    },
    setup(){
        const rail = ref(true)
        return {
            rail
        }
    }
    
})

</script>
<style scoped>
@supports(display: grid){
    .grid-item-1 {
        margin-left: 5px;
        margin-top: 5px;
        grid-column: 1;
        grid-row: 1;
    }

    .grid-item-2 {
        grid-column: 2 / 4;
        grid-row: 1;
    }

    .grid-item-3 {
        grid-column: 1;
        grid-row: 1/2;
        align-self: self-end;
        justify-self: self-end;
        margin-top: 10px;
        margin-left: 10px;
    }
}
</style>