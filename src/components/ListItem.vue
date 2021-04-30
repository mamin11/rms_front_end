<template>
    <v-col cols="4">
        <v-card
        elevation="3"
        outlined
        >
        <v-card-title>{{student.name}}</v-card-title>
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
                    @click="deleteStudent(student.id, student.name, student.email)"
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
                    <v-icon dark>
                        mdi-pencil
                    </v-icon>
                    </v-btn>
                </v-col>
        </v-row>
        </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    props: ["student"],

    methods: {
        deleteStudent(id, name, email) {
            let student = {
                id:  id,
                name: name,
                email: email
            }
            this.$emit('deleteFromParent', student)
            // this.$store.dispatch('deleteStudent', student)
        }
    },
    
}
</script>

<style>

</style>