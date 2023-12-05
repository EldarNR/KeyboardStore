<script setup>
import { defineComponent } from 'vue';
</script>

<template>
    <v-container class="mt-16 text-center d-flex" text-center>
        <h1 class="text text-h2 d-flex align-center mb-10">Наши преимущества</h1>
        <v-row no-gutters>
            <v-col>
                <v-sheet class="bg-deep-orange-darken-2 pa-2 ma-2 rounded-t-xl">
                    <img src="../img/svg/smile.svg" class="icon mt-5" alt="stars">
                    <h1 class="text-h4">Отзывы</h1>
                    <div>Мы ценим отзывы наших клиентов и всегда стремимся улучшить качество наших продуктов и услуг. Вы
                        можете оставить отзыв о нашей продукции на нашем сайте или в социальных сетях.</div>
                </v-sheet>
            </v-col>
            <v-col>
                <v-sheet class="pa-2 ma-2 bg-deep-purple-accent-2 rounded-t-xl">
                    <img src="../img/svg/guard.svg" class="icon mt-5" alt="guard">
                    <h1 class="text-h4">Гарантия</h1>
                    <div>Мы предоставляем гарантию на все наши клавиатуры сроком на 1 год. В течение этого времени мы
                        бесплатно заменим или отремонтируем любую клавиатуру, которая выйдет из строя по нашей вине.
                    </div>
                </v-sheet>
            </v-col>

            <v-responsive width="100%"></v-responsive>

            <v-col>
                <v-sheet class="pa-2 ma-2 bg-light-blue rounded-b-xl">
                    <img src="../img/svg/starts.svg" class="icon" alt="stars">
                    <h1 class="text-h4">Качество/Цена</h1>
                    <div class="mb-3">
                        Мы используем только качественные материалы и комплектующие в производстве наших клавиатур.
                        Благодаря этому наши клавиатуры обеспечивают превосходное качество и надежность. При этом мы
                        стараемся поддерживать доступные цены, чтобы наши клавиатуры были доступны для всех.

                    </div>
                </v-sheet>
            </v-col>

            <v-col>
                <v-sheet class="pa-2 ma-2 bg-green rounded-b-xl">
                    <img src="../img/svg/post.svg" class="icon" alt="delivery" style="fill: #ff0000;">
                    <h1 class="text-h4">Доставка</h1>
                    <div class="mb-3">Мы осуществляем доставку по всему Казахстану. Стоимость доставки зависит от
                        удаленности вашего
                        региона.
                        В пределах Алматы и Нур-Султана доставка осуществляется бесплатно.
                        В другие регионы Казахстана доставка осуществляется курьерской службой.
                        Средний срок доставки составляет 1-2 рабочих дня.
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
div {
    font-size: 15px;
    font-weight: 500;
}

.text {
    text-shadow: 1px 1px 2px red, 0 0 1em rgb(255, 60, 0), 0 0 0.2em rgb(241, 43, 13);
}
</style>