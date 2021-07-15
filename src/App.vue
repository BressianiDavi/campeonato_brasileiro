<template>
    <v-app>
        <AppTopBar />

        <v-main> <Home /> </v-main>
    </v-app>
</template>

<script>
import Home from "./views/Home.vue";
import AppTopBar from "./components/shared/AppTopBar";
export default {
    name: "App",
    components: {
        Home,
        AppTopBar,
    },
};
</script>
