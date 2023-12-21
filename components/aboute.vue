<script setup>
import { defineComponent } from 'vue';
</script>

<template>
    <v-container class="mt-16 text-center container" text-center>

        <h1 class="text text-h2 mb-10">Наши преимущества</h1>
        <v-row no-gutters class="" style="width: 100%; height: 400px;">
            <v-col class="ma-1">
                <div >
                    <p class="card__title mb-5 mt-10 text-white text-h5">Отзывы</p>
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="card bg-white">
                            <img src="../img/reviews.webp" style="max-width:85%; max-height: 80%;" class="icon-first mt-5"
                                alt="stars">
                            <div class="card__content">

                                <p class="card__description"> Мы ценим отзывы наших клиентов и всегда стремимся улучшить
                                    качество наших продуктов и услуг. Вы
                                    можете оставить отзыв о нашей продукции на нашем сайте или в социальных сетях.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </v-col>
            <v-col class="ma-1">
                <div>
                    <p class="card__title mb-5 mt-10 text-white text-h5">Гарантия</p>
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="card bg-white">
                            <img src="../img/garant.png" style="max-width:100%; max-height: 80%;" class="icon-second mt-5"
                                alt="guard">
                            <div class="card__content">
                                <p class="card__description">Мы предоставляем гарантию на все наши клавиатуры сроком на
                                    <b>1 год.</b>
                                    В
                                    течение этого времени мы
                                    бесплатно заменим или отремонтируем любую клавиатуру, которая выйдет из строя по нашей
                                    вине.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col class="ma-1">
                <div>
                    <p class="card__title mb-5 mt-10 text-white text-h5">Качество/Цена</p>
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="card bg-white">
                            <img src="../img/price-special.jpg" style="max-width:100%;  max-height: 80%;"
                                class="icon-thirty" alt="stars">
                            <div class="card__content">
                                <p class="card__description">Мы используем только качественные материалы и комплектующие в
                                    производстве наших клавиатур.
                                    При этом мы стараемся поддерживать доступные цены, чтобы наши клавиатуры были доступны
                                    для
                                    всех.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col class="ma-1">
                <div>
                    <p class="card__title mb-5 mt-10 text-white text-h5">Доставка</p>
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="card bg-white">
                            <img src="../img/delivery.jpg" style="max-width:100%;  max-height: 80%; fill: #ff0000;"
                                class="icon-fourty" alt="delivery">
                            <div class="card__content">
                                <p class="card__description"> Мы осуществляем доставку по всему Казахстану. Стоимость
                                    доставки
                                    зависит от удаленности вашего
                                    региона. В пределах Алматы и Нур-Султана доставка осуществляется бесплатно.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
  

<style scoped>
.container {
    max-width: 1280px;
    max-height: 100%;
}

div {
    font-size: 15px;
    font-weight: 500;
}

.text {
    text-shadow: 1px 1px 2px red, 0 0 1em rgb(255, 60, 0), 0 0 0.2em rgb(241, 43, 13);
}

.card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 1px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}


.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
    transform: rotateX(0deg);
}

.card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
}

.card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
}
</style>