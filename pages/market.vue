<script setup>
import { productsStore } from "../data/product.js";
import { computed, ref } from 'vue';
import { onMounted } from 'vue';

const searchTerm = ref('')
const noResultsFound = computed(() => !store.products.length);
const store = productsStore();


onMounted(async () => {
    await store.fetchProductsFromDB();
});

const searchProduct = (searchTerm) => {
    if (searchTerm.length > 0 || searchTerm !== " ") {
        store.fetchProductsFromDB(searchTerm);
    }
};
</script>

<template>
    <v-container>
        <v-layout>
            <v-main style=" width: 100%;" class="main d-flex justify-center ">
                <div class="d-flex justify-center align-center flex-wrap ga-3" style="max-width: 1280px; height: 100%;">

                    <carusel-main />

                    <div class="tools d-flex align-center justify-center" style="width: 100%; height: 50px;">
                        <div class="ma-2 pa-2 mt-10 d-flex align-center" style="width: 700px;">

                            <v-text-field type="text" v-model="searchTerm" @input="searchProduct(searchTerm)" label="Поиск"
                                style="width: 400px;" hide-details="auto" prepend-inner />

                            <navigation-drawer />
                        </div>
                    </div>


                    <div v-for="product in store.products" :key="product.id" class="product">
                        <product-card :title="product.title" :price="product.price" :description="product.description"
                            :brand="product.brand" :thumbnail="product.thumbnail" :rating="product.rating"
                            :id="product.id" />
                    </div>

                    <div v-if="noResultsFound">
                        <h1 class="no-results">No products found matching your search</h1>
                    </div>

                </div>

            </v-main>
        </v-layout>
    </v-container>
</template>

<style scoped>
.product {
    cursor: pointer;
}
</style>