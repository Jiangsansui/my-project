import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import zxjj from '@/components/zxjj'
import bszn from '@/components/bszn'
import bsyy from '@/components/bsyy'
import djyy from '@/components/djyy'
import zdxm from '@/components/zdxm'
import ltpj from '@/components/ltpj'
import pdqh from '@/components/pdqh'
import grb from '@/components/grb'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/zxjj',
      name: 'zxjj',
      component: zxjj
    },
    {
      path: '/bszn',
      name: 'bszn',
      component: bszn
    },
    {
      path: '/bsyy',
      name: 'bsyy',
      component: bsyy
    },
    {
      path: '/djyy',
      name: 'djyy',
      component: djyy
    },
    {
      path: '/zdxm',
      name: 'zdxm',
      component: zdxm
    },
    {
      path: '/ltpj',
      name: 'ltpj',
      component: ltpj
    },
    {
      path: '/pdqh',
      name: 'pdqh',
      component: pdqh
    },
    {
      path: '/grb',
      name: 'grb',
      component: grb
    },
  ]
})
