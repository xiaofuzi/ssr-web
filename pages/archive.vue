<style scoped>
.title
{
  margin-top: 30px;
}

.pageWrap li {

}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
<template>
  <section class="container">
    <h1 class="title">
      Archive
    </h1>
    <div class="pageWrap">
      <ul>
           <li v-for='post in posts.data'>
            {{post.meta.title}}
          </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  data ({ params, error }) {
    return axios.get('/api/posts')
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

