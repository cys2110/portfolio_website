<script setup>
import { ref } from 'vue';
import About from './About.vue';
import Projects from './Projects.vue'
import { useDisplay } from 'vuetify';

const { xs } = useDisplay()
const tab = ref('about')
const drawer = ref(null)
</script>

<template>
    <v-container>
        <v-row v-if="xs">
            <v-app-bar style="position: fixed; top: 0; z-index: 400;" color="deep-purple-accent-3">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer">
                    <v-icon icon="fas fa-bars"></v-icon>
                </v-app-bar-nav-icon>
                <v-app-bar-title>
                    <div class="text-h6">Claire Sheridan</div>
                    <div class="text-subtitle-1">Full Stack Software Engineer</div>
                </v-app-bar-title>
                <div class="d-flex justify-space-evenly mr-2">
                    <div class="mx-1"><a class="icon" href="mailto:csheridan2110@gmail.com"><v-icon icon="fas fa-envelope"></v-icon></a></div>
                    <div class="mx-1"><a class="icon" href="https://github.com/cys2110" target="_blank"><v-icon icon="fab fa-github"></v-icon></a></div>
                    <div class="mx-1"><a class="icon" href="www.linkedin.com/in/claire-y-sheridan" target="_blank"><v-icon icon="fab fa-linkedin"></v-icon></a></div>
                </div>
            </v-app-bar>
        </v-row>
        <v-navigation-drawer v-if="xs" v-model="drawer" location="bottom" temporary>
            <v-tabs v-model="tab" color="deep-purple-accent-1" direction="vertical" @click.stop="drawer = !drawer">
                <v-tab value="about" rounded="pill">About</v-tab>
                <v-tab value="expertise" rounded="pill">Expertise</v-tab>
                <v-tab value="projects" rounded="pill">Projects</v-tab>
            </v-tabs>
        </v-navigation-drawer>
        <v-row>
            <v-col v-if="!xs" cols="2" class="d-flex flex-column justify-space-evenly mx-3" style="height: 100vh; position: sticky; top: 0;">
                <div class="headshot">
                    <v-img src="../assets/headshot.jpeg" alt="Claire Sheridan" class="rounded-circle" ></v-img>
                </div>
                <div class="headings">
                    <div class="text-h4 text-center py-2">Claire Sheridan</div>
                    <div class="text-subtitle-1 text-center">Full Stack Software Engineer</div>
                </div>
                <div class="d-flex flex-row justify-center mt-n16">
                    <v-tabs v-model="tab" color="deep-purple-accent-1" direction="vertical">
                        <v-tab value="about" rounded="pill">About</v-tab>
                        <v-tab value="expertise" rounded="pill">Expertise</v-tab>
                        <v-tab value="projects" rounded="pill">Projects</v-tab>
                    </v-tabs>
                </div>
                <div class="d-flex justify-space-evenly mt-n16">
                    <div><a class="icon" href="mailto:csheridan2110@gmail.com"><v-icon icon="fas fa-envelope"></v-icon></a></div>
                    <div><a class="icon" href="https://github.com/cys2110" target="_blank"><v-icon icon="fab fa-github"></v-icon></a></div>
                    <div><a class="icon" href="www.linkedin.com/in/claire-y-sheridan" target="_blank"><v-icon icon="fab fa-linkedin"></v-icon></a></div>
                </div>
            </v-col>
            <v-col cols="11" sm="9">
                <v-window v-model="tab" class="ml-6 my-16 ml-sm-16 py-sm-5 pl-sm-5">
                    <v-window-item value="about">
                        <About />
                    </v-window-item>
                    <v-window-item value="expertise">
                        <Expertise />
                    </v-window-item>
                    <v-window-item value="projects">
                        <Projects />
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.icon {
    color: var(--color-text)
}
</style>