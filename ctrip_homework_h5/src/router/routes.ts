import { lazy } from "react";
import Home from '../views/Home/Home'
const routes = [{
    path:'/',
    name:'home',
    component:Home,
    meta:{
        title:'首页'
    }
},{
    path:'/detail/:id',
    name:'detail',
    component:lazy(()=>import('../views/Detail/Detail')),
    meta:{
        title:'详情'
    }
},{
    path:'/personal',
    name:'personal',
    component:lazy(()=>import('../views/Personal/Personal')),
    meta:{
        title:'我的'
    }
},{
    path:'/publish',
    name:'publish',
    component:lazy(()=>import('../views/Publish/Publish')),
    meta:{
        title:'详情'
    }
},{
    path:'/login',
    name:'login',
    component:lazy(()=>import('../views/Login/Login')),
    meta:{
        title:'详情'
    }
}]

export default routes