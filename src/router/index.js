import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home.vue'
import AgendaPage from '../views/Agenda.vue'
import RockSessionPage from '../views/RockSession.vue'
import MusicasPage from '../views/Musicas.vue'
import ContatoPage from '../views/Contato.vue'


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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
