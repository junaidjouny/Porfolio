<template>
  <div class="blog bg-gray-900 min-h-screen py-16">
        <div class="container mx-auto">
            <heading description="TIPS, INSIGHTS, AND BEST PRACTICES ABOUT WEB DESIGN AND DEVELOPPMENT" span="Latest">Posts</heading>
            <div class="w-full lg:w-5/6 mx-auto">
                <div class="mt-14 grid grid-flow-col grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-7">
                    <div class="text-white" v-for="blog in blogs" :key="blog.id">
                        <blog-card :blog="blog" />
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Heading from './../../components/Heading/index.vue';
import BlogCard from './../../components/BlogCard/index.vue';
import VScode from './../../assets/vs-code.jpg'
import ReactVsVue from './../../assets/react-vs-vue.jpg'
import Yoga from './../../assets/yoga.jpg'
import Cooking from './../../assets/cooking.jpg'
export default {
    data() {
        return {
            VScode: VScode,
            blogs: [
                {id: 1, title: "Top 6 VS-Code Extensions for web Developers", description: "Visual Studio Code is a product of Microsoft for Windows, macOS, and Linux operating systems. VS-Code includes support for embedded Git control, debugging, GitHub, snippets, syntax highlighting intelligent code completion, and the most important thing to refactor your code.", image: VScode, link: 'https://wapgee.com/post/25/top-6-vs-code-extensions-for-software-developers'},
                {id: 2, title: "React vs Vue: Why I choose React over Vue", description: "If you’re at least somewhat familiar with front-end development, you’ve probably heard about React and Vue. React and Vue are very similar in several aspects. Both use a virtual DOM, and both view libraries. Both Vue and React are solutions to the same problem as reactive HTML rendering tools.", image: ReactVsVue, link: "https://wapgee.com/post/26/react-vs-vue:-why-i-choose-react-over-vue"},
                {id: 3, title: "Top 5 Best Youtube channels for Yoga", description: "Being a yoga expert is so much better without expensive yoga studio memberships, crowded group classes, and that feeling of looking out of place. Now thanks to YouTube. With countless yoga videos, you can practice yoga in the comfort of your own home without investing a single pie.", image: Yoga, link: "https://wapgee.com/post/23/top-5-best-youtube-channels-for-yoga"},
                {id: 4, title: "Best YouTube Channels For Cooking", description: "If you are a food lover you probably search for tasty food on the internet, there are tons of cooking videos over there just like anything else, they’re not all good, Here are some of the top recommendations. Whether you want to cook a full recipe for your entire family or just learn how to chop an onion correctly.", image: Cooking, link: "https://wapgee.com/post/27/best-youtube-channels-for-cooking"},
            ]
        }
    },
    components: {
        Heading,
        BlogCard
    }
}
</script>

<style>

</style>