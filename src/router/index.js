import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home.vue'
import AgendaPage from '../views/Agenda.vue'
import RockSessionPage from '../views/RockSession.vue'
import MusicasPage from '../views/Musicas.vue'
import ContatoPage from '../views/Contato.vue'
import RS05Page from '../views/RS05.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/agenda',
    name: 'AgendaPage',
    component: AgendaPage,
  },
  {
    path: '/rocksession',
    name: 'RockSessionPage',
    component: RockSessionPage,
  },
  {
    path: '/musicas',
    name: 'MusicasPage',
    component: MusicasPage,
  },
  {
    path: '/contato',
    name: 'ContatoPage',
    component: ContatoPage,
  },
  {
    path: '/RS05',
    name: 'RS05Page',
    component: RS05Page,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
