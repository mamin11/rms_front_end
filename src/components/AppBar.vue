<template>
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

    <router-link to="/courses">
    <v-btn
        depressed
        color="primary"
    >
        Courses
    </v-btn>
    </router-link>

    <router-link to="/modules">
    <v-btn
        depressed
        color="primary"
    >
        Modules
    </v-btn>
    </router-link>


    <v-btn
    depressed
    color="primary"
    >
    Login
    </v-btn>
</v-app-bar>
</template>

<script>
export default {
    name: "AppBar"
}
</script>

<style>

</style>