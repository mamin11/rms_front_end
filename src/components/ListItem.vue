<template>
    <v-col cols="12" md="4">
        <v-card
        elevation="3"
        outlined
        >
        <v-card-title>{{student.firstname}}</v-card-title>
        <v-card-subtitle>{{student.email}}</v-card-subtitle>
        <v-card-text>Date of Birth: {{student.dob}}</v-card-text>
        <v-card-actions>
        <v-row class="mx-5 my-1">
                <v-col>
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                    >
                    <v-icon dark
                    @click="deleteStudent(student.id, student.firstname, student.lastname, student.middlename, student.email, student.telephone, student.courses, student.dob)"
                    >
                        mdi-delete
                    </v-icon>
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="cyan"
                    >
                    <v-icon dark
                    @click="updateStudent(student.id, student.firstname, student.lastname, student.middlename, student.email, student.telephone, student.courses, student.dob)"
                    >
                        mdi-pencil
                    </v-icon>
                    </v-btn>
                </v-col>
        <UpdateForm v-if="showUpdateModal" :updatingStudent="updatingStudent" :status="showUpdateModal"  @modalStatus="modalStatus" @resetUpdatingStudent="resetUpdatingStudent" />
        </v-row>
        </v-card-actions>
        </v-card>

    </v-col>
</template>

<script>
import UpdateForm from '../components/UpdateForm'

export default {
    components: {
        UpdateForm
    },

    props: ["student"],

    data () {
        return {
            deletingStudent: {},
            updatingStudent: {},
            showUpdateModal: false,
        }
    },

    methods: {
        deleteStudent(id, firstname, lastname, middlename, email, telephone, courses, dob) {
            let student = {
                id:  id,
                firstname: firstname,
                lastname: lastname,
                middlename: middlename,
                email: email,
                telephone: telephone,
                courses: courses,
                dob: dob
            }
            this.$emit('deleteFromParent', student)
            // this.$store.dispatch('deleteStudent', student)
        },

        updateStudent(id, firstname, lastname, middlename, email, telephone, courses, dob){
            this.updatingStudent = {
                id:  id,
                firstname: firstname,
                lastname: lastname,
                middlename: middlename,
                email: email,
                telephone: telephone,
                courses: courses,
                dob: dob
            }
            this.showUpdateModal = true
        },

        modalStatus(status){
            this.showUpdateModal = status
        },

        resetUpdatingStudent() {
            this.updatingStudent = {}
        }
    },
    
}
</script>

<style>

</style>