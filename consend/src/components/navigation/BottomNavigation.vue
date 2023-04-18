<template>
    <v-bottom-navigation>
        <v-btn value="recent">
            <v-icon>mdi-history</v-icon>

            Pinnwand
        </v-btn>

        <v-btn value="favorites">
            <v-icon>mdi-heart</v-icon>

            Suchen
        </v-btn>

        <v-btn value="nearby">
            <v-icon>mdi-map-marker</v-icon>

            Nearby
        </v-btn>
    </v-bottom-navigation>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: "BottomNavigation",
    setup() {
        return {
        }
    }
})
</script>