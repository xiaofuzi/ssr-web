<style>
	
</style>
<template>
	<header class="nav">
		<div class="logo">
			<nuxt-link to="/index">
				<h2>News</h2>
			</nuxt-link>
		</div>
		<div class="nav-item">
			<ul>
				<li v-for='item in navItems'>
					<nuxt-link :to="item.url">{{item.text}}</nuxt-link>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>
	export default {
		props: {
			navItems: {
				type: Array,
				required: true
			},
			logo: {
				type: String
			}
		}
	}
</script>
