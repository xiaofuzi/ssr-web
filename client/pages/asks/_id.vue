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

  .main-wrap {
      .footer {
          margin: 20px;
          padding: 10px;
      }
  }
</style>
<template>
  <section class="page-wrapper container">
    <h2 class="title">
        A place to discuss questions about web.
    </h2>
    <div class="main-wrap">
        <ul>
            <li class="" v-for='issue in renderIssues'>
                <div class="box">
                    <div class="box-title">
                        <a-link :to='"/comments/" + issue.number + "?title=" + issue.title'><h3>{{issue.title}}</h3></a-link>
                    </div> 
                    <div class="post-meta">
                    </div>
                    <div class="post-summary" v-html='issue.body'></div>
                </div>
            </li>
        </ul>
        <div class="footer">
            <nav aria-label="">
              <ul class="pager">
                <li :class="preClass"><a href="javascript:void(0);" v-on:click='onPrePage'><span aria-hidden="true">&larr;</span> Pre</a></li>
                <li :class="nextClass"><a href="javascript:void(0);" v-on:click='onNextPage'>Next <span aria-hidden="true">&rarr;</span></a></li>
              </ul>
            </nav>
        </div>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'
import router from '~plugins/router'
import aLink from '~components/Link.vue';

let LinkTo;

export default {
  data ({ params, error }) {
    return axios.get(`/api/ask/${params.id}`)
    .then((res) => {
      return { 
          issues: res.data,
          pageSize: 10,
          currentPage: 1,
          path: ''
        }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Posts not found' })
    })
  },
  computed: {
      renderIssues () {
          let fisrt = (this.currentPage - 1) * this.pageSize,
              last = this.currentPage * this.pageSize;

          return this.issues.slice(fisrt, last);
      },
      preClass () {
          return {
            previous: true,
            disabled: this.currentPage == 1 ? true : false
          }
      },
      nextClass () {
          let pageNum = this.issues.length/this.pageSize;
          let maxPage = parseFloat(pageNum) > parseInt(pageNum) ? parseInt(pageNum) + 1: parseInt(pageNum);
          return {
            next: true,
            disabled: this.currentPage == maxPage ? true : false
          }
      },
      hasPre () {
          return this.currentPage == 1 ? true : false;
      },
      hasNext () {
          let pageNum = this.issues.length/this.pageSize;
          let maxPage = parseFloat(pageNum) > parseInt(pageNum) ? parseInt(pageNum) + 1: parseInt(pageNum);
          
          return this.currentPage == maxPage ? true : false;
      }
  },
  methods: {
      onPrePage () {
          if (this.hasPre) {
            return ;
          }
          this.currentPage -= 1;
          let url = this.path + '?currentPage=' + this.currentPage;
          LinkTo(url);
      },
      onNextPage () {
          if (this.hasNext) {
            return ;
          }

          this.currentPage += 1;
          let url = this.path + '?currentPage=' + this.currentPage;
          LinkTo(url);
      }
  },
  components: {
    aLink
  },
  head () {
    return {
      title: `Asked questions`
    }
  },
  watch: {

  },
  mounted () {
      this.currentPage = Number(this.$route.query.currentPage);
      this.path = window.location.pathname;

      LinkTo = router(window);
  }
}
</script>

