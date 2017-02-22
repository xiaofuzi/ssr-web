<style>
	.navbar {
		background: #ffffff;
		border-bottom: 2px solid #C12127;
	}

	.container .logo{
		float: left;
	}

	.container .logo h2 {
		margin-top: 10px;
		font-weight: 900;
	}

	.container .logo a {
		text-decoration: none;
		font-weight: 900;
	}
</style>
<template>
	<nav class="navbar navbar-default main-menu">
		<div class="container">
			<div class="logo">
				<nuxt-link to="/">
					<h2>ffe</h2>
				</nuxt-link>
			</div>
			<div class="nav-item">
				<ul class="nav navbar-nav navbar-right">
					<li v-for='item in navItems'>
						<nuxt-link :to="item.url">{{item.text}}</nuxt-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
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
