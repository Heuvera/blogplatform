<template>
    <div class="container mx-auto flex justify-between text-center">
        <router-link to ="/" class="text-xl font-bold text-center text-blue-900 py-10 ml-8">My Blog</router-link>
         <nav>
            <ul class="flex space-x-4">
               <li class="text-green-200 py-6" tabindex="1"><router-link to="/">Home</router-link></li>
               <li class="text-green-200 py-6" tabindex="2"><router-link to="/posts">Posts</router-link></li>
            </ul>
         </nav>
    </div>
</template>