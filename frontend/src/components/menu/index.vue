<template>
	<a-menu
		:mode="topMenu ? 'horizontal' : 'vertical'"
		:style="{ width: '100%', height: '100%' }"
		:show-collapse-button="appStore.device !== 'mobile'"
		:auto-open="false"
		:level-indent="34"
		:onCollapse="setCollapse"
		:default-selected-keys="activeMenu"
		:selected-keys="activeMenu"
	>
		<menu-item :menu-list="menuList" />
	</a-menu>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store';
import { computed } from 'vue';
import MenuItem from '@/components/menu/menuItem.vue';
import menuList from '@/config/menu.json';
import { useRoute } from 'vue-router';

const route = useRoute();

const appStore = useAppStore();
const topMenu = computed(() => appStore.topMenu);
// 计算当前路由地址
const activeMenu = computed((): Array<string> => {
	const path = route.path;
	const res: string[] = [route.matched[0].path, path];
	if (path.endsWith('/index')) {
		const lastIndexOf = path.lastIndexOf('/');
		const substring = path.substring(0, lastIndexOf);
		res.push(substring);
	}
	return res;
});

const setCollapse = (val: boolean) => {
	if (appStore.device === 'desktop')
		appStore.updateSettings({ menuCollapse: val });
};
</script>

<style lang="less" scoped></style>
