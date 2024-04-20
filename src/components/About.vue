<script setup>
const education = [
    {
        institution: 'New York State Bar Association',
        degree: 'Member',
        dates: 'April 2022-present',
        description: 'Licensed to practice law in the state of New York.'
    },
    {
        institution: 'General Assembly',
        degree: 'Software Engineering Immersive',
        dates: 'January-April 2024',
        description: '420+ hour full-stack engineering program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modelling and team collaboration strategies.'
    },
    {
        institution: 'Columbia Law School',
        degree: 'Juris Doctor',
        dates: 'August 2018-May 2021',
        description: 'Honors: James Kent Scholar 2020-2021; Harlan Fiske Stone Scholar 2019-2020; Parker School Recognition of Achievement in International and Comparative Law'
    },
    {
        institution: 'Columbia University',
        degree: 'Bachelor of Arts, Classics, Political Science and History',
        dates: 'August 2011-May 2015',
        description: 'Honors: John Jay Scholar; Dean\'s List (Spring 2013, Spring 2014, Fall 2014); Columbia Spirit Award; Office of Multicultural Affairs Graduation Cord; Richard H. Fox Memorial Prize'
    }
]

const experience = [
    {
        company: 'Dechert LLP',
        position: 'Associate, International Arbitration',
        dates: 'January 2022-August 2023',
        description: [
            'Represented clients in international arbitration disputes, as well as in state and federal courts.',
            'Researched and analyzed factual and legal issues in cases.',
            'Drafted research and legal memos, as well as pleadings for cases.',
            'Liaised with clients regarding client needs and requests.'
        ]
    },
    {
        company: 'Storch Amini PC',
        position: 'Summer associate',
        dates: 'June 2019-August 2019',
        description: [
            'Researched legal issues in complex commercial, trademark and product liability litigation matters.',
            'Drafted memos compiling summaries of research.'
        ]
    },
    {
        company: 'Storch Amini PC',
        position: 'Paralegal',
        dates: 'July 2016-June 2018',
        description: [
            'Assisted attorneys in all aspects of litigation case management, including the preparation of legal documents and pleadings for filing with the courts and document review.',
            'Researched factual questions involved in cases.',
            'Summarized deposition and trial testimony.'
        ]
    },
    {
        company: 'Teach for America',
        position: 'Corps Member',
        dates: 'June 2015-June 2016',
        description: [
            'Selected from approximately 45,000 applicants to join national teacher corps of college graduates who commit to teach in under-resourced public schools.',
            'Taught English and Literacy to students in the 6th and 7th grades at Trailblazers Academy.',
            'Developed the 6th grade English curriculum for the year.'
        ]
    }
]
</script>

<template>
    <v-container>
        <v-row>
            <div class="about">
                <h1>About Me</h1>
                <p class="my-2 text-justify">I am a full stack software engineer who focuses on building user-friendly and accessible products. I utilize the skills I learned as an attorney to communicate effectively with clients and stakeholders to ensure that they receive the product that they are looking for. As we enter the Web 3.0 era, I look to work on projects which aim to effectively incorporate the advances we've made in technology in a socially responsible manner.</p>

                <p  class="my-2 text-justify">I decided to leave the practice of law in order to find a career that I was truly passionate about. After doing a lot of research into possible career paths, software engineering was the one that resonated with me. I could marry my love of puzzles with my insatiable curiosity to learn new things. Moreover, during law school, I had rebuilt my law journal's <a class="text-deep-purple-accent-1" style="text-decoration: none;" href="https://aria.law.columbia.edu/">website</a> with zero coding knowledge and had loved the experience. I decided to enrol in a software engineering immersive bootcamp and only fell more in love with building websites and applications.</p>

                <p  class="my-2 text-justify">When it comes to web development, I always try to find the technologies and languages most suited for the application, whether it is something that I already know or something that I have to learn. The goal is always to provide the user with the best experience possible. As a lawyer, I frequently had to research topics and become an expert on those topics quickly depending on the needs of the case. I apply these same skills to learn new technologies when a technology I am unfamiliar with would be a better solution.</p>

                <p  class="my-2 text-justify">I believe that I would be a valuable asset to any team because I am always eager to learn and to apply the logical reasoning skills I honed as a lawyer to any problem I face. Moreover, my previous career has provided me with invaluable writing and communication skills that are necessary to communicate with stakeholders and clients.</p>
            </div>
        </v-row>
        <v-row>
            <h2 class="my-3">Education and Licenses</h2>
            <v-row>
                <v-col cols="11" sm="12" v-for="(item, i) in education" :key="i">
                    <v-card color="deep-purple-lighten-3">
                        <v-card-title>{{ item.institution}}</v-card-title>
                        <v-card-subtitle class="d-flex flex-wrap justify-space-between">
                            <span style="text-wrap: wrap;">{{ item.degree }}</span>
                            <span>{{ item.dates }}</span>
                        </v-card-subtitle>
                        <v-card-text>
                            <p>{{ item.description }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
        <v-row>
            <h2 class="my-3">Experiences</h2>
            <v-row>
                <v-col cols="11" sm="12" v-for="(item, i) in experience" :key="i">
                    <v-card color="deep-purple-lighten-3">
                        <v-card-title>{{ item.company }}</v-card-title>
                        <v-card-subtitle class="d-flex flex-wrap justify-space-between">
                            <span style="text-wrap: wrap;">{{ item.position }}</span>
                            <span>{{ item.dates }}</span>
                        </v-card-subtitle>
                        <v-card-text >
                            <p class="my-2 mx-5" v-for="(responsibility, i) in item.description" :key="i">{{ responsibility }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>