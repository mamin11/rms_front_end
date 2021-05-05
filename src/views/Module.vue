<template>
    <div class="courses">
        <v-container>
            <v-row class="text-center py-5">
                <v-col class="mb-4 py-5">
                    <h1 class="display-2 font-weight-bold mb-3">Modules</h1>
                </v-col>
                    <v-spacer></v-spacer>
                <v-col class="mb-4 py-5">
                <ModuleForm />
                </v-col>
            </v-row>
        <ModuleList />
        </v-container>
    </div>
</template>

<script>
import ModuleForm from '../components/modules/ModuleForm'
import ModuleList from '../components/modules/ModuleList'
export default {
    name: "Module",

    components: {
        ModuleList, ModuleForm
    },
}
</script>

<style>

</style>