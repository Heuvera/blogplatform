<template>

    <div class="flex justify-center mx-auto">
      <h1 class="font-xl text-gray-200 font-bold">React Blog</h1>
      <div class="flex flex-col m-10">
        <ul class="flex absolute r-8">
         <li class="text-sm text-gray-200 font-semi">
          <router-link to="/react-vite-blog">How to setup a React Project with Vite</router-link>
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



