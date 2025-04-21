<script setup>
const { error, pending, data: repos } = await useFetch('https://api.github.com/users/maurodf0/repos');
//display only repo with description and sorted by updated_at date
const reposWithDescription = computed(() => repos.value.filter(repo => repo.description).sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)))

console.log(error)
</script>

<template>

<pre>  
  {{ repos }}
  </pre>

  <div class="">
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong, try again... <br> {{ error }}</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="repo in reposWithDescription"
          class="border border-gray-200 dark:border-gray-700 rounded-sm p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
          :key="repo.id">
          <a :href="repo.html_url" target="_blank">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ repo.name }}</div>
            
            </div>
            <p class="text-sm mb-0" >{{ repo.description }}</p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

