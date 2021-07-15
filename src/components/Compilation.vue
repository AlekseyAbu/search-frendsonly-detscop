<template>
  <div>
    <router-link class="button__back" to="/">
            <div class="button__svg"><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M3.97949 8.82102L0.175092 4.9321C-0.0583645 4.69346 -0.0583645 4.30654 0.175092 4.0679L3.97949 0.178982C4.21294 -0.059661 4.59145 -0.0596609 4.82491 0.178982C5.05836 0.417625 5.05836 0.804543 4.82491 1.04319L1.44322 4.5L4.82491 7.95681C5.05836 8.19546 5.05836 8.58237 4.82491 8.82102C4.59145 9.05966 4.21294 9.05966 3.97949 8.82102Z" fill="#292941" fill-opacity="0.5"/></svg></div>
            <p class="button__back-text">Назад</p>
      </router-link>
    <Menu />
    <Header v-bind:block="block"/>
    <div class="compilation__content">
      <swiper>
        <swiper-slide >
          <ContentBlock v-for="card of cards" :key="card.id" v-bind:card="card"/>
        </swiper-slide>
      </swiper>
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "../components/Menu.vue"
import ContentBlock from "../components/ContentBlockPages.vue"
import Footer from "../components/Footer.vue"
import data from "../data/data.json"
import Header from '../components/Header.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
  props: ['block'],
  components: {
    Menu,
    ContentBlock,
    Footer,
    Header,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      cards: data,
    };
  },
  methods: {
    }
};
</script>

<style scoped>
.compilation {
  margin: 0;
  padding: 0;
  width: 100%;
  margin: 0 auto;
  background: #fff;
}
.compilation__about {
  margin: 0 auto;
  padding: 114px 45px 50px;
  max-width: 850px;
  background: #fff;
}
.compilation__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.compilation__title {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #292941;
  margin: 0;
}

.compilation__text {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #292941;
  opacity: 0.5;
  margin: 18px 0 0;
}
.compilation__content {
  display: flex;
  flex-wrap: wrap;
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
  justify-content: flex-start;
  background: #fff;
  padding-top: 235px;
  padding-bottom: 26px;
}
.button__back {
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
  background: #e5e5e5;
  text-decoration: none;
}
.button__back-text{
    margin: 0;
}
.button__svg{
    margin-right: 10px;
}
.header__svg{
    position: absolute;
    top: 0;
    left: calc(50% - 22.5px);
    transition: .5s all cubic-bezier(0.39, 0.575, 0.565, 1);
    opacity: 0;
}
</style>
