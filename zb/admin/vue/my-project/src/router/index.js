import Vue 	from 'vue'
import Router 	from 'vue-router'
import Hello 	  from '@/components/Hello'
import User_show 	from '@/components/user/User_show'
import User_save 	from '@/components/user/User_save'
import User_add 	from '@/components/user/User_add'
import User_del 	from '@/components/user/User_del'

import Actors_show  from '@/components/actors/Actors_show'
import Actors_save  from '@/components/actors/Actors_save'
import Actors_add   from '@/components/actors/Actors_add'
import Actors_del   from '@/components/actors/Actors_del'

import Page_show  from '@/components/page/Page_show'
import Page_save  from '@/components/page/Page_save'
import Page_add   from '@/components/page/Page_add'
import Page_del   from '@/components/page/Page_del'

import Sort_show  from '@/components/sort/Sort_show'
import Sort_save  from '@/components/sort/Sort_save'
import Sort_add   from '@/components/sort/Sort_add'
import Sort_del   from '@/components/sort/Sort_del'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    ,{
      path: '/User_show',
      name: 'User_show',
      component: User_show
    }
    ,{
      path: '/User_save',
      name: 'User_save',
      component: User_save
    }
    ,{
      path: '/User_add',
      name: 'User_add',
      component: User_add
    }
    ,{
      path: '/User_del',
      name: 'User_del',
      component: User_del
    }
    ,{
      path: '/Actors_show',
      name: 'Actors_show',
      component: Actors_show
    }
    ,{
      path: '/Actors_save',
      name: 'Actors_save',
      component: Actors_save
    }
    ,{
      path: '/Actors_add',
      name: 'Actors_add',
      component: Actors_add
    }
    ,{
      path: '/Actors_del',
      name: 'Actors_del',
      component: Actors_del
    }
    ,{
      path: '/Page_show',
      name: 'Page_show',
      component: Page_show
    }
    ,{
      path: '/Page_save',
      name: 'Page_save',
      component: Page_save
    }
    ,{
      path: '/Page_add',
      name: 'Page_add',
      component: Page_add
    }
    ,{
      path: '/Page_del',
      name: 'Page_del',
      component: Page_del
    }
    ,{
      path: '/Sort_show',
      name: 'Sort_show',
      component: Sort_show
    }
    ,{
      path: '/Sort_save',
      name: 'Sort_save',
      component: Sort_save
    }
    ,{
      path: '/Sort_add',
      name: 'Sort_add',
      component: Sort_add
    }
    ,{
      path: '/Sort_del',
      name: 'Sort_del',
      component: Sort_del
    }
  ]
})
