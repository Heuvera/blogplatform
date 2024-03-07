<template>

    <div class="flex justify-center mx-auto">
      <h1 class="font-xl text-gray-200 font-bold">Javascript Blog</h1>
      <div class="flex flex-col m-10">
        <ul class="flex float-right">
         <li class="text-sm text-gray-200 font-semi">
          <router-link to="/null-undefined-blog">Null vs Undefined</router-link>
        </li>

        <br>
        <li class="text-sm text-gray-200 font-semi">
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


