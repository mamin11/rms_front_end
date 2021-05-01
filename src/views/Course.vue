<template>
    <div class="courses">
        <v-container>
            <v-row class="text-center">
                <v-col class="mb-4 py-5">
                    <h1 class="display-2 font-weight-bold mb-3">Courses</h1>
                </v-col>
            </v-row>
            <CourseForm/>
        </v-container>
        <CourseList />
    </div>
</template>

<script>
// import Students from "../components/Students";
// import Navigation from "../components/Navigation";
import CourseForm from '../components/CourseForm'
import CourseList from '../components/courses/CourseList'

export default {
    name: "Course",

    components: {
        // Students,
        // Navigation,
        CourseForm,
        CourseList
    },



};
</script>
