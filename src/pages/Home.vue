<template>
  <body>
      <router-link class="button__back" to="/">
            <div class="button__svg">
                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M3.97949 8.82102L0.175092 4.9321C-0.0583645 4.69346 -0.0583645 4.30654 0.175092 4.0679L3.97949 0.178982C4.21294 -0.059661 4.59145 -0.0596609 4.82491 0.178982C5.05836 0.417625 5.05836 0.804543 4.82491 1.04319L1.44322 4.5L4.82491 7.95681C5.05836 8.19546 5.05836 8.58237 4.82491 8.82102C4.59145 9.05966 4.21294 9.05966 3.97949 8.82102Z" fill="#292941" fill-opacity="0.5"/></svg>
            </div>
            <p class="button__back-text">Назад</p>
      </router-link>
    <Menu />
    <h2 class="block__title">Интересное</h2>
    <BlockSubject v-for="block in visibleList" :key="block.id" v-bind:block="block"/>
    <Footer />
  </body>
</template>

<script>
import Menu from "../components/Menu.vue"
import ContentBlock from "../components/ContentBlock.vue"
import Footer from "../components/Footer.vue"
import BlockSubject from '../components/BlockSubject.vue'
import CardData from '../data/blocks.json'

export default {
  components: {
    Menu,
    ContentBlock,
    Footer,
    BlockSubject
  },
  data(){
    return{
      CardData: CardData,
    }
  },
  computed: {
    visibleList: function(){
      const arr =  this.CardData.map(item => {
        if(item.counter >= 1000000){
          item.counter = ((item.counter/1000000).toFixed(1) + 'M')
        }
        if(item.counter <= 1000000){
          item.counter = ((item.counter/100000).toFixed(0) + 'K')
        }
        return item
      })
      return arr
    }
  }
};
</script>

<style scoped>
.block__title{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #292941;
    margin: 0 auto;
    padding: 114px 0 60px;
    max-width: 940px;
    background: #fff;
    font-display: swap;
}
.button__back{
    position: absolute;
    top: 95px;
    left: 27px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: rgba(41, 41, 65, 0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    background: transparent;
    text-decoration: none;
}
.button__back-text{
    margin: 0;
}
.button__svg{
    margin-right: 10px;
}
</style>