<template>
  <div class="relative">
    <span class="absolute top-3.5 left-4 text-gray-300">
      <slot></slot>
    </span>
    <input :placeholder="placeholder" :class="`${className} border border-transparent focus:outline-none focus:ring-2 focus:ring-primary bg-gray-600 py-3 pl-14 text-white focus:border-transparent rounded-full`" />
  </div>
</template>

<script>
export default {
    props: {
        className: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        onClick: {
            type: Function
        }
    }
}
</script>

<style>

</style>