<template>
  <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/1`">{{ post.title }} || {{ title }}</NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>Feb 2, 2022</div>
      <div>Andre Madarang</div>
    </div>
    <div class="post-preview leading-relaxed mt-4">
      {{ post.body }}
    </div>
  </div>
</template>
<script setup>
const title = useState('title')
const route = useRoute()
const { data: post } = await useFetch(
  `http://localhost/nuxt-blog/backend/api/posts/${route.params.id}`
)
</script>