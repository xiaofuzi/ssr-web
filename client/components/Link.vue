<template>
	<a :href="path">
		<slot></slot>	
	</a>
</template>
<script>
/**
 * fix nuxt-link generate error
 */
let baseUrl = '/ssr-web/';

	export default {
		data () {
			return {}
		},
		props: {
			to: String
		},
		computed: {
			path () {
				return baseUrl + this.to;
			}
		},
		mounted () {
		}
	}
</script>