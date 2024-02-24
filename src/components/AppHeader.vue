<template>
    <div class="container mx-auto flex justify-between text-center fixed top-0 left-0 w-full h-full">
        <router-link to ="/" class="text-xl font-bold text-center text-blue-900 py-10 ml-8">My Blog
         <h1 class="text-gray-200 py-6 text-2xl cursor-not-allowed">Hi, I'm Pascal.</h1>
         <img src="../assets/avatar.jpg" class="w-20  h-auto py-3 cursor-not-allowed" />
         <ul class="flex flex-col list-none">
          <li class="text-gray-500 relative pl-8"><router-link to="/css-trick">CSS Tricks</router-link>
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>
           <li class="text-gray-500 relative pl-8 font-medium"><router-link to="/javascript-blog">Javascript</router-link>
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>
           <li class="text-gray-500 relative pl-8 font-medium"><router-link to="/react-blog">React</router-link> 
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>
             <li class="text-gray-500 relative pl-8 font-medium"><router-link to="/vue-blog">Vue</router-link> 
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>
           <li class="text-gray-500 relative pl-8 font-medium"><router-link to="/python-blog">Python</router-link> 
            <span class="absolute left-0 top-0 transform -translate-x-full">>></span>
           </li>

          <!--socials here-->
          
           <ul class="flex space-x-4 py-40">

            <li>
              <a href="https://www.linkedin.com/in/okereke-pascal-72900724a" target="_blank">
                <img src="../assets/linkedin1.jpg" alt="" class="w-8">
            </a>
            </li>
           
          </ul>



         </ul> 
         </router-link>
         <nav>
            <ul class="flex space-x-4 mr-3 py-8">
               <li class="text-blue-900 font-bold" tabindex="1"><router-link to="/">Home</router-link></li>
               <li class="text-blue-900 font-bold" tabindex="2"><router-link to="/posts">Posts</router-link></li>
            </ul>    
            
         </nav> 
    </div>
    
</template>