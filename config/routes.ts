export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '权益平台管理',
    path:'/mallMenu',
    icon: 'shop',
    // access: 'normalRouteFilter',
    routes:[
      {
        name:'微信平台管理',
        path:'/mallMenu/companyManager',
        // access: 'normalRouteFilter',
        routes:[
          {
            name:'公众号管理',
            path:'/mallMenu/companyManager/weChartManager',
            // access: 'normalRouteFilter',
            component: './CompanyManager/WeChartManager',
          }
        ]
      },
      {
        name:'积分管理',
        path:'/mallMenu/corpPointsPool',
        // access: 'normalRouteFilter',
        access: 'adminRouteFilter',
        routes:[
          {
            name:'积分账户',
            path:'/mallMenu/corpPointsPool/pointAccounts',
            component: './CorpPointsPool/PointAccounts',
            // access: 'normalRouteFilter',
            access: 'adminRouteFilter',
          },
          {
            name:'积分分配',
            path:'/mallMenu/corpPointsPool/distPoints',
            component: './CorpPointsPool/DistPoints',
            // access: 'normalRouteFilter',
            access: 'adminRouteFilter',
          },
        ]
      },
      {
        name:'积分流水',
        path:'/mallMenu/flows',
        // access: 'normalRouteFilter',
        access: 'adminRouteFilter',
        routes:[
          {
            name:'企业积分流水',
            path:'/mallMenu/flows/tenant',
            component: './Flows/Tenant',
            // access: 'normalRouteFilter',
            access: 'adminRouteFilter',
          },
          {
            name:'用户积分流水',
            path:'/mallMenu/flows/customers',
            component: './Flows/Customers',
            // access: 'normalRouteFilter',
            access: 'adminRouteFilter',
          },
        ]
      },
      {
        name:'订单中心',
        path:'/mallMenu/orders',
        // access: 'normalRouteFilter',
        routes:[
          {
            name:'订单管理',
            path:'/mallMenu/orders/list',
            component: './Orders/List',
            // access: 'normalRouteFilter',
          },
          {
            name:'供货商订单管理',
            path:'/mallMenu/orders/supplier',
            component: './Orders/Supplier',
            // access: 'normalRouteFilter',
          },
          {
            name:'实物发货',
            path:'/mallMenu/orders/deliver',
            component: './Orders/Deliver',
            // access: 'normalRouteFilter',
          },
        ]
      },
      {
        name:'商品中心',
        path:'/mallMenu/commodity',
        // access: 'normalRouteFilter',
        routes:[
          {
            name:'类目管理',
            path:'/mallMenu/commodity/category',
            component: './Commodity/Category',
            // access: 'normalRouteFilter',
          },
          {
            name:'品牌管理',
            path:'/mallMenu/commodity/brand',
            component: './Commodity/Brand',
            // access: 'normalRouteFilter',
          },
          {
            name:'产品管理',
            path:'/mallMenu/commodity/product',
            component: './Commodity/Product',
            // access: 'normalRouteFilter',
          },
          {
            name:'商品管理',
            path:'/mallMenu/commodity/detail',
            component: './Commodity/Detail',
            // access: 'normalRouteFilter',
          },
          {
            name:'属性管理',
            path:'/mallMenu/commodity/attrs',
            component: './Commodity/Attrs',
            // access: 'normalRouteFilter',
          },
          {
            name:'商品生成列表',
            path:'/mallMenu/commodity/speedGenerator/list',
            component: './Commodity/SpeedGenerator',
            // access: 'normalRouteFilter',
          },
          {
            name:'商品移植',
            path:'/mallMenu/commodity/transplant',
            component: './Commodity/Transplant',
            // access: 'normalRouteFilter',
          },
          {
            name:'供货商商品移植',
            path:'/mallMenu/commodity/supplier/transplant',
            component: './Commodity/SupplierTransplant',
            // access: 'normalRouteFilter',
          },
        ]
      },
    ]
  },
  {
    name: '营销平台管理',
    path: '/test2',
    icon: 'smile',
    // access: 'normalRouteFilter',
    routes:[
      {
        path: '/test2/test2-1',
        name: 'test2-1',
        icon: 'smile',
        component: './TestPageTwo/TestPageTwoOne',
        // access: 'normalRouteFilter',
      }
    ]
  },
  {
    path: '/',
    redirect: '/mallMenu/companyManager/weChartManager',
  },
  {
    component: './404',
  },
];
