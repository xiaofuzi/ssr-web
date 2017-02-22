<style scoped>
  .page-wrapper {
      background: #ffffff;
  }

  .page-wrapper .pageWrap {
    padding-bottom: 200px;
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
    <h2 class="title">
      Who am I?
    </h2>
    <div class="pageWrap">
      <p>
        近距离的了解当前行业各公司、团队、开发者的开发情况，加强了解，共同成长，为混乱的行业注入一股鲜泉。
      </p>
    </div>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  data ({ params, error }) {
      return {}
  },
  head () {
    return {
      title: `about ffe`
    }
  }
}
</script>

