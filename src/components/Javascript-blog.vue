<template>

    <div class="flex justify-center mx-auto">
    <div class="text-2xl text-gray-200 font-bold p-2 py-2">
      <router-link to="/null-undefined-blog">Javascript Blog</router-link>
      <div class="flex flex-col m-10">
        <ul class="flex-shrink">
         <li class="text-sm text-gray-200 font-semi">
          <router-link to="/null-undefined-blog">Null vs Undefined</router-link></li>
        </ul>
      </div>
    </div>
    </div>
</template>


<script>
export default {
    name: 'javascript-blog',
}
</script>


