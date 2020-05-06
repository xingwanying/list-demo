<style lang="stylus">
html 
  height 100%
  body
    font-size 16px
    overflow hidden 
    overflow-y auto
    margin 0
    height 100%
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 0px
  header
    height 40px
    margin-top 0px
    width 100%
    position fixed
    top 0
    box-sizing border-box
    padding-top 10px
    background-color #42b983
    font-weight 600
    z-index 999
    color #fff
    .back
      width 15px
      height 15px
      position absolute
      left 8px
      top 12px
  .container
    margin 50px 5px 10px 5px
</style>

<template>
  <div id="app">
    <header>
      <router-link v-if="$route.name === 'List'"  to="/index">
        <svg t="1588690213229" class="icon back" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4073" width="15" height="15"><path d="M736.256 1024 224.256 512 736.256 0 799.744 63.744 351.488 512 799.744 960.512Z" p-id="4074" fill="#ffffff"></path>
        </svg>
    </router-link> 

    Fox Album</header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

