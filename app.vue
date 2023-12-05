<template>
  <v-app>
    <header>
      <navbar />
    </header>
    <NuxtPage />
  </v-app>
  <footer>
    <end />
  </footer>
</template>
<style scoped>
body {
  background-color: #ffffff;
}

footer {
  width: 100%;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>