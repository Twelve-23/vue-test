<template>
	<div>
		<ol>
			<li v-for="(orderId, index) in orders" :key="index">
				{{ orderId }}
			</li>
		</ol>
	</div>
</template>

<script>
export default {
	computed: {
		orders () {
			return this.$store.getters.moreOrders
		}
	}
}
</script>
<style>
li {
	text-align: left;
}
</style>