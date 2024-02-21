<template>
    <div class="container mx-auto flex justify-between text-center">
        <router-link to ="/" class="text-xl font-bold text-center text-blue-900 py-10 ml-8">My Blog
         <h1 class="text-gray-200 py-6 text-2xl cursor-not-allowed">Hi, I'm Pascal.</h1>
         <img src="../assets/avatar.jpg" class="w-20  h-auto py-3 cursor-not-allowed" />
         <ul class="flex flex-col list-none">
          <li class="text-gray-500 relative pl-8"><router-link to="/css-trick">CSS Tricks</router-link>
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>
           <li class="text-gray-500 relative pl-8 font-medium"><router-link to="/javascript">Javascript</router-link>
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>
           <li class="text-gray-500 relative pl-8 font-medium"><router-link to="/react">React</router-link> 
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>
             <li class="text-gray-500 relative pl-8 font-medium"><router-link to="/vue">Vue</router-link> 
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>
           <li class="text-gray-500 relative pl-8 font-medium"><router-link to="/vue">Python</router-link> 
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>

           <transition name="fade">
             <a href="https://www.linkedin.com/in/okereke-pascal-72900724a"><img src="../assets/linkedin1.jpg" alt="" class="w-8"></a>
           </transition>

           
           <transition name="fade">
             <a href="https://twitter.com/delavegar_"><img src="../assets/xtwitter.jpg" alt="" class="w-8"></a>
           </transition>



         </ul> 
         </router-link>
         <nav>
            <ul class="flex space-x-4 mr-8 py-8">
               <li class="text-green-200" tabindex="1"><router-link to="/">Home</router-link></li>
               <li class="text-green-200" tabindex="2"><router-link to="/posts">Posts</router-link></li>
            </ul>    
         </nav> 
    </div>
    
</template>