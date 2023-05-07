import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import { setRouteEmitter } from '@/utils/route-listener';
import menuList from '@/config/menu.json';
import { Layout } from '@/routes/constant';
import { MenuDefine } from '@/config/types';

// 设置nprogress
NProgress.configure({ showSpinner: false });

// 导入router
// noinspection JSDeprecatedSymbols
const metaRouters = import.meta.globEager('./modules/*.ts');

// 路由表
export const routerArray: RouteRecordRaw[] = [];

Object.keys(metaRouters).forEach((item) => {
	// @ts-ignore
	Object.keys(metaRouters[item]).forEach((key: any) => {
		// @ts-ignore
		routerArray.push(...metaRouters[item][key]);
	});
});

// 动态加载json路由设置
const modules = import.meta.glob('../views/**/*.vue');
menuList
	.map((item) => {
		// @ts-ignore
		return { ...item } as MenuDefine;
	})
	.forEach((item: MenuDefine) => {
		const routeRecord: RouteRecordRaw = {
			children: [],
			component: Layout,
			path: item.path,
			redirect: item.redirect,
			meta: { ...item.meta, title: item.title },
		};
		if (item.children && item.children.length > 0) {
			if (!item.redirect) {
				routeRecord.redirect = item.children[0].path;
			}
			item.children.forEach((child) => {
				const importComponent: string = child.component
					? child.component?.replace('@/', '../')
					: `../views${child.path}.vue`;
				const childRoute: RouteRecordRaw = {
					path: child.path,
					name: child.name,
					component: modules[importComponent],
					meta: { ...child.meta, key: child.name, title: child.title },
				};
				routeRecord.children.push(childRoute);
			});
		}
		routerArray.push(routeRecord);
	});

/**
 * @param path ==> 路由路径
 * @param name ==> 路由名称
 * @param redirect ==> 路由重定向
 * @param component ==> 路由组件
 * @param meta ==> 路由元信息
 * @param meta.requireAuth ==> 是否需要权限验证
 * @param meta.keepAlive ==> 是否需要缓存该路由
 * @param meta.title ==> 路由标题
 * @param meta.key	==> 路由key,用来匹配按钮权限
 * */
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: { name: 'home' },
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home/index.vue'),
		meta: {
			requiresAuth: false,
			title: '登录页',
			key: 'home',
		},
	},
	...routerArray,
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach(async (to) => {
	// emit route change
	setRouteEmitter(to);
});
export default router;
