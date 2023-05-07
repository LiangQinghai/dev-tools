<template>
	<template v-for="subItem in menuList" :key="subItem.path">
		<a-sub-menu
			v-if="subItem.children && subItem.children.length > 0"
			:key="subItem.path"
		>
			<template #icon v-if="subItem.icon">
				<component :is="subItem.icon" />
			</template>
			<template #title>
				{{ subItem.title }}
			</template>
			<menu-item :menu-list="subItem.children" />
		</a-sub-menu>
		<a-menu-item v-else :key="subItem.path" @click="clickMenuItem(subItem)">
			<template #icon v-if="subItem.icon">
				<component :is="subItem.icon" />
			</template>
			<template v-if="!subItem.isLink">
				{{ subItem.title }}
			</template>
			<template v-else>
				<a class="menu-href" :href="subItem.isLink" target="_blank">{{
					subItem.title
				}}</a>
			</template>
		</a-menu-item>
	</template>
</template>

<script setup lang="ts">
import { Menu } from '@/types/global';
import { useRouter } from 'vue-router';
defineProps<{ menuList: Menu.MenuOptions[] }>();

const router = useRouter();
const clickMenuItem = (menuOption: Menu.MenuOptions) => {
	router.push({ path: menuOption.path });
};
</script>
