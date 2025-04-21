<script setup>
const { error, pending, data: repos } = await useFetch('https://api.github.com/users/maurodf0/repos', {
    headers: {
    'User-Agent': 'HeadlessWP'
  }
});
//display only repo with description and sorted by updated_at date
const reposWithDescription = computed(() => repos.value.filter(repo => repo.description).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)))


</script>

<template>

  <div class="">
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong, try again... <br> {{ error }}</section>
    <section v-else>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <li v-for="repo in reposWithDescription"
          class="flex flex-col gap-8 p-4 md:p-8 rounded-lg bg-gray-950 hover:scale-105 border-2 border-gray-900 hover:rotate-3 transition-all hover:border hover:border-sky-400 relative"
          :key="repo.id">
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ repo.name }}</div>
            
            </div>
            <p class="text-sm mb-0" >{{ repo.description }}</p>
            <div class="language">
              <span class="inline-block mr-4 mt-2 text-sm">#{{ repo.language }}</span>
            </div>
            <div class="topics">
              <span v-for="topic in repo.topics" :key="topic" class="inline-block mr-4 mt-2 text-sm">#{{ topic }}</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

