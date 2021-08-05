<template>
  <nav class="no-sel z-10 p-5 w-16 flex justify-center text-white items-center flex-col bg-gray-700 rounded-full fixed mt10 ml-10 top-10 cursor-pointer" @click="isOpen = !isOpen">
      <span v-if="isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
      <span v-else>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
      </span>
      <ul v-if="isOpen" class="text-black ml-10">
          <li class="min-w-full bg-gray-700 sm:rounded-sm lg:bg-transparent hover:text-primary ml-20 uppercase py-3 group">
              <router-link class="flex font-normal text-md" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-300 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span class="border-l-4 border-transparent group-hover:border-primary pl-4 text-gray-300">
                    Home
                </span>
              </router-link>
          </li>
          <li class="min-w-full bg-gray-700 sm:rounded-sm lg:bg-transparent hover:text-primary ml-20 uppercase py-3 group">
              <router-link class="flex font-normal text-md" to="/about">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-300 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="border-l-4 border-transparent group-hover:border-primary pl-4 text-gray-300">
                    About
                </span>
              </router-link>
          </li>
          <li class="min-w-full bg-gray-700 sm:rounded-sm lg:bg-transparent hover:text-primary ml-20 uppercase py-3 group">
              <router-link class="flex font-normal text-md" to="/portfolio">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-300 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span class="border-l-4 border-transparent group-hover:border-primary pl-4 text-gray-300">
                    Portfolio
                </span>
              </router-link>
          </li>
          <li class="min-w-full bg-gray-700 sm:rounded-sm lg:bg-transparent hover:text-primary ml-20 uppercase py-3 group">
              <router-link class="flex font-normal text-md" to="/contact">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-300 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span class="border-l-4 border-transparent group-hover:border-primary pl-4 text-gray-300">
                    Contact
                </span>
              </router-link>
          </li>
          <li class="min-w-full bg-gray-700 sm:rounded-sm lg:bg-transparent hover:text-primary ml-20 uppercase py-3 group">
              <router-link class="flex font-normal text-md" to="/blog">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 text-gray-300 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
                <span class="border-l-4 border-transparent group-hover:border-primary pl-4 text-gray-300">
                    Blog
                </span>
              </router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return{
            isOpen: false
        }
    }
}
</script>

<style>
 .no-sel{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>