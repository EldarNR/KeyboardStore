

<script setup>
import { productsStore } from '../data/product';

const store = productsStore()

const removeFormCart = (product) => {
    store.removeFromCart(product);
}

</script>

<template>
    <v-container rounded="xl" style="width: 100dvh; height: 100dvh;">
        <NuxtLink to="/market"><v-btn>Back</v-btn></NuxtLink>
        <div class="text-h3 text-center d-flex justify-center align-center flex-column" v-if="!store.cart.length">
            <p>Empty Cart</p>
            <img class="mt-5" style="width: 100px;" src="../img/svg/emoticon-sad-outline.svg" alt="empty-cart">
        </div>
        <v-row class="mt-4" v-else>
            <v-col cols="6" class="bg-blue-lighten-5 rounded-xl overflow-auto" style="height: 800px; width: 100%;">
                <div class="cart-items " style="width: 100%; max-height: 100%;" v-auto-animate>
                    <div class="cart-item" v-for="item in store.cart" :key="item.id">
                        <div class="item-details mb-5 align-center " style="width: 100%;">
                            <h1 class="text-center mb-4 ">{{ item.title }}</h1>
                            <div style="float: right; width: 100%; height: 100%;"
                                class=" d-flex align-center justify-center mb-5">

                                <img class="d-flex align-center justify-center"
                                    style="height: 180px; width:200px; float: left;" :src="item.thumbnail" alt="img">
                                <div class="d-flex flex-column align-center justify-space-around"
                                    style="max-height: 200px; width:50%;">
                                    <span>Bran:{{ item.brand
                                    }}</span>
                                    <br>
                                    <span>Category:{{ item.category }}</span>
                                    <br>
                                    <span>Price:${{ item.price }}</span>
                                    <br>
                                    <span>{{ store.addProductToCart.index }}</span>
                                    <div>
                                        <v-btn class="me-auto" rounded="xl" color="red" elevation="16"
                                            @click="removeFormCart(item)">Удалить</v-btn>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="6" class="pa-0">
                <div style="width: 100%; height: 300px;" rounded="xl"
                    class=" rounded-xl bg-teal-darken-3 d-flex flex-column justify-center align-center">
                    <h1>Итог:</h1>
                    ${{ store.total }}
                    <v-btn class="mt-5 bg-teal-lighten-2">Buy</v-btn>
                </div>
            </v-col>

        </v-row>

    </v-container>
</template>

<style scoped>
span {
    margin-left: 15px;
}
</style>