<script >
export default {
    data() {
        return {
            drawer: null,
            loading: false,
            selection: 1,
        };
    },
    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
        goTo(id) {
            this.$router.push('/products/' + id);
        },
    }
};
</script>

<script setup>
import { computed, ref } from 'vue';
import { onMounted } from 'vue';
import { productsStore } from "../data/product.js";
import { useRouter } from 'vue-router';

const store = productsStore();
const searchTerm = ref('');
const routers = useRouter();

const noResultsFound = computed(() => !searchResults.value.length);

const searchResults = computed(() => {
    const term = searchTerm.value.toLowerCase();
    if (term !== ' ') {
        return store.products.filter(product =>
            product.title.toLowerCase().includes(term)
        );
    } else {
        return store.products;
    }
});
const searchingProduct = (e) => {
    searchTerm.value = e.target.value;
};

let loadingStore = true;
onMounted(async () => {
    await store.fetchProductsFromDB();
    loadingStore = false;
});

const goToProductPage = (id) => {
    routers.push({ name: 'ProductView', params: { id } });
};
</script>


<template>
    <v-container>
        <v-layout>
            <v-navigation-drawer v-model="drawer" temporary>
                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <v-list-item>
                        <v-radio value="top" label="top"></v-radio>
                        <v-radio value="end" label="end"></v-radio>
                    </v-list-item>
                    <v-list-item title="About" value="about"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 1200px; width: 100%;" class="main d-flex justify-center ">
                <div class="d-flex bg-red justify-center align-center flex-wrap ga-3 overflow-auto"
                    style="width: 80%; height: 100%;">
                    <div class="tools d-flex align-center justify-center" style="width: 100%; height: 50px;">
                        <div class="ma-2 pa-2 mt-10 d-flex align-center" style="width: 700px;">
                            <v-text-field type="text" @input="searchingProduct" label="Поиск" style="width: 400px;"
                                hide-details="auto" prepend-inner />

                            <v-btn class="ml-5 pa-5 d-flex justify-center" style="min-height:50px;" color="primary"
                                @click.stop="drawer = !drawer">
                                <img style="width: 40px; height: 100%;" src="../img/svg/filter-cog-outline.svg"
                                    alt="filter" />
                            </v-btn>
                        </div>
                    </div>

                    <div v-if="loadingStore">
                        <div class="loading-message text-center text-h1">
                            Данные загружаются...
                        </div>
                    </div>

                    <div v-else="!loadingStore" v-for="product in store.products" :key="product.id" class="product"
                        @click="goTo(product.id)">
                        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                            <template v-slot:loader="{ isActive }">
                                <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate />
                            </template>

                            <v-img cover height="250" :src="product.thumbnail" />

                            <v-card-item>
                                <v-card-title>{{ product.title }}</v-card-title>
                                <v-card-subtitle>
                                    <span class="me-1">{{ product.description }}</span>
                                </v-card-subtitle>
                            </v-card-item>

                            <v-card-text>
                                <v-row align="center" class="mx-0">
                                    <v-rating :model-value="product.rating" color="amber" density="compact" half-increments
                                        readonly size="small" />
                                    <div class="text-grey ms-4">
                                        {{ product.rating }} ({{ product.stock }})
                                    </div>
                                </v-row>

                                <div class="my-4 text-subtitle-1">
                                    {{ product.brand }}
                                </div>
                                <div>{{ product.price }}$</div>
                            </v-card-text>

                            <v-divider class="mx-4 mb-1"></v-divider>
                            <v-card-actions>
                                <v-btn color="deep-purple-lighten-2" variant="text" @click="goToProductPage(product.id)">
                                    Смотреть
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>

                    <div v-if="noResultsFound">
                        <h1 class="no-results">No products found matching your search</h1>
                    </div>

                </div>

            </v-main>
        </v-layout>
    </v-container>
</template>

<style>
.product {
    cursor: pointer;
}
</style>