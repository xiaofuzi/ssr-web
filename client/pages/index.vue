<style>
   .ellipsis-l3 {
         -webkit-line-clamp: 3;
   }
  .box {
      background: #ffffff;
      box-shadow: 0 0 0 0 rgba(163,162,162,0.50);
      margin: 20px;
      padding: 20px;
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 150px;
  }

  .box .post-meta {
        color: #666666;
        padding-left: 5px;
  }

  .box .post-meta span {
        display: inline-block;
        margin-right: 10px;
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
        A place to share news and updates about ffe.
    </h2>
    <div class="main-wrap">
        <ul>
            <li class="col-md-6" v-for='post in newPosts.data'>
                <div class="box">
                    <div>
                        <a-link :to='"/posts/" + post.meta.id'><h3>{{post.meta.title}}</h3></a-link>
                    </div> 
                    <div class="post-meta">
                        <span>{{ post.meta.strTag}}</span>
                        <span>{{ post.meta.createTime }}</span>
                    </div>
                    <div class="post-summary" v-html='post.summary'></div>
                </div>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios';
import aLink from '~components/Link.vue';

export default {
  async data () {
    let { data } = await axios.get('/api/posts/new');
    return {
      newPosts: data
    }
  },
  components: {
        aLink
  },
  head () {
    return {
      title: 'ffe hot posts'
    }
  }
}
</script>
