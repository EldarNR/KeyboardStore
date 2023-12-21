import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const productsStore = defineStore("products", {
  state: () => ({
    products: ref([]),
    cart: [],
    favourite: [],
  }),
  actions: {
    fetchProductsFromDB() {
      axios.get("https://dummyjson.com/products").then((response) => {
        this.products = response.data.products;
      });
    },
    addProductToCart(product) {
      this.cart.push(product);
    },
    addProductToFavourite(product) {
      this.favourite.push(product);
    },
    removeFromFavourite(id) {
      this.favourite = this.favourite.filter((item) => item.id !== id);
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
    sortProductsByLowPrice() {
      this.products = this.products.sort((a, b) => a.price - b.price);
    },
    sortProductsByHightwPrice() {
      this.products = this.products.sort((a, b) => b.price - a.price);
    },
    showFilterBrand(brandName) {
      this.products = this.products.filter((product) => {
        return product.brand.toLowerCase().includes(brandName.toLowerCase());
      });
    },
    sortChangePrice(number) {
      const price = Number(number);
      this.products = this.products.filter((product) => product.price <= price);
    },
    showRatingProduct(rating) {
      this.products = this.products.filter(
        (rat) => rat.rating <= Number(rating)
      );
    },
  },
});
