import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'

import Temp from './components/Temp.vue'
import TestProps from './components/TestProps.vue'
import FoodDesc from './components/sub-components/FoodDesc.vue'
import Fallthrough from './components/Fallthrough.vue'
import TodoList from './components/sub-components/TodoList.vue'

const app = createApp(App)
app.component('Temp-Com', Temp)
app.component('Test-Props', TestProps)
app.component('Food-Desc', FoodDesc)
app.component('Fallthrough-Com', Fallthrough)
app.component('Todo-List', TodoList)

app.mount('#app')