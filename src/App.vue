<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
<!--    在home，search显示的，在登录，注册隐藏-->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Header,Footer
  }
}
</script>

<style>

</style>
