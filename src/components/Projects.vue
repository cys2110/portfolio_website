<script setup>
import { useDisplay } from 'vuetify'

const { xs, sm } = useDisplay()
</script>

<template>
    <v-container>
        <v-row>
            <h1>Projects</h1>
        </v-row>
        <v-row>
            <v-col sm="6">
                <v-hover v-slot="{isHovering, props}">
                    <v-card v-bind="props" color="deep-purple-lighten-4" class="rounded-lg d-flex flex-column justify-space-evenly align-center" variant="outlined">
                        <v-img :width="500"target="_blank" src="../assets/TH.png" class="my-3 mx-2"></v-img>
                        <v-card-title  class="text-center my-2">TennisHistory</v-card-title>
                        <v-card-text class="text-center">
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-js">JavaScript</v-chip>
                            <v-chip class="ma-1 text-center" elevated>Sequelize</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-vuejs">Vue</v-chip>
                            <v-chip class="ma-1 text-center" elevated>Express</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-node">Node</v-chip>
                        </v-card-text>
                        <v-overlay :model-value="isHovering" contained class="align-center justify-center" scrim="#EDE7F6">
                            <v-card color="deep-purple-lighten-4" width="60%" class="mx-auto">
                                <v-card-text>
                                    <p class="text-justify">This app is a clone of parts of the <a class="text-deep-purple-accent-2" style="text-decoration: none;" href="https://www.atptour.com/en" target="_blank">ATP</a> website, allowing users to discover information about current and past tournaments and players.</p>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-chip variant="elevated" color="deep-purple-accent-2" href="https://github.com/cys2110/TennisHistory" prepend-icon="fab fa-github">Github</v-chip>
                                    <v-chip class="mx-1" variant="elevated" color="deep-purple-accent-2" href="https://tennis-history.netlify.app/" prepend-icon="fas fa-square-arrow-up-right">Website</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col sm="6">
                <v-hover v-slot="{isHovering, props}">
                    <v-card v-bind="props" color="deep-purple-lighten-4" class="rounded-lg d-flex flex-column justify-space-evenly align-center" variant="outlined">
                        <v-img :width="400"target="_blank" src="../assets/DPS.png" class="my-3 mx-2"></v-img>
                        <v-card-title  class="text-center my-2">DPS</v-card-title>
                        <v-card-text class="text-center">
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-js">JavaScript</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="mdi:mid-tailwind">Tailwind</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-vuejs">Vue</v-chip>
                        </v-card-text>
                        <v-overlay :model-value="isHovering" contained class="align-center justify-center" scrim="#EDE7F6">
                            <v-card color="deep-purple-lighten-4" width="60%" class="mx-auto">
                                <v-card-text>
                                    <p class="text-justify">This app consumes the <a href="https://github.com/thundercomb/poetrydb">PoetrDB</a> API. Users can search for poets and poems as well as view poems by a particular poet or a specific poem.</p>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-chip variant="elevated" color="deep-purple-accent-2" href="https://github.com/cys2110/Poetry" prepend-icon="fab fa-github">Github</v-chip>
                                    <v-chip class="mx-1" variant="elevated" color="deep-purple-accent-2" href="https://dpsdb.netlify.app/" prepend-icon="fas fa-square-arrow-up-right">Website</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col sm="6">
                <v-hover v-slot="{isHovering, props}">
                    <v-card v-bind="props" color="deep-purple-lighten-4" class="rounded-lg d-flex flex-column justify-space-evenly" variant="outlined">
                        <v-img :height="450"target="_blank" src="../assets/Tessera.png" class="my-2 px-3"></v-img>
                        <v-card-title class="text-center my-2">Tessera</v-card-title>
                        <v-card-text class="text-center">
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-js">JavaScript</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-react">React</v-chip>
                            <v-chip class="ma-1 text-center" elevated>Django</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-python">Python</v-chip>
                        </v-card-text>
                        <v-overlay :model-value="isHovering" contained class="align-center justify-center" scrim="#EDE7F6">
                            <v-card color="deep-purple-lighten-4" width="60%" class="mx-auto">
                                <v-card-text>
                                    <p class="text-justify">Tessera is a Ticketmaster-style application. It allows users to discover venues near them and see what events are happening at those venues.</p>
                                    <p class="text-justify">I built this app with a team of three other developers and I was primarily responsible for coding the frontend Javascript functionality of the app.</p>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-chip variant="elevated" color="deep-purple-accent-2" href="https://github.com/ItzelAlwarafi/Tessera" prepend-icon="fab fa-github">Github</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col  sm="6">
                <v-hover v-slot="{isHovering, props}">
                    <v-card v-bind="props" color="deep-purple-lighten-4" class="rounded-lg d-flex flex-column justify-space-evenly" variant="outlined">
                        <v-img :height="450"target="_blank" src="../assets/Venyou.png" class="my-2 px-3"></v-img>
                        <v-card-title class="text-center my-2">Venyou</v-card-title>
                        <v-card-text class="text-center">
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-js">JavaScript</v-chip>
                            <v-chip class="ma-1 text-center" elevated>Mongoose</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-react">React</v-chip>
                            <v-chip class="ma-1 text-center" elevated>Express</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-node">Node</v-chip>
                        </v-card-text>
                        <v-overlay :model-value="isHovering" contained class="align-center justify-center" scrim="#EDE7F6">
                            <v-card color="deep-purple-lighten-4" width="60%" class="mx-auto">
                                <v-card-text>
                                    <p class="text-justify">Venyou allows users to list or rent event spaces for any events that they might be hosting.</p>
                                    <p class="text-justify">I built this app with a team of three other developers and I was primarily responsible for coding the frontend Javascript functionality of the app.</p>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-chip variant="elevated" color="deep-purple-accent-2" href="https://github.com/cys2110/eventnet" prepend-icon="fab fa-github">Github</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col sm="6">
                <v-hover v-slot="{isHovering, props}">
                    <v-card v-bind="props" color="deep-purple-lighten-4" class="rounded-lg d-flex flex-column justify-space-evenly align-center" variant="outlined">
                        <v-img :width="400"target="_blank" src="../assets/SH.png" class="my-3 mx-2"></v-img>
                        <v-card-title  class="text-center my-2">Scrabble Helper</v-card-title>
                        <v-card-text class="text-center">
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-js">JavaScript</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="mdi:mid-tailwind">Tailwind</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-vuejs">Vue</v-chip>
                        </v-card-text>
                        <v-overlay :model-value="isHovering" contained class="align-center justify-center" scrim="#EDE7F6">
                            <v-card color="deep-purple-lighten-4" width="60%" class="mx-auto">
                                <v-card-text>
                                    <p class="text-justify">This is a simple app to help Scrabble afficionados. Enter a word and the app will tell you whether it's a valid word, how many points it is worth and other words you can make with those letters.</p>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-chip variant="elevated" color="deep-purple-accent-2" href="https://github.com/cys2110/DictionaryPlus" prepend-icon="fab fa-github">Github</v-chip>
                                    <v-chip class="mx-1" variant="elevated" color="deep-purple-accent-2" href="https://scrabblehelper.netlify.app/" prepend-icon="fas fa-square-arrow-up-right">Website</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col sm="6">
                <v-hover v-slot="{isHovering, props}">
                    <v-card v-bind="props" color="deep-purple-lighten-4" class="rounded-lg d-flex flex-column justify-space-evenly align-center" variant="outlined">
                        <v-img :width="500"target="_blank" src="../assets/TH.png" class="my-3 mx-2"></v-img>
                        <v-card-title  class="text-center my-2">TennisHistory (v1)</v-card-title>
                        <v-card-text class="text-center">
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-js">JavaScript</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-python">Python</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-vuejs">Vue</v-chip>
                            <v-chip class="ma-1 text-center" elevated>Django</v-chip>
                            <v-chip class="ma-1 text-center" elevated>JWT</v-chip>
                        </v-card-text>
                        <v-overlay :model-value="isHovering" contained class="align-center justify-center" scrim="#EDE7F6">
                            <v-card color="deep-purple-lighten-4" width="60%" class="mx-auto">
                                <v-card-text>
                                    <p class="text-justify">This is a previous version of the above TennisHistory application built with Django instead of Sequelize.</p>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-chip variant="elevated" color="deep-purple-accent-2" href="https://github.com/cys2110/TennisHistory/tree/django" prepend-icon="fab fa-github">Github</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col sm="6">
                <v-hover v-slot="{isHovering, props}">
                    <v-card v-bind="props" color="deep-purple-lighten-4" class="rounded-lg d-flex flex-column justify-space-evenly align-center" variant="outlined">
                        <v-img :width="500"target="_blank" src="../assets/FT.png" class="my-3 mx-2"></v-img>
                        <v-card-title class="text-center my-2">FantasyTennis</v-card-title>
                        <v-card-text class="text-center">
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-js">Javascript</v-chip>
                            <v-chip class="ma-1 text-center" elevated>Mongoose</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-vuejs">Vue</v-chip>
                            <v-chip class="ma-1 text-center" elevated>Express</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-node">Node</v-chip>
                        </v-card-text>
                        <v-overlay :model-value="isHovering" contained class="align-center justify-center" scrim="#EDE7F6">
                            <v-card color="deep-purple-lighten-4" width="60%" class="mx-auto">
                                <v-card-text>
                                    <p class="text-justify">This is the first version of above TennisHistory application built using the MEVN stack and with additional functionality of allowing users to predict what they think the outcomes of tennis tournaments will be.</p>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-chip variant="elevated" color="deep-purple-accent-2" href="https://github.com/cys2110/FantasyTennis" prepend-icon="fab fa-github">Github</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col sm="6">
                <v-hover v-slot="{isHovering, props}">
                    <v-card v-bind="props" color="deep-purple-lighten-4" class="rounded-lg d-flex flex-column justify-space-evenly align-center" variant="outlined">
                        <v-img :width="500"target="_blank" src="../assets/Portfolio.png" class="my-3 mx-2"></v-img>
                        <v-card-title class="text-center my-2">Portfolio</v-card-title>
                        <v-card-text class="text-center">
                            <v-chip class="ma-1 text-center" elevated prepend-icon="fab fa-vuejs">Vue</v-chip>
                            <v-chip class="ma-1 text-center" elevated prepend-icon="mdi:mdi-vuetify">Vuetify</v-chip>
                        </v-card-text>
                        <v-overlay :model-value="isHovering" contained class="align-center justify-center" scrim="#EDE7F6">
                            <v-card color="deep-purple-lighten-4" width="60%" class="mx-auto w-60">
                                <v-card-text>
                                    <p class="text-justify">The current portfolio website made by yours truly.</p>
                                </v-card-text>
                                <v-card-actions class="justify-center">
                                    <v-chip variant="elevated" color="deep-purple-accent-2" href="https://github.com/cys2110/portfolio" prepend-icon="fab fa-github">Github</v-chip>
                                </v-card-actions>
                            </v-card>
                        </v-overlay>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>