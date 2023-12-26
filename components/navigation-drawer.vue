<script setup>
import { productsStore } from "../data/product";
import { computed, ref } from 'vue';

const store = productsStore();
const value = ref(2000);
const drawer = ref(null);
let rating = 0;

onMounted(async () => {
    await store.fetchProductsFromDB();
});

const cachedUniqueBrands = computed(() =>
    new Set(store.products.map((product) => product.brand.toLowerCase()))
);

const app = (product) => {
    store.showFilterBrand(product);
}

const postNum = (num) => {
    store.sortChangePrice(num);
    console.log(num)
}

const postRatin = (event) => {
    store.showRatingProduct(event);
    console.log('Выбранный рейтинг:', event);
};

</script>

<template>
    <v-navigation-drawer class="text-center" v-model="drawer" temporary>
        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item>
                <v-radio-group label="Цена по" inline>
                    <v-radio label="Убыванию" color="indigo" value="Low" @click="store.sortProductsByLowPrice()"></v-radio>
                    <v-radio label="Возрастанию" color="indigo-darken-3" value="High"
                        @click="store.sortProductsByHightwPrice()"></v-radio>
                </v-radio-group>
            </v-list-item>

            <v-list-item title="Фильтрация по цене">
                <v-slider class="mt-2" @mouseup="postNum(value)" v-model="value" :min="0" :max="2000" :step="1"
                    thumb-label></v-slider>

                <p>Цена ниже: ${{ value }}</p>

            </v-list-item>

            <v-list-item title="Поиск по бренду">
                <ul class="overflow-auto" style="height: 150px;">
                    <li class="chose" @click="store.products = store.fetchProductsFromDB();">All</li>
                    <li class="chose" v-for="brand in cachedUniqueBrands" :key="brand" @click="app(brand)">{{ brand }}</li>
                </ul>
            </v-list-item>

            <v-list-item class="mt-5" title="Поиск по рейтингу">
                <v-rating @click="postRatin(rating)" color="yellow-darken-4" :value="rating" v-model="rating"></v-rating>
            </v-list-item>
        </v-list>

        <v-list-item class="mt-5" title="Поиск по Категории">
            <ul class="overflow-auto" style="height: 200px;">
                <li class="chose " @click="store.fetchProductsFromDB()">
                    <h3>All</h3>
                </li>
                <li class="chose " v-for="categories in store.categories" @click="store.getCategorieProduct(categories)"
                    :key="categories.id">
                    {{ categories }}
                </li>
            </ul>
        </v-list-item>

    </v-navigation-drawer>

    <v-btn class="ml-5 pa-5 d-flex justify-center" style="min-height:50px;" color="primary" @click.stop="drawer = !drawer">
        <img style="width: 40px; height: 100%;" src="../img/svg/filter-cog-outline.svg" alt="filter" />
    </v-btn>
</template>

<style scoped>
.chose:hover {
    background-color: #E0E0E0;
}

.chose:active {
    background-color: #BDBDBD;
}
</style>