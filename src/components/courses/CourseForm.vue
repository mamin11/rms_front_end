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
        <span class="headline">Course Details</span>
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
                label="Title*"
                required
                v-model="formData.title"
                ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                sm="6"
            >
                <v-text-field
                label="Duration*"
                required
                type="number"
                v-model="formData.duration"
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
            @click="dialog = false"
        >
            Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="addCourse"
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
    name: "CourseForm",

    data: () => ({
        dialog: false,
        formData: {
            title: '',
            duration: '',
        }
    }),

    methods: {
        addCourse() {
            //validate form

            //dispatch action
            this.$store.dispatch('addCourse', this.formData)

            //reset form
            this.formData = {
                title: '',
                duration: '',
            }

            //close modal
            this.dialog = false
        },
    },

}
</script>

<style>

</style>