<template>
	<a :href="path">
		<slot></slot>	
	</a>
</template>
<script>
import config from '../../nuxt.config.js';

	export default {
		data () {
			return {}
		},
		props: {
			to: String
		},
		computed: {
			path () {
				return config.router.base + this.to;
			}
		},
		mounted () {
		}
	}
</script>