<template>
<v-row justify="center">
    <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    >

    <v-card>
        <v-card-title>
        <span class="headline">Module Details</span>
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
                v-model="moduleData.title"
                ></v-text-field>
            </v-col>

            <v-col cols="12">
                <v-text-field
                label="Module Content Link*"
                required
                v-model="moduleData.moduleContentLink"
                ></v-text-field>
            </v-col>

            <v-col
                cols="12"
            >
                <v-autocomplete
                :items="[...(courses.map(course => course.title))]"
                label="Course"
                v-model="moduleData.course"
                ></v-autocomplete>
            </v-col>
            <v-col
                cols="12"
            >
                <v-text-field
                label="Start Date*"
                required
                type="date"
                v-model="moduleData.startDate"
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
            @click="updateModule"
        >
            Save
        </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import moment from 'moment'
export default {
    props: ['updatingModule'],
    data: () => ({
        dialog: true,
        moduleData: {},
    }),

    mounted() {
        this.moduleData = this.updatingModule
        this.$store.dispatch('getCourses')
    },

    computed: {
        courses() {
            return this.$store.state.courses;
        }
    },

    methods: {
        updateModule() {
            //dispatch action
            this.moduleData.startDate = this.format_date(this.moduleData.startDate)
            this.$store.dispatch('updateModule', this.moduleData)

            //reset form
            this.$emit('resetUpdatingModule')

            //close modal
            this.dialog = false
            this.$emit('modalStatus', this.dialog)
        },

        closeModal() {
            this.dialog = false
            this.$emit('modalStatus', this.dialog)
        },

        format_date(value){
            if (value) {
            return moment(String(value)).format('YYYY-MM-DD')
            }
        },
    },

}
</script>

<style>

</style>