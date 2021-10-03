<template>
<v-row justify="center">
    <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    >

    <v-card>
        <v-card-title>
        <span class="headline">Course Details</span>
        </v-card-title>
        <v-card-text>
        <v-container>
            <v-row>
            <v-col
                cols="12"
            >
                <v-text-field
                label="Title*"
                required
                v-model="course.title"
                ></v-text-field>
            </v-col>

            <v-col cols="12">
                <v-text-field
                label="Duration*"
                required
                v-model="course.duration"
                ></v-text-field>
            </v-col>

            </v-row>
        </v-container>
        <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="red darken-1"
            text
            @click="closeModal"
        >
            Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="updateCourse"
            disabled
        >
            Save
        </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {

    props: ['updatingCourse', 'status'],

    data: () => ({
        dialog: true,
        course: {},
    }),

    mounted() {
        this.course = this.updatingCourse
        // console.log(this.updatingCourse)
    },

    methods: {
        updateCourse() {
            //dispatch action
            this.$store.dispatch('updateCourse', this.course)

            //reset form
            this.$emit('resetUpdatingCourse')

            //close modal
            this.dialog = false
            this.$emit('modalStatus', this.dialog)
        },

        closeModal() {
            this.dialog = false
            this.$emit('modalStatus', this.dialog)
        },

    },

}
</script>

<style>

</style>