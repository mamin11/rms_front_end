<template>
<v-container>
    <v-data-table
      :headers="headers"
      :items="modules"
      sort-by="title"
      class="elevation-1"
    >
      
      
      <template v-slot:[`item.actions`]="{ item }"> 
        <v-icon
          small
          class="mr-2"
          @click="play(item)"
        >
          mdi-eye
        </v-icon>
        <v-icon
          small
          class="mr-2"
          @click="editModule(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteModule(item)"
        >
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>

    <v-row justify="center">
          <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
          >
            <v-card>
                <v-card-title class="headline">
                Are you sure?
                </v-card-title>
                <v-card-text>This cannot be reversed</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="deleteCancel"
                >
                    Cancel
                </v-btn>
                <v-btn
                    color="red darken-1"
                    text
                    @click="deleteConfirm"
                    disabled
                >
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card>
          </v-dialog>
    </v-row>

  <ModuleUpdateForm v-if="showUpdateModal" :updatingModule="updatingModule" @modalStatus="modalStatus" @resetUpdatingModule="resetUpdatingModule" />

  <VideoPlayer v-if="showVideoPlayer" @videoPlayerStatus="videoPlayerStatus" :videoLink="videoLink" :videoId="videoId" />

</v-container>
</template>

<script>
import ModuleUpdateForm from './ModuleUpdateForm'
import VideoPlayer from './VideoPlayer'
  export default {
    components: {
      ModuleUpdateForm, VideoPlayer
    },

    data: () => ({
      dialog: false,
      dialogDelete: false,
      showUpdateModal: false,
      showVideoPlayer: false,
      formData: {
            title: '',
            startDate: '',
      },
      deletingModule: {},
      updatingModule: {},
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Course', value: 'course' },
        { text: 'ModuleContentLink', value: 'moduleContentLink' },
        { text: 'StartDate', value: 'startDate' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      videoLink: '',
      videoId: ''
    }),

    computed: {
      modules() {
        return this.$store.state.modules;
      },
      
    },

    mounted() {
    this.$store.dispatch('getModules')
    },

    methods: {
      deleteModule(module) {
        console.log('deleting....')
        console.log(module)
        this.dialog = true
        this.deletingModule = module
      },
      deleteConfirm() {
          this.$store.dispatch('deleteModule', this.deletingModule)
          this.dialog = false
          this.deletingModule = {}
      },
      deleteCancel(){
        this.dialog = false
        this.deletingModule = {}
      },
      editModule(module) {
        console.log('updating....')
        this.updatingModule = module
        this.showUpdateModal = true
        console.log(this.showUpdateModal)
      },
      modalStatus(status){
        this.showUpdateModal = status
      },
      resetUpdatingModule() {
        this.updatingModule = {}
      },

      play(module) {
        // console.log(module.moduleContentLink)
        this.videoId = module.id
        this.videoLink = module.moduleContentLink
        this.showVideoPlayer = true
      },
      videoPlayerStatus(status){
        this.showVideoPlayer = status
      },
    },
  }
</script>

<style>

</style>