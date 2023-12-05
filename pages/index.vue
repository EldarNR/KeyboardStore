<script setup lang="ts">

</script>

<template>
  <main>
    <div class="text-container">
      <div class="box-text">
        <h2>
          Добро пожаловать в наш клавиатурный мир!
        </h2>
        С нами вы сможете собрать - <img
          src="https://readme-typing-svg.demolab.com?font=Segoe+UI&weight=700&size=24&duration=5002&pause=1000&color=FFFFFF&vCenter=true&random=false&width=330&height=25&lines=%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D1%83%D1%80%D1%83+%D0%BC%D0%B5%D1%87%D1%82%D1%8B;%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA+%D1%81%D0%B5%D0%B1%D0%B5+%D0%B8%D0%BB%D0%B8+%D0%B4%D1%80%D1%83%D0%B3%D1%83;%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D1%83%D1%8E+%D0%B4%D0%BB%D1%8F+%D0%B2%D0%B0%D1%81+%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D1%83%D1%80%D1%83+"
          alt="Typing SVG" class="type-text" />
        <button class="button-64" role="button"><span class="text">Смотреть каталог</span></button>
      </div>
    </div>

    <div class="img-container">
      <div class="img-item">
        <img class="keyboard" src="../img/1.webp" alt="keyboard" animation-iteration-count="infinite">
      </div>
    </div>
  </main>
  <section class="about">
    <aboute class="aboute-item" />
  </section>
  <section class="contacts">
    <contacts />
  </section>
</template>

<style scoped>
main {
  color: white;
  background-image: url("../img/trivi-bg.png");
  background-size: 100% 100%;

  width: 100%;
  height: 1100px;
}

.img-container {
  width: 50%;
  height: 100%;
  float: right;
}

.img-item {
  width: 100%;
  border-radius: 50px;
}

.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  float: left;
}

.about {
  display: flex;
  align-items: flex-start;
  color: rgb(255, 255, 255);
  background-image: url("../img/letters.png");
  background-size: 100% 100%;
  background-color: black;

  width: 100%;
  height: 900px;
}

.keyboard {
  margin-top: 15%;
  width: 70%;
  border-top-left-radius: 46%;
  border-bottom-left-radius: 80%;
  border-bottom-right-radius: 60%;
  -webkit-box-shadow: -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 37px 0px 27px 12px rgba(0, 0, 0, 0.66);
  box-shadow: -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 37px 0px 27px 12px rgba(0, 0, 0, 0.66);
}

.keyboard:hover {
  -webkit-box-shadow: -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 38px 0px 33px 12px rgba(0, 0, 0, 0.76);
  box-shadow: -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 38px 0px 33px 12px rgba(0, 0, 0, 0.76);
}

.box-text {
  min-width: 400px;
  min-height: 200px;
  font-size: 24px;
}

.button-64 {
  margin-top: 50px;
  align-items: center;
  background-image: linear-gradient(144deg, rgb(29, 107, 251), #ed411a 50%, rgb(240, 31, 31));
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(252, 193, 65, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.button-64:active,
.button-64:hover {
  outline: 0;
}

.button-64 span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.button-64:hover span {
  background: none;
}

.type-text {
  margin-bottom: -7px;
}

.aboute-item {
  margin-top: 40px;
}

.contacts {
  width: 100%;
  height: 600px;
  color: white;
  background-color: black;
}



@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}
</style>
