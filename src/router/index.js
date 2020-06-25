import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

//管理端和个人页面
import Base from '@/components/Base'
import MBase from '@/components/MBase'
import SBase from '@/components/SBase'

// 主页页面倒入
import About from '@/components/About'
import Company from '@/components/Company'
import Find1 from '@/components/Find1'
import Find2 from '@/components/Find2'
import Find3 from '@/components/Find3'
// import MainFooter from '@/components/MainFooter'
import PriceList from '@/components/PriceList.vue'
// import MainHeader from '@/components/MainHeader'
import Login from '@/components/Login'

// 整体页面模块倒入

import Home from '@/page/Home'
import Find from '@/page/Find'

// 个人页面
import Attend from '@/branch/Attend'
import Collection from '@/branch/Collection'
import Message from '@/branch/Message'
import Order from '@/branch/Order'
import Orderb from '@/branch/Orderb'
import Ordered from '@/branch/Ordered'
import Summarize from '@/branch/Summarize'
import Upcoming from '@/branch/Upcoming'
import blank from '@/branch/blank'
//import MeetingPlace from '@/branch/MeetingPlace'

//管理端页面
import HistoryMeeting from '@/Manager/HistoryMeeting'
import ManagerMessage from '@/Manager/ManagerMessage'
import MeetingRoom from '@/Manager/MeetingRoom'
import MemberManage from '@/Manager/MemberManage'
import AddMeetingRoom from '@/Manager/AddMeetingRoom'
import CheckMeeting from '@/Manager/CheckMeeting'
import AddMemberChecked from '@/Manager/AddMemberChecked'
import meetingroomstatus from '@/Manager/meetingroomstatus'
//import Performance from '@/Manager/Performance'

//超级管理员页面

import Manager from '@/SuperManager/Manager'
import CompanyManage from '@/SuperManager/CompanyManage'
import Advertisement from '@/SuperManager/Advertisement'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: HomePage
      },
      // {
      //   path: 'HomePage',
      //   name: 'HomePage',
      //   component: HomePage
      // },
      {
        path: 'PriceList',
        name: 'PriceList',
        component: PriceList
      },
      {
        path: 'About',
        name: 'About',
        component: About
      },
      {
        path: 'Company',
        name: 'Company',
        component: Company
      }
      // {
      //   path: 'Login',
      //   name: 'Login',
      //   component: Login
      // }
    ]
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    children: [
      {
        path: '/find/Find1',
        name: 'Find1',
        component: Find1
      },
      {
        path: '/find/Find2',
        name: 'Find2',
        component: Find2
      },
      {
        path: '/find/Find3',
        name: 'Find3',
        component: Find3
      },
      {
        path: '/find/Login',
        name: 'Login',
        component: Login
      }
    ]
  },
  {
    path: '/index',
    name: 'Base',
    component: Base,
    children: [{
      path: '/index/attend', // 我参加的会议
      // name: 'Attend',  
      component: Attend
    }, {
      path: '/index/collection', // 我收藏的会议
      component: Collection
    }, {
      path: '/index/message', // 我的消息
      component: Message
    }, {
      path: '/index/order', // 预定会议室
      component: Order
    }, {
      path: '/index/orderb',
      component: Orderb
    }, {
      path: '/index/ordered', // 我预定的会议
      component: Ordered
    }, {
      path: '',
      component: Summarize
    }, {
      path: '/index/summarize', // 概览
      component: Summarize
    }, {
      path: '/index/upcoming',
      component: Upcoming
    },{
      path: '/index/meetingroomsstatus',
      component:blank
    }]
  },
  {
    path: '/indexmanager',
    name: 'MBase',
    component: MBase,
    children: [
      {
        path: '/',
        component: MeetingRoom
      }, {
        path: '/indexmanager/MeetingRoom',    //会议室管理 
        component: MeetingRoom
      }, {
        path: '/indexmanager/HistoryMeeting',      // 历史会议管理
        component: HistoryMeeting
      }, {
        path: '/indexmanager/Message',     //消息
        component: ManagerMessage
      }, {
        path: '/indexmanager/member',
        component: MemberManage
      }, {
        path: '/indexmanager/add',
        component: AddMeetingRoom
      },{
        path: '/indexmanager/check',
        component:CheckMeeting
      },{
        path: '/indexmanager/checkmember',
        component:AddMemberChecked
      },{
        path : '/indexmanager/meetingroomstatus',
        component:meetingroomstatus
      }
      // ,{
      //   path: '/indexmanager/performance',
      //   component :Performance
      // }
    ]
  },{
    path :'/supermanager',
    name :'SBase',
    component :SBase,
    children :[{
      path:'/',
      component :CompanyManage
    }, {
      path:'/supermanager/company',
      component :CompanyManage
    }, {
      path :'/supermanager/manager',
      component :Manager
    }, {
      path :'/supermanager/advertisement',
      component :Advertisement
    }]
  }
  ]
})
