<style scoped lang="stylus">  
.img-list
  width 100%
  height auto
  .img-card
    width 100%
    height auto
    border-radius 10px
    min-height 200px
    background-color #fff
    margin 10px 0
    position relative
    .marked
      position absolute
      top -8px
      right 0
      z-index 1
    .unmarked
      position absolute
      bottom 25px
      right 10px
      z-index 1
    img
      width 100%
      height auto
      border-radius 10px
    .img-footer
        width 100%
        display block
        height 80px
        content '.'
        position absolute
        bottom 6px
        border-radius 10px
        background-image: linear-gradient(to top, rgb(16, 0, 0), rgba(255, 255, 255, 0));
.container
  display flex
  justify-content center
  align-items center
  .loading
    width 50px
    height 50px
</style>


<template>
<div>
    <div class="img-list" >
    <div v-for="item in marked" class="img-card">
      <svg v-on:click="cancel(item)" t="1588577594440" class="icon marked" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9323" width="50" height="50"><path d="M216 128h464c8.85 0 16 7.15 16 16v736c0 8.85-7.15 16-16 16-5.25 0-9.9-2.55-12.8-6.45l-219.2-264.5-219.7 265.15L216 880l12.3 10.2c-5.65 6.8-15.7 7.75-22.55 2.1-3.8-3.15-5.8-7.7-5.8-12.3V144c0.05-8.85 7.2-16 16.05-16z" fill="#E53935" p-id="9324"></path><path d="M696 278.1v339.75c-9.25 1.55-18.65 2.3-28.2 2.3-45.8 0-89.35-18.05-121.75-50.45-32.4-32.4-50.45-75.95-50.45-121.75s18.05-89.35 50.45-121.75c32.4-32.4 75.95-50.45 121.75-50.45 9.55 0.05 18.95 0.85 28.2 2.35z" fill="#BF3531" p-id="9325"></path><path d="M235.75 160c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m34-3.75c-1.65 0-3.15 1.1-3.6 2.7-0.7 2.4 1.1 4.8 3.6 4.8h7.5c1.65 0 3.15-1.1 3.6-2.7 0.7-2.4-1.1-4.8-3.6-4.8h-7.5z m52.5 0c-1.65 0-3.15 1.1-3.6 2.7-0.7 2.4 1.1 4.8 3.6 4.8h7.5c1.65 0 3.15-1.1 3.6-2.7 0.7-2.4-1.1-4.8-3.6-4.8h-7.5z m52.5 0c-1.65 0-3.15 1.1-3.6 2.7-0.7 2.4 1.1 4.8 3.6 4.8h7.5c1.65 0 3.15-1.1 3.6-2.7 0.7-2.4-1.1-4.8-3.6-4.8h-7.5z m52.5 0c-1.65 0-3.15 1.1-3.6 2.7-0.7 2.4 1.1 4.8 3.6 4.8h7.5c1.65 0 3.15-1.1 3.6-2.7 0.7-2.4-1.1-4.8-3.6-4.8h-7.5z m52.5 0c-1.65 0-3.15 1.1-3.6 2.7-0.7 2.4 1.1 4.8 3.6 4.8h7.5c1.65 0 3.15-1.1 3.6-2.7 0.7-2.4-1.1-4.8-3.6-4.8h-7.5z m52.5 0c-1.65 0-3.15 1.1-3.6 2.7-0.7 2.4 1.1 4.8 3.6 4.8h7.5c1.65 0 3.15-1.1 3.6-2.7 0.7-2.4-1.1-4.8-3.6-4.8h-7.5z m52.5 0c-1.65 0-3.15 1.1-3.6 2.7-0.7 2.4 1.1 4.8 3.6 4.8h7.5c1.65 0 3.15-1.1 3.6-2.7 0.7-2.4-1.1-4.8-3.6-4.8h-7.5z m52.5 0c-1.65 0-3.15 1.1-3.6 2.7-0.7 2.4 1.1 4.8 3.6 4.8h7.5c1.65 0 3.15-1.1 3.6-2.7 0.7-2.4-1.1-4.8-3.6-4.8h-7.5z m30.5 29.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m0 52.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5z m-27.5-2.95c2.2 2.75 6.75 1.05 6.65-2.5 0-0.85-0.3-1.65-0.85-2.3l-4.8-5.8c-2.2-2.75-6.75-1.05-6.65 2.5 0 0.85 0.3 1.65 0.85 2.3l4.8 5.8z m-33.5-40.4c2.2 2.75 6.75 1.05 6.65-2.5 0-0.85-0.3-1.65-0.85-2.3l-4.8-5.8c-2.2-2.75-6.75-1.05-6.65 2.5 0 0.85 0.3 1.65 0.85 2.3l4.8 5.8z m-33.5-40.45c2.2 2.75 6.75 1.05 6.65-2.5 0-0.85-0.3-1.65-0.85-2.3l-4.8-5.8c-2.2-2.75-6.75-1.05-6.65 2.5 0 0.85 0.3 1.65 0.85 2.3l4.8 5.8z m-33.5-40.4c2.2 2.75 6.75 1.05 6.65-2.5 0-0.85-0.3-1.65-0.85-2.3l-4.8-5.8c-2.2-2.75-6.75-1.05-6.65 2.5 0 0.85 0.3 1.65 0.85 2.3l4.8 5.8z m-33.45-40.45c2.2 2.75 6.75 1.05 6.65-2.5 0-0.85-0.3-1.65-0.85-2.3l-4.8-5.8c-2.2-2.75-6.75-1.05-6.65 2.5 0 0.85 0.3 1.65 0.85 2.3l4.8 5.8z m-33.5-40.4c2.2 2.75 6.75 1.05 6.65-2.5 0-0.85-0.3-1.65-0.85-2.3l-4.8-5.8c-2.2-2.75-6.75-1.05-6.65 2.5 0 0.85 0.3 1.65 0.85 2.3l4.8 5.8z m-27.75-26.4c2.6-3.2-1-7.65-4.7-5.7-0.4 0.25-0.8 0.55-1.1 0.9l-4.8 5.8c-2.6 3.2 1 7.65 4.7 5.7 0.4-0.25 0.8-0.55 1.1-0.9l4.8-5.8z m-33.5 40.45c2.6-3.2-1-7.65-4.7-5.7-0.4 0.25-0.8 0.55-1.1 0.9l-4.8 5.8c-2.6 3.2 1 7.65 4.7 5.7 0.4-0.25 0.8-0.55 1.1-0.9l4.8-5.8z m-33.5 40.4c2.6-3.2-1-7.65-4.7-5.7-0.4 0.25-0.8 0.55-1.1 0.9l-4.8 5.8c-2.6 3.2 1 7.65 4.7 5.7 0.4-0.25 0.8-0.55 1.1-0.9l4.8-5.8z m-33.5 40.45c2.6-3.2-1-7.65-4.7-5.7-0.4 0.25-0.8 0.55-1.1 0.9l-4.8 5.8c-2.6 3.2 1 7.65 4.7 5.7 0.4-0.25 0.8-0.55 1.1-0.9l4.8-5.8z m-33.45 40.4c2.6-3.2-1-7.65-4.7-5.7-0.4 0.25-0.8 0.55-1.1 0.9L300.5 747c-2.6 3.2 1 7.65 4.7 5.7 0.4-0.25 0.8-0.55 1.1-0.9l4.8-5.8z m-33.5 40.45c2.6-3.2-1-7.65-4.7-5.7-0.4 0.25-0.8 0.55-1.1 0.9l-4.8 5.8c-2.6 3.2 1 7.65 4.7 5.7 0.4-0.25 0.8-0.55 1.1-0.9l4.8-5.8z m-33.5 40.4c2.6-3.2-1-7.65-4.7-5.7-0.4 0.25-0.8 0.55-1.1 0.9l-4.8 5.8c-2.6 3.2 1 7.65 4.7 5.7 0.4-0.25 0.8-0.55 1.1-0.9l4.8-5.8z m-15.85-29.35c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z m0-52.5c0 1.65 1.1 3.15 2.7 3.6 2.4 0.7 4.8-1.1 4.8-3.6v-7.5c0-1.65-1.1-3.15-2.7-3.6-2.4-0.7-4.8 1.1-4.8 3.6v7.5z" fill="#212121" p-id="9326"></path><path d="M778.25 337.55c-28.25-28.25-67.3-45.75-110.45-45.75-43.15 0-82.2 17.5-110.45 45.75s-45.75 67.3-45.75 110.45c0 43.15 17.5 82.2 45.75 110.45s67.3 45.75 110.45 45.75c43.15 0 82.2-17.5 110.45-45.75S824 491.15 824 448c0-43.15-17.5-82.2-45.75-110.45z" fill="#FCCB0D" p-id="9327"></path><path d="M681.25 362.85l16.85 52.15 55.9-0.1c0-0.4 13.8 6.4 13.8 13.7 0 4.9-2.5 9.15-6.35 11.65l-44.7 32.35 17.4 53.15c2.35 7.25-1.6 15.05-8.8 17.4-4.85 1.6-9.9 0.35-13.45-2.8l-44.1-32.2-45.2 32.95 0.05 0.05c-6.15 4.5-14.8 3.15-19.25-3-2.9-3.95-3.35-8.95-1.7-13.2l17.1-52.3-45.3-32.75c-6.15-4.45-7.55-13.1-3.1-19.25 2.95-4.1 7.75-6.05 12.45-5.65l54.7 0.1 17.15-53.2-0.05-0.05c2.35-7.25 10.1-11.25 17.35-8.9 4.8 1.45 8.15 5.35 9.25 9.9z" fill="#424242" p-id="9328"></path>
      </svg>
      <img v-lazy="item">
    </div>
  </div>
  <div class="img-list" >
    <div v-for="item in list" class="img-card">
      <svg v-on:click="mark(item)" t="1588578165596" class="icon unmarked" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12485" width="30" height="30"><path d="M339.651042 341.097655 469.110756 58.828865C491.707678 8.534076 527.371795 8.880086 548.770042 59.60466L679.364582 341.097655M679.452297 340.474423 964.078942 371.359074C1018.894963 377.308079 1029.586705 411.333594 987.95719 447.35929L772.020879 666.738278M771.548333 663.5201 830.440373 945.270172C841.721615 999.241649 812.665359 1019.924563 765.538658 991.465092L517.688802 846.872395M517.485225 846.453572 267.723625 989.528794C219.879795 1016.935996 191.230298 995.693225 203.733911 942.078609L269.450995 660.288365M270.301116 660.710236 28.962399 447.35929C-12.667117 411.333594-1.975373 377.308079 52.840647 371.359074L338.533536 342.523883 336.275211 353.151657 338.788109 341.437007 679.762863 341.437007 771.253818 663.747471 517.557926 846.731194 270.278963 660.81351 270.301116 660.710236Z" p-id="12486" fill="#cccccc"></path>
      </svg>
      <img v-lazy="item">
      <div class="img-footer"></div>
    </div>
  </div>
  <div class="container">
      <loading v-if="loading"  class="loading"></loading>
    </div>
</div>

 
</template>

<script>
import axios from 'axios'
import loading from './Loading.vue'

axios.defaults.baseURL = 'https://mock.yonyoucloud.com/mock/6185'

export default {

    data () {
        return {
            list: [],
            marked: [],
            page: 1,
            loading: true
        };
    },
    mounted() {
      let self = this;
      self.init();
      self.throttle(self.scroll(), 500);
    },
    components: { 
      axios,
      loading
    },
    methods: {
        init() {
          let self = this;
          self.marked = JSON.parse(localStorage.getItem('marked')) || [];
          self.loadList();
        },
        scroll () {
          let self = this;
          window.onscroll = () => {
            if(self.getScrollTop() + self.getWindowHeight() == self.getScrollHeight() && self.page < 10) {
              self.loading = true;
              self.page ++;
            }
          };
        },
        loadList() {
            let self = this;

            axios
            .get('/image/fox/' + self.page)
            .then(response => {
              let data = response.data.message;
              if(self.marked) {
                for (let value of self.marked) {
                  let k = data.indexOf(value);
                  if(k !== -1) {
                      data.splice(k, 1);
                  }
                }
              }
              self.loading = false;
              self.list = self.list.concat(data);
            })
            .catch(error => {
                console.log(error, 'Conection error, please check your network');
            });
        },
        throttle(fn, interval = 500) {
           let canRun = true;
           return function () {
               if (!canRun) return;
               canRun = false;
               setTimeout(() => {
                   fn.apply(this, arguments);
                   canRun = true;
               }, interval);
           };
        },
        mark(id) {
          let self = this;
          self.list.splice(self.list.findIndex(item => item === id), 1);
          self.marked.push(id);
          self.sync();

        },
        cancel(id) {
          let self = this;
          self.marked.splice(self.marked.findIndex(item => item === id), 1);
          self.list.push(id);
          self.sync();
        },
        sync() {
          let self = this;
          localStorage.setItem('marked', JSON.stringify(self.marked));
        },
        getScrollTop(){
          let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
          if(document.body){
              bodyScrollTop = document.body.scrollTop;
          }
          if(document.documentElement){
              documentScrollTop = document.documentElement.scrollTop;
          }
          scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
          return scrollTop;
        },
        getScrollHeight(){
            let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if(document.body){
                bodyScrollHeight = document.body.scrollHeight;
            }
            if(document.documentElement){
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        },
        getWindowHeight(){
            let windowHeight = 0;
            if(document.compatMode == "CSS1Compat"){
                windowHeight = document.documentElement.clientHeight;
            }else{
                windowHeight = document.body.clientHeight;
            }
            return windowHeight;
        }
    },
    watch: {
      page: function (val) {
        let self = this;
        self.loadList();
      }
    }
};
</script>
