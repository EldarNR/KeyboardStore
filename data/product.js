import { defineStore } from "pinia";
import axios from "axios";

export const productsStore = defineStore("products", {
  state: () => ({
    products: [],
    cart: [],
    favourite: [],
    categories: [],
    total: 0,
  }),
  actions: {
    async fetchProductsFromDB(product) {
      const res = (await product)
        ? `https://dummyjson.com/products/search?q=${product}`
        : "https://dummyjson.com/products";
      await this.getCategories();
      try {
        const response = await axios.get(res);
        this.products = response.data.products;
      } catch (err) {
        console.error(err);
      }
    },

    async getCategorieProduct(categories) {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categories}`
        );
        this.products = response.data.products;
      } catch (err) {
        console.log(err);
      }
    },

    async getCategories() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        this.categories = response.data;
      } catch (err) {
        console.error(err);
      }
    },

    addProductToCart(product) {
      let quantity = 1;
      if (this.cart.find((item) => item.id === product.id)) {
        quantity++;
        this.total += Number(product.price) * quantity;
      } else {
        quantity = 1;
        this.total += Number(product.price) * quantity;
      }

      this.cart.push(product);
    },

    addProductToFavourite(product) {
      this.favourite.push(product);
    },

    removeFromFavourite(id) {
      this.favourite = this.favourite.filter((item) => item.id !== id);
    },
    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
      this.total -= Number(product.price);
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
