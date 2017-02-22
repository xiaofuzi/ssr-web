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
var basePath = '/nuxt-blog';

export default {
    data () {
        return {
            navItems: [
                {
                    text: 'Home',
                    url: basePath + '/'
                },
                {
                    text: 'Posts',
                    url: basePath + '/page/1'
                },
                // {
                //     text: 'Lab',
                //     url: '/lab'
                // },
                {
                    text: 'About',
                    url: basePath + '/about'
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

