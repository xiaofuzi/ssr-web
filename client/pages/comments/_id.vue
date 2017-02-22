<style lang='less'>
   .ellipsis-l3 {
         -webkit-line-clamp: 3;
   }
  .box {
      background: #ffffff;
      box-shadow: 0 0 0 0 rgba(163,162,162,0.50);
      margin: 20px;
      padding: 20px;
      overflow: hidden;
      display: flex;
      display: webkit-flex;

      .box-title {
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
      }

      .user-info {
        min-width: 70px;
      }

      .comment-body {
            flex: 1;
            webkit-flex: 1;
      }

      .avatar {
            width: 50px;
            height: 50px;
            margin: auto auto;
            margin-bottom: 10px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
      }
  }

  .box:hover {
      box-shadow: 0 4px 31px 0 rgba(163,162,162,0.70);
  }

  .box a {
        text-decoration: none;
  }

  .box a:hover {
        color: #C12127;
        transition: color 0.3s ease-in-out;
  }

  .box .post-summary {
        overflow: scroll;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-height: 250px;
  }

  .box .post-meta {
        color: #666666;
        padding-left: 5px;
  }

  .box .post-meta span {
        display: inline-block;
        margin-right: 10px;
  }

  .main-wrap {
      .no-data {
          text-align: center;
          padding: 20px;
          margin-top: 30px;
          background-color: #ffffff;
      }
  }

  .main-wrap ul {
        padding: 0;
  }

  .main-wrap li {
        list-style: none;
  }
</style>
<template>
  <section class="page-wrapper container">
    <h2 class="title">
        {{title}}
    </h2>
    <div class="main-wrap">
        <ul>
            <li class="">
                <div v-for='comment in comments' class="box">
                    <div class="user-info">
                        <div class="avatar">
                            <img :src="comment.user.avatar_url">
                        </div>
                        <p>{{comment.user.login}}</p>
                    </div>
                    <div class="comment-body" v-html='comment.body'></div>
                </div>
            </li>
        </ul>
        <div class="no-data" v-if='!hasData'>
            暂无数据
        </div>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'
import aLink from '~components/Link.vue';

export default {
  data ({ params, error }) {
    return axios.get(`/api/comments/${params.id}`)
    .then((res) => {
      return { 
        comments: res.data,
        title: '' 
      }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Posts not found' })
    })
  },
  computed: {
      hasData () {
          return this.comments.length > 0 ? true : false;
      }
  },
  components: {
    aLink
  },
  head () {
    return {
      title: `${this.title}`
    }
  },
  mounted () {
      this.title = this.$route.query.title;
  }
}
</script>

