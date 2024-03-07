<template>

    <div class="flex justify-center mx-auto">
      <h1 class="font-xl text-gray-200 font-bold">Javascript Blog</h1>
        <ul class="flex flex-col list-none m-12 absolute l-12">
         <li class="text-sm text-gray-200 font-semi">
          <router-link to="/null-undefined-blog">Null vs Undefined</router-link>
        </li>

        <br>
        <li class="text-sm text-gray-200 font-semi">
          <router-link to="">Keyboard Accessibility</router-link>
        </li>
        </ul>
      </div>
</template>


<script>
export default {
    name: 'javascript-blog',
}
</script>


