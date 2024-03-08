<template>

  <div class="flex flex-col relative justify-center items-center mx-auto">
    <h1 class="text-3xl text-gray-200 font-bold mb-12">Python Blog</h1>
    <div class="flex justify-end">
      <ul class="flex flex-col list-none mr-72 md:mr-64">
       <li class="text-sm text-gray-200 font-semi mb-4">
        <router-link to="">Python 1</router-link>
      </li>

      <br>
      <li class="text-sm text-gray-200 font-semi mb-4">
        <router-link to="">Python 2</router-link>
      </li>
      </ul>
      </div>
    </div>
</template>


<script>
 export default {
    name: 'python-blog'
 }
</script>



