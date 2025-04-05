<script setup lang="ts">
definePageMeta( { name: 'home' } )
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
            <u-icon name="line-md:home-twotone" />
            About Me
          </template>
        </u-dashboard-navbar>
      </template>

      <template #body>
        <nuxt-img src="/headshot.jpeg" class="w-60 rounded-full mx-auto" />

        <p class="my-2 text-justify">I am a full stack software engineer who focuses on building user-friendly and
          accessible products. I utilize the skills I learned as an attorney to communicate effectively with clients and
          stakeholders to ensure that they receive the product that they are looking for. As we enter the Web 3.0 era, I
          look to work on projects which aim to effectively incorporate the advances we've made in technology in a
          socially responsible manner.</p>

        <p class="my-2 text-justify">I decided to leave the practice of law in order to find a career that I was truly
          passionate about. After doing a lot of research into possible career paths, software engineering was the one
          that resonated with me. I could marry my love of puzzles with my insatiable curiosity to learn new things.
          Moreover, during law school, I had rebuilt my law journal's <a
            class="text-primary-600 dark:text-primary-400 hover-link" href="https://aria.law.columbia.edu/">website</a>
          with zero coding knowledge
          and had loved the experience. I decided to enrol in a software engineering immersive bootcamp and only fell
          more in love with building websites and applications.</p>

        <p class="my-2 text-justify">When it comes to web development, I always try to find the technologies and
          languages most suited for the application, whether it is something that I already know or something that I
          have to learn. The goal is always to provide the user with the best experience possible. As a lawyer, I
          frequently had to research topics and become an expert on those topics quickly depending on the needs of the
          case. I apply these same skills to learn new technologies when a technology I am unfamiliar with would be a
          better solution.</p>

        <p class="my-2 text-justify">I believe that I would be a valuable asset to any team because I am always eager to
          learn and to apply the logical reasoning skills I honed as a lawyer to any problem I face. Moreover, my
          previous career has provided me with invaluable writing and communication skills that are necessary to
          communicate with stakeholders and clients.</p>
      </template>
    </u-dashboard-panel>
  </div>
</template>