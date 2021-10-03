<template>

    <v-container>
        <v-row>
            <CourseListItem v-for="course in courses" :key="course.id" :course="course" @deleteFromParent="deleteCourse" />
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
                    disabled
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
import CourseListItem from '../courses/CourseListItem'
export default {
    data () {
    return {
        dialog: false,
        deletingCourse: {},
    }
    },
    components: {
        CourseListItem
    },

    computed: {
        courses() {
            return this.$store.state.courses;
        }
    },

    mounted() {
    this.$store.dispatch('getCourses')
    },

    methods: {
    deleteCourse(course) {
        this.dialog = true
        this.deletingCourse = course
    },
    deleteConfirm() {
        this.$store.dispatch('deleteCourse', this.deletingCourse)
        this.dialog = false
        this.deletingCourse = {}
    },
    deleteCancel(){
        this.dialog = false
        this.deletingCourse = {}
    }
},

}
</script>

<style>

</style>