<style lang='less'>
   .ellipsis-l3 {
         -webkit-line-clamp: 3;
   }
  .box {
      background: #ffffff;
      box-shadow: 0 0 0 0 rgba(163,162,162,0.50);
      margin: 20px;
      padding: 20px;

      .box-title {
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
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
        A place to discuss questions about web.
    </h2>
    <div class="main-wrap">
        <ul>
            <li class="" v-for='issue in issues'>
                <div class="box">
                    <div class="box-title">
                        <a-link :to='"/comments/" + issueId + "#" + issue.title'><h3>{{issue.title}}</h3></a-link>
                    </div> 
                    <div class="post-meta">
                    </div>
                    <div class="post-summary" v-html='issue.body'></div>
                </div>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'
import aLink from '~components/Link.vue';

export default {
  data ({ params, error }) {
    return axios.get(`/api/ask/${params.id}`)
    .then((res) => {
      return { 
        issues: res.data,
        issueId: params.id 
        }
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
      title: `Archive list`
    }
  }
}
</script>

