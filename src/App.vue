<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
          <h2 class="headline font-weight-bold mb-3">RMS</h2>
      </div>

      <v-spacer></v-spacer>

    <router-link to="/">
      <v-btn
        depressed
        color="primary"
      >
        Home
      </v-btn>
    </router-link>

    <router-link to="/students">
      <v-btn
        depressed
        color="primary"
      >
        Students
      </v-btn>
    </router-link>


    <v-btn
      depressed
      color="primary"
    >
      Login
    </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
