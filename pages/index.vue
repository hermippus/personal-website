<template>
  <div>
    <div class="container mx-auto select-none">
      <div class="grid grid-cols-3 gap-8 p-6">
        <div class="border border-main rounded-xl p-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C42] to-[#FF3C38]
       h-24 transition-all hover:shadow-xl hover:opacity-90">
          <h1 class="text-2xl -mt-2">@hermippus</h1>
          <h2 class="text-xl">fullstack developer & devops</h2>
        </div>
        <div class="border border-main rounded-xl p-6 transition-all hover:shadow-xl hover:opacity-90">
          <h1 class="text-lg -mt-4 text-title">languages</h1>
          <div class="flex flex-wrap gap-4 mt-4">
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              Java
            </div>
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              TypeScript
            </div>
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              JavaScript
            </div>
          </div>
        </div>
        <div class="border border-main rounded-xl p-6 transition-all hover:shadow-xl hover:opacity-90">
          <h1 class="text-lg -mt-4 text-title">devops & infrastructure</h1>
          <div class="flex flex-wrap gap-4  mt-4 items-start">
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              Jenkins
            </div>
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              GitHub Actions
            </div>
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              Docker
            </div>
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              Podman
            </div>
          </div>
        </div>
        <div class="border border-main rounded-xl p-6 -mt-24 transition-all hover:shadow-xl hover:opacity-90">
          <h1 class="text-lg -mt-4 text-title">about me</h1>
          <h2 class="text-md text-orange-400">
            Hi! I'm 17 and I'm a fullstack developer & devops.
            I'm currently learning Nuxt, TailwindCSS and Spring. I'm also learning DevOps tools like Jenkins and GitHub Actions.
          </h2>
          <h1 class="text-lg text-title">contacts</h1>
          <h2 class="text-md text-orange-400">
            GitHub: <a class="text-orange-500 hover:text-orange-600" href="https://github.com/hermippus">Click</a>
          </h2>
          <h2 class="text-md text-orange-400">
            Matrix: <a class="text-orange-500 hover:text-orange-600" href="https://duckduckgo.com">Soon</a>
          </h2>
        </div>
        <div class="border border-main rounded-xl p-6 -mt-4 transition-all hover:shadow-xl hover:opacity-90">
          <h1 class="text-lg -mt-4 text-title">frameworks</h1>
          <div class="flex flex-wrap gap-4 mt-4 items-start">
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              NuxtJS
            </div>
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              VueJS
            </div>
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              TailwindCSS
            </div>
            <div class="border border-main text-orange-400 py-2 px-4 rounded-lg shadow-md">
              Spring
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-title {
  color: #c9ac86;
}
.border-main {
  border-color: #A0A0A0;
}
div {
  font-family: Outfit,serif;
}
</style>