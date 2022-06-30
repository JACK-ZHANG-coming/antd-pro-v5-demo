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
    // component: './TestPageOne',
    routes:[
      {
        name:'微信平台管理',
        path:'/mallMenu/companyManager',
        // icon:'setting',
        routes:[
          {
            name:'公众号管理',
            path:'/mallMenu/companyManager/weChartManager',
            // icon:'setting',
            component: './CompanyManager/WeChartManager',
          }
        ]
      },
      {
        name:'积分管理',
        path:'/mallMenu/corpPointsPool',
        routes:[
          {
            name:'积分账户',
            path:'/mallMenu/corpPointsPool/pointAccounts',
            component: './CorpPointsPool/PointAccounts',
          },
          {
            name:'积分分配',
            path:'/mallMenu/corpPointsPool/distPoints',
            component: './CorpPointsPool/DistPoints',
          },
        ]
      },
      {
        name:'积分流水',
        path:'/mallMenu/flows',
        routes:[
          {
            name:'企业积分流水',
            path:'/mallMenu/flows/tenant',
            component: './Flows/Tenant',
          },
          {
            name:'用户积分流水',
            path:'/mallMenu/flows/customers',
            component: './Flows/Customers',
          },
        ]
      },
      {
        name:'订单中心',
        path:'/mallMenu/orders',
        routes:[
          {
            name:'订单管理',
            path:'/mallMenu/orders/list',
            component: './Orders/List',
          },
          {
            name:'供货商订单管理',
            path:'/mallMenu/orders/supplier',
            component: './Orders/Supplier',
          },
          {
            name:'实物发货',
            path:'/mallMenu/orders/deliver',
            component: './Orders/Deliver',
          },
        ]
      },
      {
        name:'商品中心',
        path:'/mallMenu/commodity',
        routes:[
          {
            name:'类目管理',
            path:'/mallMenu/commodity/category',
            component: './Commodity/Category',
          },
          {
            name:'品牌管理',
            path:'/mallMenu/commodity/brand',
            component: './Commodity/Brand',
          },
          {
            name:'产品管理',
            path:'/mallMenu/commodity/product',
            component: './Commodity/Product',
          },
          {
            name:'商品管理',
            path:'/mallMenu/commodity/detail',
            component: './Commodity/Detail',
          },
          {
            name:'属性管理',
            path:'/mallMenu/commodity/attrs',
            component: './Commodity/Attrs',
          },
          {
            name:'商品生成列表',
            path:'/mallMenu/commodity/speedGenerator/list',
            component: './Commodity/SpeedGenerator',
          },
          {
            name:'商品移植',
            path:'/mallMenu/commodity/transplant',
            component: './Commodity/Transplant',
          },
          {
            name:'供货商商品移植',
            path:'/mallMenu/commodity/supplier/transplant',
            component: './Commodity/SupplierTransplant',
          },
        ]
      },
    ]
  },
  {
    name: '营销平台管理',
    path: '/test2',
    icon: 'smile',
    routes:[
      {
        path: '/test2/test2-1',
        name: 'test2-1',
        icon: 'smile',
        component: './TestPageTwo/TestPageTwoOne',
      }
    ]
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
