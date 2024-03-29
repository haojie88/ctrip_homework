import { lazy } from "react";
import Home from "../views/Home/Home";
const routes = [
  {
    path: "/",
    // name: "home",
    // element: <Home />,
    // meta:{
    //     title:'首页'
    // }
    // },{
    //     path:'/detail/:id',
    //     name:'detail',
    //     element:lazy(()=>import('../views/Detail/Detail')),
    //     // meta:{
    //     //     title:'详情'
    //     // }
    // },{
    //     path:'/personal',
    //     name:'personal',
    //     element:lazy(()=>import('../views/Personal/Personal')),
    //     // meta:{
    //     //     title:'我的'
    //     // }
    // },{
    //     path:'/publish',
    //     name:'publish',
    //     element:lazy(()=>import('../views/Publish/Publish')),
    //     // meta:{
    //     //     title:'详情'
    //     // }
    // },{
    //     path:'/login',
    //     name:'login',
    //     element:lazy(()=>import('../views/Login/Login')),
    // meta:{
    //     title:'详情'
    // }
  },
];

export default routes;
