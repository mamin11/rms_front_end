<template>
  <v-container class="lighten-5" style="height:100%;">
    <v-row no-gutters>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          First, but unordered
        </v-card>
      </v-col>
      <v-col order="12">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          Second, but last
        </v-card>
      </v-col>
      <v-col order="1">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          Third, but first
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "Students",
}
</script>

<style>

</style>