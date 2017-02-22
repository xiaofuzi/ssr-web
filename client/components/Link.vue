<template>
	<a :href="path">
		<slot></slot>	
	</a>
</template>
<script>
var config = {
	baseUrl: '/nuxt-blog'
}
	export default {
		data () {
			return {}
		},
		props: {
			to: String
		},
		computed: {
			path () {
				return config.baseUrl + this.to;
			}
		},
		mounted () {
		}
	}
</script>