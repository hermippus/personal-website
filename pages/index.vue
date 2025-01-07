<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 select-none">
    <div class="grid grid-cols-1 gap-6 max-w-3xl w-full">
      <!-- Title & Subtitle block -->
      <div class="border border-main p-4 rounded-xl shadow-xl hover-card flex items-center gap-4">
        <a href="https://github.com/hermippus" target="_blank" class="w-16 h-16">
          <img src="/assets/Github.svg" alt="Github" class="w-16 h-16 object-cover">
        </a>
        <div>
          <h1 class="text-xl text-title font-bold">Hermippus</h1>
          <h2 class="text-sm text-subtitle">Fullstack developer & DevOps</h2>
        </div>
      </div>

      <!-- Skills block -->
      <div class="border border-main p-4 rounded-xl w-full hover-card">
        <h1 class="text-lg text-title font-bold mb-2">Skills</h1>
        <div class="bg-gray-100 rounded-lg p-2">
          <div v-for="(items, category) in skills" :key="category" class="text-sm text-[#14506F] flex gap-x-1 mb-2">
            <p>{{ category }}:</p>
            <div class="text-[#5B89A1]">
              <p>{{ items.join(', ') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- About me & Contacts block -->
      <div class="border border-main p-4 rounded-xl hover-card">
        <h1 class="text-lg text-title font-bold mb-2">About Me</h1>
        <p class="text-subtitle text-sm mb-4">
          Hi! I'm 17 and I like computer science. Currently, I'm learning backend, frontend development, and DevOps.
        </p>
        <h1 class="text-lg text-title font-bold mb-2">Contacts</h1>
        <p class="text-subtitle text-sm">E-mail: hermippus@proton.me</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = {
  'Languages': ['Java', 'JavaScript', 'TypeScript'],
  'Tools': ['Gradle', 'Maven', 'NeoVim', 'IntelliJ IDEA', 'Figma'],
  'Frameworks': ['Spring', 'NuxtJS', 'VueJS', 'TailwindCSS'],
  'DevOps': ['Jenkins', 'GitHub Actions', 'Docker/Podman'],
  'Databases': ['PostgreSQL', 'MySQL/MariaDB'],
  'GNU/Linux distros': ['Arch Linux', 'Rocky Linux', 'Debian']
};
</script>

<style scoped>
.hover-card {
  transition: transform 0.9s cubic-bezier(0.215, 0.61, 0.355, 1),
  box-shadow 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hover-card:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 15px -3px rgb(103, 193, 192),
  0 4px 6px -2px rgb(73, 162, 151);
}


.text-title {
  color: #67C1C0;
}

.text-subtitle {
  color: #617170;
}

.border-main {
  border-color: #939393;
}
</style>
