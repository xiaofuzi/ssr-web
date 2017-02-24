<style>
  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  body {
      color: #3E3E41;
      font-weight: 300;
      font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, STXihei, "Microsoft YaHei", 微软雅黑, sans-serif;
  }

  ul {
      padding-left: 40px;  
  }

  .wrapper {
    background: #f5f5f5;
  }

</style>
<template>
  <div class="wrapper">
    <web-nav :nav-items='navItems'></web-nav>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import WebNav from '~components/Nav.vue'
import MyFooter from '~components/Footer.vue'

export default {
    data () {
        return {
            navItems: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Posts',
                    url: '/page/1'
                },
                {
                    text: 'About',
                    url:  '/about'
                }
            ]
        }
    },  
  components: {
    MyFooter,
    WebNav
  }
}
</script>

