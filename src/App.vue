<template>
  <div id="app">
    <div
      class="page-header align-items-start min-vh-100"
      style="
        background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
      "
    >
      <router-view />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "app",
  components: {},
};
</script>

<Header>

</Header>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

.bg-gradient-primary {
  background-image: linear-gradient(195deg, #101cc2 0%, #d81b60 100%);
  margin-top: 100px;
  border-radius: 10px;
  font-weight: 700;
}
</style>
