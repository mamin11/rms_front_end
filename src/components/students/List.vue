<template>

    <v-container>
        <v-row>
            <list-item v-for="student in students" :key="student.id" :student="student" @deleteFromParent="deleteStudent" />
        </v-row>

        <v-row justify="center">
            <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
            >
            <v-card>
                <v-card-title class="headline">
                Are you sure?
                </v-card-title>
                <v-card-text>This cannot be reversed</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="deleteCancel"
                >
                    Cancel
                </v-btn>
                <v-btn
                    color="red darken-1"
                    text
                    @click="deleteConfirm"
                >
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
    </v-container>

</template>

<script>
import ListItem from '../students/ListItem'
export default {
    data () {
    return {
        dialog: false,
        deletingStudent: {},
    }
    },
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

    methods: {
    deleteStudent(student) {
        this.dialog = true
        this.deletingStudent = student
    },
    deleteConfirm() {
        this.$store.dispatch('deleteStudent', this.deletingStudent)
        this.dialog = false
        this.deletingStudent = {}
    },
    deleteCancel(){
        this.dialog = false
        this.deletingStudent = {}
    }
},

}
</script>

<style>

</style>