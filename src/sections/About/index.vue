<template>
  <div class="portfolio bg-gray-900 min-h-screen py-16">
        <div class="container mx-auto">
              <heading description="I AM A CREATIVE FRONTEND WEB DEVELOPER" span="About">Me</heading>
            <div class="w-full md:w-5/6 mx-auto">
                <div class="mt-14 px-10 py-5 bg-gray-400 text-white rounded-lg bg-opacity-10">
                   <p class="text-lg">My main specialization is the front-end development of rich web apps based on a JavaScript stack of technologies. Based on my previous experience and modern trends in the development world, I can confidently tell you. If your main aim is to create a complex web application with a complex structure and many features on the Front-end parts, we can use React/Next and Vue/Nuxt.js.
</p>
<h2 class="font-bold text-3xl mb-2 text-white">
    <span class="text-white">
                            <vue-typer
                            :text='["Professional and Engineering skills:"]'
                            :repeat='Infinity'
                            :shuffle='false'
                            initial-action='typing'
                            :pre-type-delay='70'
                            :type-delay='200'
                            :pre-erase-delay='2000'
                            :erase-delay='1000'
                            erase-style='clear'
                            :erase-on-complete='false'
                            caret-animation='blink'
                            ></vue-typer>
                            </span></h2>
<p>✔ Have strong experience with Javascript (ES6) + Flow, Typescript.</p>
<p>
✔ React/Next.js, Redux Saga, Material UI, AntDesign, TwitterBootstrap.</p>
<p>
✔ Vue/Nuxt.js, Vuex, Vuetify, Element UI, Tailwindcss, BootstrapVue</p>
<p> ✔ Gatsby, Heroku, Netlify.</p>
<p> ✔ I'm proficient in REST/JSON API's on client-side implementation.</p>
<p>✔ Project Management (Github, Gitlab, BitBucket)</p>
<p>✔ SCRUM (Jira, Trello, Monday, ASANA)</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Heading from './../../components/Heading/index.vue'
import { VueTyper } from 'vue-typer'
export default {
   
    components: {
        Heading,
        VueTyper
    }
}
</script>

<style>
.vue-typer .custom.char.typed {
  color: #ffff;
}
</style>