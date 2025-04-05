<script setup lang="ts">
definePageMeta( { name: 'education' } )

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
            <u-icon name="flowbite:user-graduate-outline" class="text-xl" />
            Education
          </template>
        </u-dashboard-navbar>
      </template>
      <template #body>
        <u-page-grid>
          <u-page-card v-for=" item in education " :key=" item.institution " :description=" item.description ">
            <template #title>
              <div>{{ item.institution }}</div>
              <div>{{ item.degree }}</div>
            </template>
            <template #footer>{{ item.dates }}</template>
          </u-page-card>
        </u-page-grid>
      </template>
    </u-dashboard-panel>
  </div>
</template>