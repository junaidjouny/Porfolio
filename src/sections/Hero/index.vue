<template>
  <div class="hero h-screen bg-auto bg-cover bg-black bg-no-repeat bg-left-top " :style="`background-image: url(${Image})`" >
      <!-- :style="`background-image: url(${Image})`" -->
      <div class="container mx-auto text-white h-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                <div></div>
                <div class="flex items-center h-full">
                    <div class="info">
                        <h2 class="uppercase mt-3 text-base font-bold text-3xl md:text-5xl text-center sm:text-left">I'm <span class="text-primary bg-primary-100 text-white px-6 rounded-lg block sm:inline-block">
                            <vue-typer
                            :text='["Junaid Ahmed!", "a Freelancer!","a web developer!","a designer!", "a blogger!"]'
                            :repeat='Infinity'
                            :shuffle='false'
                            initial-action='typing'
                            :pre-type-delay='70'
                            :type-delay='300'
                            :pre-erase-delay='2000'
                            :erase-delay='1000'
                            erase-style='clear'
                            :erase-on-complete='false'
                            caret-animation='blink'
                            ></vue-typer>
                            </span>
                        </h2>
                        <p class="text-whie w-5/6 mt-5 text-lg">I'm a Freelance UI/UX Designer and Developer based in Gilgit, Pakistan. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                        <div class="flex flex-wrap">
                            <Button className="bg-primary-100 hover:bg-secondary mt-8 mr-5" :onClick="() => this.$router.push('/about')">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            More about me</Button>
                            <Button className="border-2 border-transparent border-primary hover:bg-primary-100 mt-8" :onClick="() => this.$router.push('/portfolio')">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            Portfolio</Button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import Image from './../../assets/hero-image.jpg'
import Button from './../../components/Button/index.vue'
import { VueTyper } from 'vue-typer'
export default {
    data() {
        return{
            Image: Image
        }
    },
    components: {
        Button,
        VueTyper
    },
    methods: {
        handleClick() {
            console.log('hi')
        }
    }
}
</script>

<style>
.vue-typer .custom.char.selected {
  color: #E91E63;
}
</style>