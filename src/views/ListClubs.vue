<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Classificação dos clubes</h2>
        <TableClubs :clubes="listClubs" />
    </v-container>
</template>

<script>
import TableClubs from "../components/TableClubs";

export default {
    name: "ListClubs",
    components: {
        TableClubs,
    },
    data() {
        return {
            listClubs: [],
        };
    },
    created() {
        fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
            .then((response) => response.json())
            .then((json) => {
                this.listClubs = json;
            });
    },
};
</script>

<style scoped></style>
