<script setup lang="ts">
definePageMeta( { name: 'projects' } )

const projects = [
  {
    label: 'TennisHistory', icons: [
      { label: 'TypeScript', icon: 'skill-icons:typescript' },
      { label: 'Nuxt.js', icon: 'skill-icons:nuxtjs-dark' },
      { label: 'Neo4j', icon: 'vscode-icons:file-type-neo4j' },
      { label: 'Cypher', icon: 'vscode-icons:file-type-neo4j' },
      { label: 'Nuxt UI', icon: 'skill-icons:nuxtjs-dark' },
      { label: 'Apache eCharts', icon: 'simple-icons:apacheecharts' },
      { label: 'Vercel', icon: 'skill-icons:vercel-dark' }
    ], description: 'This app allows users to discover information about current and past tennis tournaments and players.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/TennisHistory' },
      { label: 'Website', icon: 'line-md:external-link-rounded', to: 'https://tennis-history.vercel.app/' }
    ],
    screenshot: './THVercel.png'
  },
  {
    label: 'DPS', icons: [
      { label: 'Javascript', icon: 'skill-icons:javascript' },
      { label: 'Vue.js', icon: 'skill-icons:vuejs-dark' },
      { label: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
    ], description: 'This app consumes the PoetryDB API. Users can search for poets and poems as well as view poems by a specific poet or poem', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/Poetry' },
      { label: 'Website', icon: 'line-md:external-link-rounded', to: 'https://dpsdb.netlify.app/' }
    ], screenshot: './DPS.png'
  },
  {
    label: 'Tessera', icons: [
      { label: 'Javascript', icon: 'skill-icons:javascript' },
      { label: 'Python', icon: 'skill-icons:python-dark' },
      { label: 'React', icon: 'skill-icons:react-dark' },
      { label: 'Django', icon: 'skill-icons:django' },
    ], description: 'Tessera is a Ticketmaster-style application. It allows users to discover venues near them and see what events are happening at those venues. I built this app with a team of three other developers and I was primarily responsible for coding the frontend Javascript functionality of the app.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/ItzelAlwarafi/Tessera' }
    ], screenshot: './Tessera.png'
  },
  {
    label: 'Venyou', icons: [
      { label: 'Javascript', icon: 'skill-icons:javascript' },
      { label: 'React', icon: 'skill-icons:react-dark' },
      { label: 'Mongoose', icon: 'skill-icons:mongodb' },
      { label: 'Express.js', icon: 'skill-icons:expressjs-dark' },
      { label: 'Node.js', icon: 'skill-icons:nodejs-dark' },
    ], description: 'Venyou allows users to list or rent event spaces for any events that they might be hosting. I built this app with a team of three other developers and I was primarily responsible for coding the frontend Javascript functionality of the app.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/eventnet' }
    ], screenshot: './Venyou.png'
  },
  {
    label: 'Scrabble Helper', icons: [
      { label: 'Javascript', icon: 'skill-icons:javascript' },
      { label: 'Vue.js', icon: 'skill-icons:vuejs-dark' },
      { label: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
    ], description: 'This is a simple app to help Scrabble afficionados. Enter a word and the app will tell you whether it\'s a valid word, how many points it is worth and other words you can make with those letters.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/DictionaryPlus' },
      { label: 'Website', icon: 'line-md:external-link-rounded', to: 'https://scrabblehelper.netlify.app/' }
    ], screenshot: './SH.png'
  },
  {
    label: 'TennisHistory (GraphQL)', icons: [
      { label: 'TypeScript', icon: 'skill-icons:typescript' },
      { label: 'GraphQL', icon: 'skill-icons:graphql-dark' },
      { label: 'Cypher', icon: 'vscode-icons:file-type-neo4j' },
      { label: 'Vue.js', icon: 'skill-icons:vuejs-dark' },
      { label: 'Vuetify', icon: 'skill-icons:vuetify-dark' },
      { label: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
      { label: 'Express.js', icon: 'skill-icons:expressjs-dark' },
      { label: 'Node.js', icon: 'skill-icons:nodejs-dark' },
      { label: 'Neo4j', icon: 'vscode-icons:file-type-neo4j' },
    ], description: 'This is a previous version of TennisHistory using GraphQL and Vue.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/TennisHistory-GraphQL' },
    ], screenshot: './TH1.png'
  },
  {
    label: 'TennisHistory (Sequelize)', icons: [
      { label: 'TypeScript', icon: 'skill-icons:typescript' },
      { label: 'Vue.js', icon: 'skill-icons:vuejs-dark' },
      { label: 'Sequelize', icon: 'skill-icons:sequelize-dark' },
      { label: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
      { label: 'Vuetify', icon: 'skill-icons:vuetify-dark' },
      { label: 'Express.js', icon: 'skill-icons:expressjs-dark' },
      { label: 'Node.js', icon: 'skill-icons:nodejs-dark' },
    ], description: 'This is a previous version of TennisHistory using Sequelize.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/TennisHistory/tree/sequelize' }
    ], screenshot: './TH.png'
  },
  {
    label: 'TennisHistory (Django)', icons: [
      { label: 'Javascript', icon: 'skill-icons:javascript' },
      { label: 'Python', icon: 'skill-icons:python-dark' },
      { label: 'Vue.js', icon: 'skill-icons:vuejs-dark' },
      { label: 'Django', icon: 'skill-icons:django' },
    ], description: 'This is a previous version of TennisHistory using Django.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/TennisHistory/tree/django' }
    ], screenshot: './TH.png'
  },
  {
    label: 'FantasyTennis', icons: [
      { label: 'Javascript', icon: 'skill-icons:javascript' },
      { label: 'Vue.js', icon: 'skill-icons:vuejs-dark' },
      { label: 'Mongoose', icon: 'skill-icons:mongodb' },
      { label: 'Express.js', icon: 'skill-icons:expressjs-dark' },
      { label: 'Node.js', icon: 'skill-icons:nodejs-dark' },
    ], description: 'This is the first version of TennisHistory, built using the MEVN stack and with additional functionality of allowing users to predict what they think the outcomes of tennis tournaments will be.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/FantasyTennis' }
    ], screenshot: './FT.png'
  },
  {
    label: 'Portfolio', icons: [
      { label: 'Javascript', icon: 'skill-icons:javascript' },
      { label: 'Nuxt.js', icon: 'skill-icons:nuxtjs-dark' },
      { label: 'Nuxt UI', icon: 'skill-icons:nuxtjs-dark' },
    ], description: 'The current portfolio website made by yours truly.', links: [
      { label: 'Github', icon: 'skill-icons:github-dark', to: 'https://github.com/cys2110/portfolio' }
    ], screenshot: './Portfolio.png'
  }
]
</script>

<template>
  <div class="w-full">
    <u-dashboard-panel>
      <template #header>
        <u-dashboard-navbar>
          <template #leading>
            <u-dashboard-sidebar-collapse />
          </template>
          <template #title>
            <u-icon name="line-md:computer-twotone" class="text-xl" />
            Projects
          </template>
        </u-dashboard-navbar>
      </template>
      <template #body>
        <u-page-columns>
          <u-page-card v-for=" project in projects " :key=" project.label " reverse
            :ui=" { title: 'text-2xl flex justify-between', body: 'w-full' } " :description=" project.description ">
            <template #title>
              <div>{{ project.label }}</div>
              <div class="flex gap-2"><u-button v-for=" link in project.links " :key=" link.label " :icon=" link.icon "
                  :to=" link.to " variant="outline" size="sm" /></div>
            </template>
            <nuxt-img :src=" project.screenshot " class="w-full" />
            <template #footer>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
                <u-badge v-for=" icon in project.icons " :key=" icon.label " :icon=" icon.icon " :label=" icon.label "
                  color="secondary" variant="outline" class="mx-2" />
              </div>
            </template>
          </u-page-card>
        </u-page-columns>
      </template>
    </u-dashboard-panel>
  </div>
</template>