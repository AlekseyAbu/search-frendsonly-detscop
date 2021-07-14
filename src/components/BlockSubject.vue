<template>
  <section class="friends">
    <div class="block">
      <div class="header">
        <router-link class="title" :to="block.path">{{block.title}}</router-link>
        <p class="counter">{{block.counter}}</p>
      </div>
      <div class="content">
        <swiper>
        <swiper-slide>
          <ContentBlock 
            v-for="card of cards"
            :key="card.id"
            v-bind:card="card"
        />
        </swiper-slide>
      </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import ContentBlock from "@/components/ContentBlock.vue";
import data from "@/data/data.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";

export default {
  props:["block"],
  components: {
    ContentBlock,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cards: data,
    };
  }
};
</script>

<style scoped>
.block{
    max-width: 940px;
    margin: 0 auto;
    padding: 0 0 30px;
    background: #fff;
    overflow: hidden;
    overflow-x: scroll;
    white-space:nowrap;
}

.header {
  margin: 0 45px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #292941;
  margin: 0;
  text-decoration: none;
  font-display: swap;
}
.counter {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #292941;
  opacity: 0.5;
  margin: 0;
}
.content {
  max-width: 1013px;
  width: 1013px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>