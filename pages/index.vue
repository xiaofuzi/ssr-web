<style>
  .page-wrapper {
      background: #ffffff;
      box-shadow: 0 4px 31px 0 rgba(163,162,162,0.70);
  }
</style>
<template>
  <section class="page-wrapper container">
    <h1 class="title">
      USERS
    </h1>
    <ul>
      <li v-for='post in posts.data'>
        {{post.meta.title}}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  async data () {
    let { data } = await axios.get('/api/posts')
    return {
      posts: data
    }
  },
  head () {
    return {
      title: 'Posts'
    }
  }
}
</script>
