import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide(
    'apiFetch', 
    $fetch.create({ baseURL: process.env.BASE_URL }))
})
