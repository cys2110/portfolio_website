<script setup>
const languages = ['ES6 Javascript', 'Python', 'SQL', 'HTML', 'CSS']
const frameworks = ['React', 'Material UI', 'Tailwind CSS', 'Vue.js', 'Vuetify', 'Django', 'Sequelize', 'Express.js', 'Node.js', 'Axios', 'JWT']
const tools = ['MongoDB', 'PostgreSQL', 'Amazon RDS', 'JSON API', 'Surge', 'Netlify', 'Github', 'Figma', 'Trello']
</script>

<template>
    <h1>Expertise</h1>
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-toolbar class="rounded-t-lg" color="deep-purple-accent-4">
                    <v-toolbar-title  class="text-subtitle-1">Programming Languages</v-toolbar-title>
                </v-toolbar>
                <v-list :items="languages" class="rounded-b-lg" bg-color="deep-purple-lighten-4"></v-list>
            </v-col>
            <v-col cols="6">
                <v-toolbar class="rounded-t-lg"  color="deep-purple-accent-4">
                    <v-toolbar-title class="text-subtitle-1">Libraries & Frameworks</v-toolbar-title>
                </v-toolbar>
                <v-list :items="frameworks" class="rounded-b-lg" bg-color="deep-purple-lighten-4"></v-list>
            </v-col>
            <v-col cols="6">
                <v-toolbar class="rounded-t-lg"  color="deep-purple-accent-4">
                    <v-toolbar-title  class="text-subtitle-1">Tools & Platforms</v-toolbar-title>
                </v-toolbar>
                <v-list :items="tools" class="rounded-b-lg" bg-color="deep-purple-lighten-4"></v-list>
            </v-col>
        </v-row>
    </v-container>
</template>