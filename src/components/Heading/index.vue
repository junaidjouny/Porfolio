<template>
    <div>
        <h1 :class="`${className} text-primary text-6xl font-black text-center uppercase mb-4`"><span class="text-white">{{span}}</span> <slot></slot></h1>
        <div class="flex text-center justify-center items-center">
            <span class="w-8 rounded-full h-1 bg-primary-100 mr-5"></span><p class="text-white uppercase text-center text-sm">{{description}}</p> <span class="w-8 rounded-full h-1 bg-primary-100 ml-5"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        className: {
            type: String
        },
        span: {
            type: String
        },
        description: {
            type: String
        },
    }
}
</script>

<style>

</style>