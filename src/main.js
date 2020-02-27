import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.config.productionTip = false
//Load for firebase to init before creating the init
let app = null

firebase.auth().onAuthStateChanged(()=>{
  //Init app if not already created
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

