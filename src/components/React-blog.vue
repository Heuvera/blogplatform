<template>

  <div class="flex flex-col justify-center items-center relative mx-auto">
    <h1 class="text-3xl text-gray-200 font-bold mb-12">React Blog</h1>
    <div class="flex justify-end">
      <ul class="flex flex-col list-none mr-18">
       <li class="text-sm text-gray-200 font-semi mb-4">
        <router-link to="/react-vite-blog">How to set up a React Project with Vite</router-link>
      </li>

      <br>
      <li class="text-sm text-gray-200 font-semi mb-4">
        <router-link to="">Why Jsx is different from HTML</router-link>
      </li>
      </ul>
      </div>
    </div>
</template>

<script>

export default {
    name: 'react-blog',
}
</script>



