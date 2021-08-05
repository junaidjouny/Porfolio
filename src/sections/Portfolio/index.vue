<template>
  <div class="portfolio bg-gray-900 min-h-screen py-16">
        <div class="container mx-auto">
            <heading description="A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME." span="My">Portfolio</heading>
            <div class="w-full md:w-5/6 mx-auto">
                <div class="mt-14 grid grid-flow-row grid-cols-3 grid-rows-3 md:grid-cols-3 md:grid-rows-3 gap-7 text-white">
                    <a href="#" class="bg-white text-white rounded h-48 bg-white relative group transition delay-1000 duration-300 ease-in-out bg-cover"  :style="`background-image: url(${project.image})`" v-for="(project, index) in projects" :key="index">
                        <div class="invisible absolute bg-primary-100 w-full h-full rounded text-white flex justify-center items-center group-hover:visible">{{project.name}}</div>
                    </a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Heading from './../../components/Heading/index.vue'
import Image1 from './../../assets/image1.jpg'
import Image2 from './../../assets/image2.png'
import Image3 from './../../assets/image3.jpg'
import Image4 from './../../assets/image4.png'
import Image5 from './../../assets/image5.png'
import Image6 from './../../assets/image6.jpg'
export default {
    data() {
        return {
            projects: [
                {name: 'project 1', image: Image1},
                {name: 'project 2', image: Image2},
                {name: 'project 3', image: Image3},
                {name: 'project 4', image: Image4},
                {name: 'project 5', image: Image5},
                {name: 'project 6', image: Image6},
            ]
        }
    },
    components: {
        Heading
    }
}
</script>

<style>

</style>