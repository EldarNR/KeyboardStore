

<script setup>
import { productsStore } from '../data/product';

const store = productsStore()

const removeFormCart = (id) => {
    store.removeFromCart(id);
}
</script>

<template>
    <div class="ma-3 ">
        <NuxtLink to="/market"><v-btn>Back</v-btn></NuxtLink>
    </div>
    <v-container>
        <div class="text-h3 text-center" v-if="!store.cart.length">
            <p>Empty Cart</p>
            <img class="mt-5" style="width: 100px;" src="../img/svg/emoticon-sad-outline.svg" alt="empty-cart">
        </div>

        <div class="cart-items" v-else>
            <div class="cart-item" v-for="item in store.cart" :key="item.id">
                <div class="item-details bg-blue mb-5 d-flex align-center " style="width: 100%;">
                {{ item.id }}
                    <img style="height: 100%;" :src="item.thumbnail" alt="img">
                    <h1 class="ml-10">{{ item.title }}</h1>
                    <span>Bran:{{ item.brand }}</span>
                    <span>Category:{{ item.category }}</span>
                    <span>Price:{{ item.price }}</span>
                    <v-btn class="ml-15 float-right" rounded="lg" color="red" elevation="16" @click="removeFormCart(item.id)">Удалить</v-btn>
                </div>
            </div>
        </div>
    </v-container>
</template>

<style scoped>
span{
    margin-left: 15px;
}
</style>