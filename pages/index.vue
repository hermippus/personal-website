<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="grid grid-cols-3 gap-6 max-w-3xl w-full justify-items-end">
      <!-- Title & Subtitle block -->
      <div class="border border-main row-span-1 col-span-1 p-3 rounded-xl shadow-xl shadow-cyan-100 hover:shadow-cyan-200 hover:shadow-2xl hover:opacity-90 hover:scale-[101%] smooth">
        <h1 class="text-xl text-title">Hermippus</h1>
        <h2 class="text-base text-title">Fullstack developer & DevOps</h2>
      </div>
      <!-- Skills block -->
      <div class="border border-main row-span-2 col-span-2 p-3 rounded-xl shadow-xl shadow-cyan-100 hover:shadow-cyan-200 hover:shadow-2xl hover:opacity-90 hover:scale-[101%] smooth">
        <h1 class="text-md lg:text-lg text-title px-1">skills</h1>
        <div class="bg-gray-100 rounded-lg">
          <div class="text-sm text-[#14506F] p-2 flex gap-x-1">
            <p>Languages:</p>
            <div class="text-[#5B89A1]">
              <p>Java, JavaScript, TypeScript</p>
            </div>
          </div>
          <div class="text-sm text-[#14506F] p-2 flex gap-x-1">
            <p>Tools:</p>
            <div class="text-[#5B89A1]">
              <p>Gradle, Maven, NeoVim, Intellij IDEA, Figma</p>
            </div>
          </div>
          <div class="text-sm text-[#14506F] p-2 flex gap-x-1">
            <p>Frameworks:</p>
            <div class="text-[#5B89A1]">
              <p>Spring, NuxtJS, VueJS, TailwindCSS</p>
            </div>
          </div>
          <div class="text-sm text-[#14506F] p-2 flex gap-x-1">
            <p>DevOps:</p>
            <div class="text-[#5B89A1]">
              <p>Jenkins, GitHub Actions, Docker/Podman</p>
            </div>
          </div>
          <div class="text-sm text-[#14506F] p-2 flex gap-x-1">
            <p>Databases:</p>
            <div class="text-[#5B89A1]">
              <p>PostgreSQL, MySQL/MariaDB</p>
            </div>
          </div>
          <div class="text-sm text-[#14506F] p-2 flex gap-x-1">
            <p>GNU/Linux distros:</p>
            <div class="text-[#5B89A1]">
              <p>Arch Linux, Rocky Linux, Debian</p>
            </div>
          </div>
        </div>
      </div>
      <!-- About & Contacts block -->
      <div class="border border-main row-span-1 col-span-1 p-3 rounded-xl shadow-xl shadow-cyan-100  hover:shadow-cyan-200 hover:shadow-2xl hover:opacity-90 hover:scale-[101%] smooth">
        <h1 class="text-md lg:text-lg text-title">about me</h1>
        <p class="text-subtitle text-[13px] lg:text-sm">Hi! I'm 17 and I like computer science. Currently I'm learning backend, frontend dev and devops</p>
        <h1 class="text-md lg:text-lg  text-title">contacts</h1>
        <p class="text-subtitle text-[13px] lg:text-sm">E-mail: hermippus@proton.me</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.smooth {
  transition: all .8s cubic-bezier(.215,.61,.355,1);
}
.text-title {
  color: #67C1C0;
}

.text-subtitle {
  color: #617170
}

.border-main {
  border-color: #939393;
}
</style>