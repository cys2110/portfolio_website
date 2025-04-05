<script setup lang="ts">
const experience = [
  {
    company: 'Another',
    position: "Software Engineer",
    dates: "November 2024-present",
    description: [
      "Developed and maintained platform for addressing off-price inventory needs using React."
    ]
  },
  {
    company: "Scott & Scott LLP",
    position: "Associate, Securities Litigation",
    dates: "October 2023-December 2023",
    description: [
      "Represented clients in securities litigation matters, including in state and federal courts."
    ]
  },
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
  <div class="w-full">
    <u-dashboard-panel>
      <template #header>
        <u-dashboard-navbar>
          <template #leading>
            <u-dashboard-sidebar-collapse />
          </template>
          <template #title>
            <u-icon name="line-md:briefcase-twotone" class="text-xl" />
            Experience
          </template>
        </u-dashboard-navbar>
      </template>
      <template #body>
        <u-page-grid>
          <u-page-card v-for=" item in experience " :key=" item.company ">
            <template #title>
              <div>{{ item.company }}</div>
              <div>{{ item.position }}</div>
            </template>
            <template #description>
              <ul>
                <li v-for=" description in item.description " :key=" description ">{{ description }}</li>
              </ul>
            </template>
            <template #footer>{{ item.dates }}</template>
          </u-page-card>
        </u-page-grid>
      </template>
    </u-dashboard-panel>
  </div>
</template>