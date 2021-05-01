<template>
  <div class="students">

    <v-container>

    <v-row class="text-center">
      <v-col class="mb-4 py-5">
        <h1 class="display-2 font-weight-bold mb-3">Student Records</h1>
      </v-col>
    </v-row>
    <Form/>

  </v-container>
    <List/>

  </div>
</template>

<script>
import Form from '../components/students/Form'
import List from '../components/students/List'
export default {
  components: {
    Form,List
  },
}
</script>

<style>

</style>
