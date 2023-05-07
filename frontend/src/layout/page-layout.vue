<template>
	<div class="container">
		<router-view v-slot="{ Component, route }">
			<transition name="fade" mode="out-in" appear>
				<component
					:is="Component"
					v-if="!route.meta.keepAlive"
					:key="route.fullPath"
				/>
				<keep-alive v-else>
					<component :is="Component" :key="route.fullPath" />
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.container {
	padding: 0 20px 20px 20px;
	height: calc(100% - 40px);
	:deep(.content) {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		background-color: var(--color-bg-1);
		border-radius: 4px;
	}
}
</style>
