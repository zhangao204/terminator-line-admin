import {createApp} from 'vue'
import {Quasar} from 'quasar'
import App from '@/App.vue'
import router from '@/router'
import i18n from "@/i18n";

// Import Quasar css
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import './assets/main.css'

const app = createApp(App)

app.use(i18n)

app.use(router)

app.use(Quasar, {
    plugins: {}
})

app.mount('#app')
