import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'

import Temp from './components/Temp.vue'
import TestProps from './components/TestProps.vue'

const app = createApp(App)
app.component('Temp-Com', Temp)
app.component('Test-Props', TestProps)
app.mount('#app')