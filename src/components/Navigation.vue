<template>
    <v-container >
        <v-row>
            <v-col cols="12">
                <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                permanent
                >
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-title>Amin Hussein</v-list-item-title>

                    <v-btn
                    icon
                    @click.stop="mini = !mini"
                    >
                    <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-navigation-drawer>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Navigation',
    data () {
        return {
        drawer: true,
        items: [
            { title: 'Home', icon: 'mdi-home' },
            // { title: 'My Account', icon: 'mdi-account' },
            { title: 'Students', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
        }
    },
}
</script>

<style>

</style>