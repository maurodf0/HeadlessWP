<script setup lang="ts">

interface WpPosts {
  _embedded: {
    'wp:featuredmedia': Array<{
      source_url: string
    }>
  }
  title: { rendered: string }
  excerpt: { rendered: string }
  slug: string
  id: number
  date: string
}

const currentPage = ref(1)
const perPage = 12
const totalPages = ref(1)

const endpoint = computed(() =>
  `https://wp.maurodefalco.it/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage.value}`
)

const { data: posts, pending: loading, error, refresh } = useFetch<WpPosts[]>(endpoint, {
  key: `posts-page-${currentPage.value}`, // chiave unica per ogni pagina
  watch: [endpoint],
  onResponse({ response }) {
    const total = response.headers.get('x-wp-totalpages')
    if (total) {
      totalPages.value = parseInt(total, 10)
    }
  },
  // Facoltativo: forza il caching lato client/server per una certa durata
  // cache: true, // cache automatico lato server/client
  // default: ttl 60s in SSR. Puoi anche specificare ttl:
  // getCachedData: true,
})



function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>


<template>

<div class="blog-wrapper">
    <PagesIntroContent>
        <template #title>Blog</template>
        <template #description>Articoli e guide su ciò che <em>amo fare.</em> Web Development, Vue, Nuxt, WordPress, UI/UX.</template>
    </PagesIntroContent>

    <div v-if="loading" class="container max-w-[1080px] p-4 mx-auto">
        Loading...
    </div>

    <div v-if="error" class="container max-w-[1080px] p-4 mx-auto">
        Qualcosa è andato storto, per favore riprova più tardi.
    </div>


 
    <div v-if="posts" class="container max-w-[1080px] p-4 mx-auto grid md:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="card bg-gray-950 py-4 border border-opacity-45 border-neutral-700 px-4 rounded-lg" >
            <div class="card-body overflow-hidden">
              <NuxtLink :to="post.slug">
                <img
                v-if="post._embedded?.['wp:featuredmedia']?.[0]?.source_url" 
                :src="post._embedded?.['wp:featuredmedia']?.[0]?.source_url" alt="Post Image" class="mb-4 rounded-lg w-full h-48 object-cover">
                <div v-else class="mb-4 rounded-lg w-full h-48 bg-gray-800"></div>
            </NuxtLink>
                <NuxtLink :to="post.slug"> 
                    <h2 class="text-xl font-medium mb-2 card-title">{{ post.title.rendered }}</h2>
                </NuxtLink>
                <p>{{ new Date(post?.date).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }) }} </p>
                <!-- <p v-html="post.excerpt.rendered"class="mb-4 card-text"></p> -->
                <a :href="post.slug" class="btn btn-primary">Leggi</a>
            </div>
        </div>
        
    </div>
<div class="container max-w-[1080px] p-4 mx-auto mt-8 flex justify-center items-center gap-2" v-if="posts?.length">
  <button
    @click="goToPage(currentPage - 1)"
    :disabled="currentPage === 1"
    class="px-3 py-2 border rounded disabled:opacity-50"
  >
    ←
  </button>

  <template v-for="page in totalPages" :key="page">
    <a
      @click="goToPage(page)"
      :class="[
        'px-3 rounded cursor-pointer',
        page === currentPage ? 'bg-sky-600 text-white' : 'hover:bg-gray-700'
      ]"
    >
      {{ page }}
  </a>
  </template>

  <button
    @click="goToPage(currentPage + 1)"
    :disabled="currentPage === totalPages"
    class="px-3 py-2 border rounded disabled:opacity-50"
  >
    →
  </button>
</div>
</div>
</template>