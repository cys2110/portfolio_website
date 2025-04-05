<script setup lang="ts">
const links = [
  { label: 'About', to: { name: 'home' }, icon: 'line-md:home-twotone' },
  { label: 'Education', to: { name: 'education' }, icon: 'flowbite:user-graduate-outline' },
  { label: 'Experience', to: { name: 'experience' }, icon: 'line-md:briefcase-twotone' },
  { label: "Expertise", to: { name: 'expertise' }, icon: 'qlementine-icons:dictionary-16' },
  { label: "Projects", to: { name: 'projects' }, icon: 'line-md:computer-twotone' },
]

const footer = [
  { icon: 'line-md:email-alt-twotone', to: 'mailto:csheridan2110@gmail.com' },
  { icon: 'line-md:github-twotone', to: 'https://github.com/cys2110' },
  { icon: 'line-md:linkedin', to: 'https://www.linkedin.com/in/claire-y-sheridan/' },
]
</script>

<template>
  <u-dashboard-group>
    <u-dashboard-search />
    <u-dashboard-sidebar collapsible>
      <template #header=" { collapsed } ">
        <u-avatar src="/headshot.jpeg" />
        {{ collapsed ? "" : "Claire Sheridan" }}
      </template>
      <template #default=" { collapsed } ">
        <u-dashboard-search-button :collapsed />

        <u-navigation-menu :collapsed :items=" links " orientation="vertical" />
      </template>

      <template #footer=" { collapsed } ">
        <u-navigation-menu :collapsed :items=" footer " />
      </template>
    </u-dashboard-sidebar>
    <slot />
  </u-dashboard-group>
</template>