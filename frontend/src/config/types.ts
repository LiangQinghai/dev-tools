import { RouteMeta } from 'vue-router';

export interface MenuDefine {
	title: string;
	path: string;
	icon?: string;
	redirect?: string;
	component?: string;
	name?: string;
	meta?: RouteMeta;
	children?: MenuDefine[];
}
