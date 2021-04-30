<template>
<v-row justify="center">
    <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    >

    <v-card>
        <v-card-title>
        <span class="headline">Student Details</span>
        </v-card-title>
        <v-card-text>
        <v-container>
            <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <v-text-field
                label="First name*"
                required
                v-model="student.firstname"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <v-text-field
                label="Middle name"
                v-model="student.middlename"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <v-text-field
                label="Last name*"
                persistent-hint
                required
                v-model="student.lastname"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                label="Email*"
                required
                v-model="student.email"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                label="Telephone*"
                required
                v-model="student.telephone"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
                <v-text-field
                    v-model="student.dob"
                    label="Date of Birth*"
                    type="date"
                    prepend-icon="mdi-calendar"

                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
                <v-autocomplete
                :items="['Databases', 'Artificial Intelligence', 'Systems Design', 'Media Tech', 'Java', 'C++', 'Python', 'JavaScript', 'PHP']"
                label="Courses"
                multiple
                v-model="student.courses"
                ></v-autocomplete>
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
            @click="updateStudent"
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

    props: ['updatingStudent', 'status'],

    data: () => ({
        dialog: true,
        student: {},
    }),

    mounted() {
        this.student = this.updatingStudent
        console.log(this.updatingStudent)
    },

    methods: {
        updateStudent() {
            //validate form

            //dispatch action
            this.student.dob = this.format_date(this.student.dob)
            this.$store.dispatch('updateStudent', this.student)

            //reset form
            this.$emit('resetUpdatingStudent')

            //close modal
            this.dialog = false
            this.$emit('modalStatus', this.dialog)
        },

        closeModal() {
            // this.status = false // cant update directly, emitting event to parent to change status
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