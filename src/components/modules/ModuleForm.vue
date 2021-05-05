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
                v-model="formData.title"
                ></v-text-field>
            </v-col>

            <v-col cols="12">
                <v-text-field
                label="Module Content Link*"
                required
                v-model="formData.moduleContentLink"
                ></v-text-field>
            </v-col>

            <v-col
                cols="12"
            >
                <v-autocomplete
                :items="[...(courses.map(course => course.title))]"
                label="Course"
                v-model="formData.course"
                ></v-autocomplete>
            </v-col>
            <v-col
                cols="12"
            >
                <v-text-field
                label="Start Date*"
                required
                type="date"
                v-model="formData.startDate"
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
            @click="addModule"
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
            title: '',
            course: '',
            moduleContentLink: '',
            startDate: '',
        }
    }),

    mounted() {
        this.$store.dispatch('getCourses')
    },

    computed: {
        courses() {
            return this.$store.state.courses;
        }
    },

    methods: {
        addModule() {
            //dispatch action
            this.$store.dispatch('addModule', this.formData)

            //reset form
            this.formData = {
                title: '',
                course: '',
                middlename: '',
                moduleContentLink: '',
                startDate: '',
            }

            //close modal
            this.dialog = false
        },
    },

}
</script>

<style>

</style>