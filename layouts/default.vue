<template>
  <div class="wrapper">
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
                    url: '/index'
                },
                {
                    text: 'Posts',
                    url: '/posts'
                },
                {
                    text: 'Lab',
                    url: '/lab'
                },
                {
                    text: 'About',
                    url: '/about'
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

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
