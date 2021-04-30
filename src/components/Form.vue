<template>
<v-row justify="center">
    <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    >

    <template v-slot:activator="{ on, attrs }">
        <v-row class="text-center">
            <v-col>
                    <v-btn
                    class="mx-2"
                    fab
                    dark
                    color="indigo"
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon dark>
                    mdi-plus
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </template>

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
                v-model="formData.name"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <v-text-field
                label="Middle name"
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
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                label="Email*"
                required
                v-model="formData.email"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                label="Telephone*"
                required
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
                <v-text-field
                label="Date of Birth*"
                required
                type="date"
                v-model="formData.dob"
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
            @click="dialog = false"
        >
            Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="addStudent"
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
    data: () => ({
        dialog: false,
        formData: {
            name: '',
            email: '',
            dob:'',
        }
    }),

    methods: {
        addStudent() {
            //validate form
            this.$store.dispatch('addStudent', this.formData)
            this.formData = {
                name: '',
                email: '',
                dob:'',
            }
        },
    },

}
</script>

<style>

</style>