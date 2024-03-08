<template>

    <div class="flex flex-col justify-center items-center mx-auto">
      <h1 class="text-3xl text-gray-200 font-bold mb-12">Javascript Blog</h1>
      <div class="flex justify-end">
        <ul class="flex flex-col list-none mr-64 lg:mr-64 space-x-40">
         <li class="text-sm text-gray-200 font-semi mb-4">
          <router-link to="/null-undefined-blog">Null vs Undefined</router-link>
        </li>

        <br>
        <li class="text-sm text-gray-200 font-semi mb-4">
          <router-link to="">Keyboard Accessibility</router-link>
        </li>
        </ul>
        </div>
      </div>
</template>


<script>
export default {
    name: 'javascript-blog',
}
</script>


