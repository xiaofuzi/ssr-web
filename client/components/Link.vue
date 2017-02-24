<template>
	<a :href="path">
		<slot></slot>	
	</a>
</template>
<script>
	export default {
		data () {
			return {}
		},
		props: {
			to: String
		},
		computed: {
			path () {
				return this.to;
			}
		},
		mounted () {
		}
	}
</script>