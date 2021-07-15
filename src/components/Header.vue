<template>
  <div class="header">
    <div class="header__about">
      <h2 class="header__title">{{block.title}}</h2>
      <img class="header__svg" src="@/assets/MaskGroup.svg" v-scroll="handleScroll"/>
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7784 8.29443L11.9172 0.27244C11.6933 0.0110899 11.3503 -0.0709494 11.0517 0.0644044C10.7519 0.201064 10.5555 0.527915 10.5555 0.891542V4.75413H10.2917C4.61704 4.75413 0 9.95241 0 16.3415V18.1241C0 18.5376 0.258607 18.8823 0.616365 18.9763C0.674542 18.9928 0.732525 19 0.790509 19C1.08932 19 1.37537 18.8026 1.51356 18.4925C2.99775 15.1494 5.98178 13.0732 9.30153 13.0732H10.5555V16.9355C10.5555 17.2994 10.7519 17.6262 11.0517 17.7616C11.3483 17.8982 11.6933 17.8151 11.9172 17.5535L18.7784 9.53155C19.0739 9.18577 19.0739 8.64152 18.7784 8.29443Z" fill="#292941"/>
      </svg>
    </div>
    <p class="header__text">{{block.text}}</p>
  </div>
</template>

<script>
export default {
  props: ['block'],
  methods: {
    handleScroll: function (evt, el) {
    //   const header = this.$el.querySelector(".header");
      const title = this.$el.querySelector(".header__title")
      const text = this.$el.querySelector(".header__text")
      console.log("hey");
      if (window.scrollY > 10) {
        el.setAttribute("style", "opacity: 1; transform: translate3d(0, 0, 0)")
        title.setAttribute("style", "opacity: 0; transform: translate3d(0, 0, 0)");
        text.setAttribute("style", "display: none")
        // this.$refs.header.classList.add('header__narrow')
      }
      if (window.scrollY < 10) {
        el.setAttribute("style", "opacity: 0; transform: translate3d(0, 0, 0)")
        title.setAttribute("style", "opacity: 1; transform: translate3d(0, 0, 0)");
        text.setAttribute("style", "display: block")
        // this.$refs.header.classList.remove('header__narrow')
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin: 0 auto;
  padding: 114px 45px 50px;
  max-width: 850px;
  background: #fff;
  position: fixed;
  max-width: 850px;
  width: 100%;
  top: 0;
  left: calc(50% - 470px);
  z-index: 5;
}
.header__about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.header__title {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #292941;
  margin: 0;
  transition: 0.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  opacity: 1;
}

.header__text {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #292941;
  opacity: 0.5;
  margin: 18px 0 0;
}
.header__svg {
  position: absolute;
  top: 0;
  left: calc(50% - 22.5px);
  transition: 0.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  opacity: 0;
  z-index: 15;
}
.header__narrow {
    padding: 81px 45px 0;
}
</style>