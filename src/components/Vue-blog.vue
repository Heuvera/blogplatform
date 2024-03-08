<template>

    <div class="flex flex-col justify-center relative items-center mx-auto">
      <h1 class="text-3xl text-gray-200 font-bold mb-12">Vue Blog</h1>
      <div class="flex justify-end">
        <ul class="flex flex-col list-none mr-64 md:mr-64">
         <li class="text-sm text-gray-200 font-semi mb-4">
          <router-link to="">Multi-word Error in Vue</router-link>
        </li>

        <br>
      <li class="text-sm text-gray-200 font-semi mb-4">
        <router-link to="">Vue router-link defeats a href link.</router-link>
      </li>
        </ul>
        </div>
      </div>

</template>

<script>

export default {
    name: 'vue-blog',
}

</script>



