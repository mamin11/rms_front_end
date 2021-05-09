<template>
    <v-row justify="center">

    <v-dialog
    v-model="dialog"
    persistent
    max-width="1024px"
    max-height="700px"
    >

    <v-card 
    class="mx-auto"
    width="100%"
    >
        <v-system-bar
            color="black"
            dark
            class="py-5"
            >
            <v-spacer></v-spacer>

            <v-icon 
            color="white"
            large
            @click="closeModal"
            >mdi-close</v-icon>
        </v-system-bar>
        
        <v-row class="text-center m-0 player-row">
            <v-col cols="12" class="player-col">
                <iframe class="frame" width="100%" :src="this.$store.state.moduleVideoLink" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </v-col>
        </v-row>
    </v-card>
    </v-dialog>
    </v-row>
</template>

<script>
export default {
    props: ['videoLink', 'videoId'],
    data: () => ({
        dialog: true,
    }),

    mounted() {
        this.getLink()
    },

    methods: {
        closeModal() {
            this.dialog = false
            this.$emit('videoPlayerStatus', this.dialog)
        },
        async getLink() {
            //first reset link in state, if there was one set previously
            await this.$store.dispatch('resetVideoLink')
            //make the api call if the module has link in DB
            if(this.videoLink) {
                await this.$store.dispatch('getVideoLink', this.videoId)
            }
        },
    },

}
</script>

<style>
.player-row {
    /* overflow: hidden !important; */
    margin: 0;
    padding: 0;
}
.player-col {
    /* overflow: hidden !important; */
    margin: 0;
    padding: 0;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.frame {
    height: 400px !important;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
.frame {
    height: 400px !important;
}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
.frame {
    height: 500px !important;
}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
.frame {
    height: 700px !important;
}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
.frame {
    height: 700px !important;
}
}
</style>