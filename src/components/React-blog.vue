<template>

  <div class="flex justify-center mx-auto">
    <h1 class="font-xl text-gray-200 font-bold">React Blog</h1>
      <ul class="flex flex-col list-none m-12 absolute l-8">
       <li class="text-sm text-gray-200 font-semi">
        <router-link to="/react-vite-blog">How to set up a React Project with Vite</router-link>
      </li>

      <br>
      <li class="text-sm text-gray-200 font-semi">
        <router-link to="">Why Jsx is different from HTML</router-link>
      </li>
      </ul>
    </div>
</template>

<script>

export default {
    name: 'react-blog',
}
</script>



