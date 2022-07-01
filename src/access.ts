/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

/**
 * 根据返回是否管理员状态值配置路由菜单权限
 * @param initialState 
 * @returns 
 */
export default function access(initialState: {
  currentUser?: API.CurrentUser;
  isAdmin?: boolean;
  hasRoutes?: string[];
} | undefined) {
  let { currentUser, isAdmin = false, hasRoutes = [] } = initialState ?? {};
  // 配置是否管理员权限
  isAdmin = true;
  // isAdmin = false;
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    adminRouteFilter: () => isAdmin, // 只有管理员可访问
  };
}

/**
 * 根据返回的路由菜单列表配置路由菜单权限
 * @param initialState 
 * @returns 
 */
// export default function access(initialState: {
//   currentUser?: API.CurrentUser;
//   isAdmin?: boolean;
//   hasRoutes?: string[];
// } | undefined) {
//   let { currentUser, isAdmin = false, hasRoutes = [] } = initialState ?? {};
//   // 配置是否管理员权限
//   isAdmin = true;
//   // 配置路由权限
//   hasRoutes = ['权益平台管理', '微信平台管理', '公众号管理', '商品中心', '类目管理', '品牌管理', '产品管理', '商品管理', '属性管理', '商品生成列表']
//   return {
//     canAdmin: currentUser && currentUser.access === 'admin',
//     // adminRouteFilter: () => isAdmin, // 只有管理员可访问
//     normalRouteFilter: (route) => hasRoutes.includes(route.name), // initialState 中包含了的路由才有权限访问
//   };
// }
