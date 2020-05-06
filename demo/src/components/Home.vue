<style scoped lang="stylus">
div
  display flex
  justify-content center
  align-items center
  font-size 20px
  
a
  text-decoration none
  color #fff
  background-color #42b983
  margin-left 10px
  padding 5px 10px
  border-radius 5px
</style>

<template>
<div v-bind:style="{height: height + 'px'}">
    Welcome!
    <router-link to="/list">Start</router-link> 
</div>

 
</template>

<script>

export default {
    data () {
        return {
            height: 0,
            
        };
    },
    mounted(){
      const self = this
      
      self.height = document.body.clientHeight - 50;
    }
};
</script>
