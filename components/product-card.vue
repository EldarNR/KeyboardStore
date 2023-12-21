<script setup>
import { productsStore } from "../data/product.js";
defineProps({
    title: String,
    description: String,
    price: Number,
    brand: String,
    thumbnail: String,
    rating: Number,
    id: Number
})

const store = productsStore();
const addToCart = (id) => {
    const product = store.products.find(product => product.id === id);
    store.addProductToCart(product);
};

const addToFavourite = (id) => {
    const product = store.products.find(product => product.id === id);
    store.addProductToFavourite(product);
};
</script>

<script>
export default {
    methods: {
        goTo(id) {
            this.$router.push('/products/' + id);
        }
    }
}
</script>

<template>
    <v-card class="mx-auto my-12 card-item" width="350">

        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate />
        </template>

        <div>
            <like @click="addToFavourite(id);" :id="id" style="z-index: 2;" class="mt-2 ml-3" />
            <v-img style="z-index: 1;" cover height="250" :src="thumbnail" />
        </div>


        <v-card-item>
            <div class="text-h5">{{ price }}$</div>

            <v-card-title>{{ title }}</v-card-title>
            <v-card-subtitle>
                <span class="me-1">{{ brand }}</span>
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <v-row align="center" class="mx-0 align-center">
                <v-rating :model-value="Math.floor(rating)" color="amber" density="compact" half-increments readonly
                    size="small" />
                <div class="text-grey ms-4">
                    {{ rating }}
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1 " style="height: 100px;">
                <p class="description">{{ description }}</p>
            </div>

        </v-card-text>

        <v-divider class="mb-1"></v-divider>
        <v-card-actions>
            <v-btn color="deep-whie" class="bg-green" variant="text" @click="addToCart(id)">
                Добавить в корзину
            </v-btn>
            <v-btn color="deep-purple-lighten-2" variant="text" @click="goTo(id)">
                Смотреть
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
}
</style>