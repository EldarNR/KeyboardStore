<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            productId: this.$route.params.id,
            name: "ProductDetails",
            loading: false
        };
    },
    methods: {
        load() {
            this.loading = true
            setTimeout(() => (this.loading = false), 3000)
        },
    },
}
)
</script>

<script setup>
import { computed } from 'vue';
import { productsStore } from '../data/product.js';
import { useRoute, useRouter } from 'vue-router';

const store = productsStore();
const route = useRoute();
const router = useRouter();

const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id))
})

const addToCart = () => {
    store.addProductToCart(selectedProduct.value) // Use `addProductToCart`
    router.push({ name: "cart" })
}
</script>

<template>
    <div class="ma-3 ">
        <NuxtLink to="/market"><v-btn>Back</v-btn></NuxtLink>
    </div>

    <div class="product ma-2" style="height: 1000px;">
        <div class="product-image d-flex justify-center align-center " style="width: 50%; height:100%; float: left;">
            <v-carousel style="width: 80%; height: 600px;">
                <v-carousel-item v-for="image in selectedProduct.images" :key="image" :src="image" reverse
                    cover></v-carousel-item>
            </v-carousel>
        </div>

        <div class="product-details justify-center d-flex align-center" style="width: 50%; height: 100%; float: right;">
            <div class="box-products ml-5" style="width: 100%; min-height: 300px;">
                <h1>{{ selectedProduct.title }}</h1>
                <p>
                    Brand: {{ selectedProduct.brand }}
                </p>
                <p>
                    Description: {{ selectedProduct.description }}
                </p>
                <h2>
                    Price: $ {{ selectedProduct.price }}
                </h2>
                <v-btn :loading="loading" class="flex-grow-1 mt-5" height="48" variant="tonal"
                    @click="load, addToCart(selectedProduct.id)">
                    Добавить в корзину
                </v-btn>
            </div>
        </div>
    </div>
</template>