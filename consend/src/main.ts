import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import './style.css'

// @ts-ignore
import App from "./App.vue"
import { firebaseApp } from './plugins/firebase'
import { vuetify } from './plugins/vuetify'
import { router } from './router'


const app = createApp(App)
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ]
})
app.use(vuetify)
app.use(router)
app.mount('#app')
