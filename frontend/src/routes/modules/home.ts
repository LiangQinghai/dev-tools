import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/routes/constant';

// 首页模块
const homeRouter: Array<RouteRecordRaw> = [
	{
		path: '/home',
		component: Layout,
		redirect: '/home/index',
		children: [
			{
				path: '/home/index',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					keepAlive: false,
					requiresAuth: true,
					title: '首页',
					key: 'home',
				},
			},
		],
	},
];

export default homeRouter;
