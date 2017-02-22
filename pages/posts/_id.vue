<style>
    .post-wrapper {
        padding: 20px;
        background-color: #ffffff;
    }
</style>
<template>
    <div class="post-wrapper container">
        <div v-html='post.content'></div>
    </div>
</template>
<script>
    import axios from '~plugins/axios'

    export default {
      data ({ params, error }) {
        let id = parseInt(params.id) - 1;
        return axios.get(`/api/posts/${id}`)
        .then((res) => {
          return { post: res.data }
        })
        .catch((e) => {
          error({ statusCode: 404, message: 'Posts not found' })
        })
      },
      head () {
        return {
          title: `post list`
        }
      }
    }
</script>