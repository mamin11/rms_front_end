<template>
    <v-col cols="12" md="4">
        <v-card
        elevation="3"
        outlined
        >
        <v-card-title>Title: {{course.title}}</v-card-title>
        <v-card-subtitle>Duration: {{course.duration}}</v-card-subtitle>
        <v-card-actions>
        <v-row class="mx-5 my-1">
                <v-col class="d-flex justify-center">
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                    >
                    <v-icon dark
                    @click="deleteCourse(course.id, course.title, course.duration)"
                    >
                        mdi-delete
                    </v-icon>
                    </v-btn>
                </v-col>
                <v-col class="d-flex justify-center">
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="cyan"
                    >
                    <v-icon dark
                    @click="updateCourse(course.id, course.title, course.duration)"
                    >
                        mdi-pencil
                    </v-icon>
                    </v-btn>
                </v-col>
        <UpdateCourseForm v-if="showUpdateModal" :updatingCourse="updatingCourse" :status="showUpdateModal"  @modalStatus="modalStatus" @resetUpdatingCourse="resetUpdatingCourse" />
        </v-row>
        </v-card-actions>
        </v-card>

    </v-col>
</template>

<script>
import UpdateCourseForm from '../courses/UpdateCourseForm'

export default {
    components: {
        UpdateCourseForm
    },

    props: ["course"],

    data () {
        return {
            deletingCourse: {},
            updatingCourse: {},
            showUpdateModal: false,
        }
    },

    methods: {
        deleteCourse(id, title, duration) {
            let course = {
                id:  id,
                title: title,
                duration: duration,
            }
            this.$emit('deleteFromParent', course)
        },

        updateCourse(id, title, duration){
            this.updatingCourse = {
                id:  id,
                title: title,
                duration: duration,
            }
            console.log(this.updatingCourse)
            this.showUpdateModal = true
        },

        modalStatus(status){
            this.showUpdateModal = status
        },

        resetUpdatingCourse() {
            this.updatingCourse = {}
        }
    },
    
}
</script>

<style>

</style>