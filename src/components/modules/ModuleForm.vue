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
                <v-row justify="center">
                    <v-input
                        error-count="2"
                        error
                        disabled
                        class="text-center mx-auto pl-4"
                    >
                        Upload Module Content
                    </v-input>
                    <v-spacer></v-spacer>
                    <input type="file" name="file" @change="getFile">
                </v-row>
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
    data: () => ({
        dialog: false,
        formData: {
            title: '',
            course: '',
            moduleContentLink: '',
            startDate: '',
        },
        inputFile: null,
        data: {},
        moduleTitle: '',
        hasFile: false,
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
        async addModule() {
            await this.saveModuleToDb()
            this.moduleTitle = this.formData.title

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

            let moduleId = await this.getAddedModule()

            //upload file if it exists
            if(this.hasFile == true) {
                this.uploadFile(moduleId)
                this.hasFile = false
            }
        },

        async saveModuleToDb() {
            //dispatch action
            await this.$store.dispatch('addModule', this.formData)
        },

        getFile(event) {
            this.inputFile = event.target.files[0]
            if(event.target.files.length > 0){
                this.hasFile = true
            }
        },

        uploadFile(id) {
            const formData = new FormData();
            formData.append("file", this.inputFile)
            formData.append("moduleId", id) //change id to module ID
            formData.append(
                "headers", {
                    "Content-Type": "multipart/form-data"
                }
            )
            this.$store.dispatch('uploadFile', {data: formData, id: id})
            this.inputFile = null
        },

        async getAddedModule() {
            // console.log("formdata.title = " + this.moduleTitle)

            //get the added module
            await this.$store.dispatch('getModuleByTitle', this.moduleTitle)
            let moduleId = await this.$store.state.modulesByTitle.id

            // console.log(moduleId)
            this.moduleTitle = ''
            return moduleId
        },

    },

}
</script>

<style>

</style>