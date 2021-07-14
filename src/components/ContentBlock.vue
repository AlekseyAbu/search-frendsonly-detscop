<template>
  <div class="video__content">
      <img class="video__img" :src="card.url">
        <div class="content__counter" v-bind:class="{active: card.paid === 'true'}">
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.6087 4.33242C9.13043 4.62912 9.13043 5.37088 8.6087 5.66758L1.17391 9.89558C0.652174 10.1923 -4.30455e-07 9.8214 -4.04447e-07 9.228L-3.38356e-08 0.772003C-7.82773e-09 0.1786 0.652174 -0.192277 1.17391 0.104424L8.6087 4.33242Z" fill="white"/>
            </svg>
            <p class="video__counter">{{card.views}}</p>
        </div>
        <div class="video__paid" v-bind:class="{active: card.paid === 'false'}">
            <img class="video__paid-img" :src="card.avatar">
        </div>
  </div>
</template>

<script>
export default {
    props: ["card"],
    methods: {    
    }, 
}
</script>

<style scoped>
    .video__content{
        position: relative; 
        display: flex;
        margin-right: 2px; 
        max-width: 150;
        width: calc(20% - 2px);
        height: 296px;
        position: relative;
        overflow: hidden;
    }
    .video__img{
        max-width: 100%;
        height: 100%;
        background-size: cover;
        object-fit: cover;
        background-repeat: no-repeat; 
    }
    .video__content:nth-last-of-type{
        margin-right: 0; 
    }
    .content__counter{
        display: none;
        bottom: 20px;
        left: 20px;
        display: flex;
        align-items: center;
    }
    .video__counter{
        color: #fff;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin: 0;
        margin-left: 4.6px;
    }
    .video__paid{
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        width: 100%;
        height: 100%;
        display: none;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
    }
    .video__paid-img{
        border: 3.5px solid #FFFFFF;
        width: 69px;
        height: 69px;
        border-radius: 50%;
    }
    .active{
        display: flex;
        position: absolute;
    }
</style>