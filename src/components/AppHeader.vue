<template>
    <div class="container mx-auto flex justify-between bg-blue-200 text-center">
        <router-link to ="/" class="text-xl font-bold text-center">My Blog</router-link>
         <nav>
            <ul class="flex space-x-4">
               <li><router-link to="/">Home</router-link></li>
               <li><router-link to="/about">About</router-link></li>
               <li><router-link to="/posts">Posts</router-link></li>
            </ul>
         </nav>
    </div>
</template>