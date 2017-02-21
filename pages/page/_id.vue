<style scoped>
  .page-wrapper {
      background: #ffffff;
  }

  .page-wrapper .pageWrap ul {
    padding-left: 40px;
    margin-bottom: 40px;
  }

  .page-wrapper .pageWrap li {
    margin-bottom: 10px;
  }

  .page-wrapper .pageWrap li a{
    color: #777;
    font-weight: 500;
    text-decoration: none;
  }

  .page-wrapper .pageWrap li a:hover{
    color: #333;
  }
</style>
<template>
  <section class="container page-wrapper">
    <h1 class="title">
      Archive
    </h1>
    <div class="pageWrap">
      <ul>
           <li v-for='post in posts.data'>
              <nuxt-link :to='"/posts/" + post.meta.id'>{{post.meta.title}}</nuxt-link> 
          </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  data ({ params, error }) {
    return axios.get(`/api/page/${params.id}`)
    .then((res) => {
      return { posts: res.data }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Posts not found' })
    })
  },
  head () {
    return {
      title: `Archive list`
    }
  }
}
</script>

