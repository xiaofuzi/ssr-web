<style>
    .post-wrapper {
        padding: 20px;
        background-color: #ffffff;
    }

    .post-wrapper a {
        text-decoration: none;
    }

    .post-wrapper .post-meta {
        color: #666666;
        padding-left: 5px;
    }
</style>
<template>
    <div class="post-wrapper container">
        <div>
            <a-link :to='"/posts/" + post.meta.id'><h2>{{post.meta.title}}</h2></a-link>
        </div> 
        <div class="post-meta">
            <span>{{ post.meta.strTag}}</span>
            <span>{{ post.meta.createTime }}</span>
        </div>
        <div>
          <div v-html='post.content'></div>        
        </div>
    </div>
</template>
<script>
    import axios from '~plugins/axios'
    import aLink from '~components/Link.vue';

    export default {
      data ({ params, error }) {
        let id = parseInt(params.id);
        return axios.get(`/api/posts/${id}`)
        .then((res) => {
          return { post: res.data }
        })
        .catch((e) => {
          error({ statusCode: 404, message: 'Posts not found' })
        })
      },
      components: {
          aLink
      },
      head () {
        return {
          title: `post list`
        }
      }
    }
</script>