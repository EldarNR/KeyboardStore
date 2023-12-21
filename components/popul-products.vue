<script setup>
import { productsStore } from "../data/product";
const store = productsStore();

onMounted(async () => {
    try {
        await store.fetchProductsFromDB();
    } catch (e) {
        console.log(e);
    }

});

const addToCart = (id) => {
    const product = store.products.find(product => product.id === id);
    store.addProductToCart(product);
};

</script>
<script>
export default {
    methods: {
        goTo(id) {
            this.$router.push('/products/' + id);
        }
    }
};

</script>

<template>
    <v-container class="slider bg-black pa-5" fluid>
        <h1 class="text-center mb-3">Наши продукты</h1>
        <section class="d-flex align-center justify-center" style="width: 100%;">
            <v-carousel cycle class="rounded-xl carusel d-flex align-center justify-center" hide-delimiters="true"
                style="max-width: 1280px; max-height: 100%;">
                <div v-if="loading">
                    <v-progress-circular color="blue-lighten-3" model-value="20" :size="42"></v-progress-circular>
                </div>
                <div v-else class="d-flex align-center" style="width: 100%; height: 100%;">
                    <v-carousel-item v-for="product in store.products" :key="product.id">
                        <div style="float: left; height: 100%;" class="d-flex align-center">
                            <img style="width: 500px; height: 400px;" class="rounded-lg" :src="product.thumbnail">
                        </div>
                        <div style="height: 100%; width: 500px;" class="d-flex align-center text-h6">
                            <p class="ml-5">
                                <span class="text-h4">{{ product.title }}</span><br>
                                Description: {{ product.description }}<br>
                                Price: ${{ product.price }}<br>
                                <span><v-btn color="green" class="mt-5 mr-5 color" @click="addToCart(product.id)">Add to
                                        card</v-btn>
                                    <v-btn color="info" class="mt-5 color" @click="goTo(product.id)">Check ↗</v-btn>
                                </span>
                            </p>
                        </div>
                    </v-carousel-item>
                </div>
            </v-carousel>
        </section>

    </v-container>
</template>

<style scoped>
.slider {
    max-width: 100%;
    max-height: 600px;
}

.carusel {
    background: rgb(15, 15, 15);
    background: linear-gradient(315deg, rgba(15, 15, 15, 1) 10%, rgba(33, 25, 30, 1) 29%, rgba(221, 26, 153, 1) 71%, rgba(78, 56, 221, 1) 87%);
}

* {
    font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
