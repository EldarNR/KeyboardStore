<script setup>
import { productsStore } from '../data/product';

const store = productsStore()
</script>

<template>
    <v-layout class="overflow-visible" style="height: 56px;">

        <NuxtLink to="/" components="./pages/index">
            <h1 class="title">triviality</h1>
        </NuxtLink>

        <div class="d-flex justify-center align-center" color="teal" grow>
            <NuxtLink to="/" components="./pages/index.vue"><v-btn class="navbar-item ml-5">Main page</v-btn></NuxtLink>
            <NuxtLink to="/market" components="./pages/market"> <v-btn class="navbar-item ml-5">Market</v-btn></NuxtLink>
            <div class="vertical-line"></div>
            <NuxtLink to="/favourite">
                <div class="d-flex"><img src="../img/svg/heart.svg" width="40" alt="heart"></div>
            </NuxtLink>
            <NuxtLink to="/cart">
                <div class="d-flex align-center text-h6"><img src="../img/svg/cart.svg"> {{ store.cart.length }}</div>
            </NuxtLink>
        </div>
    </v-layout>
</template>
  

<style>
.overflow-visible {
    justify-content: space-evenly;
    align-items: center;
}

a {
    color: black;
    text-decoration: none;
}

.vertical-line {
    color: black;
    width: 80px;
    height: 100%;
    background-color: #000;
}

.title {
    font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    justify-content: flex-start;
    font-weight: 700;
}
</style>