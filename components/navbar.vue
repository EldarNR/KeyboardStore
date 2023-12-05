<template>
    <v-layout class="overflow-visible" style="height: 56px;">
        <NuxtLink to="/" components="./pages/index.vue">
            <h1 class="title">triviality</h1>
        </NuxtLink>
        <v-top-navigation color="teal" grow>
            <NuxtLink to="/" components="./pages/index.vue"><v-btn class="navbar-item ml-5">Main page</v-btn></NuxtLink>
            <NuxtLink to="/market"> <v-btn class="navbar-item ml-5">Market</v-btn></NuxtLink>
            <NuxtLink to="/cart"><v-btn class="navbar-item ml-10">Cart</v-btn></NuxtLink>
        </v-top-navigation>
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


.title {
    font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    justify-content: flex-start;
    font-weight: 700;
}
</style>