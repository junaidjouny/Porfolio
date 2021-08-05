<template>
  <button :class="`${className} uppercase px-10 py-3 font-medium rounded-full flex items-center transition delay-150 duration-300 ease-in-out`" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
    props: {
        className: {
            type: String,
        },
        onClick: {
            type: Function,
            require: true
        }
    }
}
</script>

<style>

</style>