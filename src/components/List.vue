<template>

    <v-container>
        <v-row>
            <list-item v-for="student in students" :key="student.id" :student="student" />
        </v-row>
    </v-container>

</template>

<script>
import ListItem from '../components/ListItem'
export default {
    components: {
        ListItem
    },

    computed: {
        students() {
            return this.$store.state.students;
        }
    },

    mounted() {
    this.$store.dispatch('getStudents')
    },

}
</script>

<style>

</style>