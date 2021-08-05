<template>
  <a :href="blog.link" target="blank" class="blog-card text-white">
    <div class="rounded-md overflow-hidden">
      <img :src="blog.image" alt="" class="max-h-60 transform-gpu hover:scale-150 transition delay-150 duration-300 ease-in-out rounded-md w-full">
    </div>
      <h3 class="text-xl font-bold uppercase my-4 hover:text-primary">{{blog.title}}</h3>
      <p class="text-sm mb-4">{{blog.description}}</p>
      <Button className="bg-primary-100 text-white flex justify-center hover:bg-secondary w-full md:w-56" :onClick="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        read more
        </Button>
  </a>
</template>

<script>
import Button from './../../components/Button/index.vue'
export default {
    props: {
        blog: {
            type: Object,
        }
    },
    components: {
        Button
    },
    methods: {
        handleClick() {
            return false
        }
    }
}
</script>

<style>

</style>