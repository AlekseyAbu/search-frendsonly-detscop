<template>
  <footer class="footer">
    <ul class="footer__ul">
      <li class="footer__li"><a>Как это работает?</a></li>
      <li class="footer__li"><a>Вакансии</a></li>
      <li class="footer__li"><a>Партнерская программа</a></li>
      <li class="footer__li"><a>F.A.Q</a></li>
      <li class="footer__li"><a>Помощь</a></li>
      <li class="footer__li"><a>Юр. информация</a></li>
      <li class="footer__li"><a>Блог</a></li>
    </ul>
    <ul class="footer__info">
      <li class="footer__li"><a>2020 Looplab LTD.</a></li>
      <li>
        <select class="footer__select">
          <option class="footer__option">
            <p class="language__select">🇷🇺 Русский</p>
          </option>
        </select>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.footer{
    max-width: 940px;
    background: #fff;
    padding: 0;
    margin: 0 auto;
}
.footer__ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style:none;
    margin: 0 auto;
}
.footer__li{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: 'liga' off;
    color: #292941;
    opacity: 0.5;
    margin-right: 25px;
    text-decoration: none;
}
.footer__li:last-child{
    margin-right: 0;
}
.footer__info{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style:none;
    margin: 18px auto;
}
.language__select{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: 'liga' off;
    color: #292941;
    opacity: 0.5;
    margin-left: 60px;
}
.footer__select{
    border: none;
    background: #fff;
    color: #292941;
    opacity: 0.5;
}
.footer__option{
    color: #292941;
    opacity: 0.5;
}
</style>