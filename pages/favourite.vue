<script setup>
import { productsStore } from '../data/product';

const store = productsStore()

const removeFormFavourite = (id) => {
    store.removeFromFavourite(id);
}

</script>


<template>
    <div v-if="store.favourite.length === 0">
        <h1>Not favourite products</h1>
    </div>
    <div v-else class="cart-item" v-for="item in store.favourite" :key="item.id">
        <div class="item-details bg-blue mb-5 d-flex align-center " style="width: 100%;">
            {{ item.id }}
            <img style="height: 100%;" :src="item.thumbnail" alt="img">
            <h1 class="ml-10">{{ item.title }}</h1>
            <span>Bran:{{ item.brand }}</span>
            <span>Category:{{ item.category }}</span>
            <span>Price:{{ item.price }}</span>
            <v-btn class="ml-15 float-right" rounded="lg" color="red" elevation="16"
                @click="removeFormFavourite(item.id)">Удалить</v-btn>
        </div>
    </div>
</template>