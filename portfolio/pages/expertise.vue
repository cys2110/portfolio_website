<script setup lang="ts">
definePageMeta( { name: 'expertise' } )

const componentLibraries = [ 'Material UI', 'Tailwind CSS', 'Nuxt UI', 'Prime Vue', 'Vuetify', 'Chakra' ]

const expertise = [
  {
    label: 'Languages', items: [
      { label: 'Javascript', icon: 'skill-icons:javascript' },
      { label: 'TypeScript', icon: 'skill-icons:typescript' },
      { label: 'GraphQL', icon: 'skill-icons:graphql-dark' },
      { label: 'Python', icon: 'skill-icons:python-dark' },
      { label: 'SQL', icon: 'hugeicons:sql' },
      { label: 'HTML', icon: 'skill-icons:html' },
      { label: 'CSS', icon: 'skill-icons:css' },
      { label: 'Cypher', icon: 'vscode-icons:file-type-neo4j' },
    ]
  },
  {
    label: 'Frameworks', items: [
      { label: 'React', icon: 'skill-icons:react-dark' },
      { label: 'Next.js', icon: 'skill-icons:nextjs-dark' },
      { label: 'Vue.js', icon: 'skill-icons:vuejs-dark' },
      { label: 'Nuxt.js', icon: 'skill-icons:nuxtjs-dark' },
      { label: 'Django', icon: 'skill-icons:django' },
      { label: 'Sequelize', icon: 'skill-icons:sequelize-dark' },
      { label: 'Express.js', icon: 'skill-icons:expressjs-dark' },
      { label: 'Node.js', icon: 'skill-icons:nodejs-dark' },
      { label: 'Mongoose', icon: 'skill-icons:mongodb' },
    ]
  },
  {
    label: 'Component Libraries', items: [
      { label: 'Material UI', icon: 'skill-icons:materialui-dark' },
      { label: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-dark' },
      { label: 'Nuxt UI', icon: 'skill-icons:nuxtjs-dark' },
      { label: 'PrimeVue', icon: 'simple-icons:primevue' },
      { label: 'Vuetify', icon: 'skill-icons:vuetify-dark' },
      { label: 'Chakra', icon: 'devicon:chakraui' },
      { label: 'Ant Design', icon: 'devicon:antdesign' },
    ]
  },
  {
    label: 'Tools', items: [
      { label: 'MongoDB', icon: 'skill-icons:mongodb' },
      { label: 'PostgreSQL', icon: 'skill-icons:postgresql-dark' },
      { label: 'Vercel', icon: 'skill-icons:vercel-dark' },
      { label: 'Netlify', icon: 'skill-icons:netlify-dark' },
      { label: 'Github', icon: 'skill-icons:github-dark' },
      { label: 'Figma', icon: 'skill-icons:figma-dark' },
      { label: 'Neo4j', icon: 'vscode-icons:file-type-neo4j' },
      { label: 'Supabase', icon: 'skill-icons:supabase-dark' },
      { label: 'Apache eCharts', icon: 'simple-icons:apacheecharts' }
    ]
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
            <u-icon name="qlementine-icons:dictionary-16" class="text-xl" />
            Expertise
          </template>
        </u-dashboard-navbar>
      </template>
      <template #body>
        <u-page-list class="gap-5">
          <u-page-card v-for=" item in expertise " :key=" item.label " :title=" item.label ">
            <u-page-marquee pause-on-hover>
              <div v-for=" skill in item.items " :key=" item.label " class="flex flex-col items-center">
                <u-icon :name=" skill.icon " class="text-2xl" />
                <div>{{ skill.label }}</div>
              </div>
            </u-page-marquee>
          </u-page-card>
        </u-page-list>
      </template>
    </u-dashboard-panel>
  </div>
</template>