<template>
    <div class="container mx-auto flex justify-between text-center absolute top-0 left-0 w-full h-full">
        <router-link to ="/" class="text-xl font-bold text-center text-blue-900 py-10 ml-8">
         <h1 class="text-gray-200 py-6 text-2xl cursor-not-allowed font-bold">
           <span class="animate-pulse text-green-700 font-bold text-3xl">Pascal's</span>
           <br>
           <span class="animate-bounce text-green-700">Blog</span>
         </h1>

         <img src="../assets/avatar.jpg" class="w-20  h-auto py-3 cursor-not-allowed" />

         <ul class="flex flex-col list-none">
          <li class="text-gray-500 relative border border-gray-900 rounded-xl pl-8 p-3 m-2 shadow-blue bg-black"><router-link to="/css-trick">CSS Tricks</router-link>
           </li>
           <li class="text-gray-500 relative pl-8 border border-gray-900 rounded-xl p-3 m-2 font-medium shadow-blue bg-black"><router-link to="/javascript-blog">Javascript</router-link>
           </li>
           <li class="text-gray-500 relative pl-8 border border-gray-900 rounded-xl p-3 m-2 font-medium shadow-blue bg-black"><router-link to="/react-blog">React</router-link>
           </li>
             <li class="text-gray-500 relative pl-8 border border-gray-900 rounded-xl p-3 m-2 font-medium shadow-blue bg-black"><router-link to="/vue-blog">Vue</router-link> 
           </li>
           <li class="text-gray-500 relative border border-gray-900 rounded-xl p-4 m-2 font-medium shadow-blue bg-black"><router-link to="/python-blog">Python</router-link> 
           </li>

         </ul> 
         </router-link>

         <!--Hamburger menu for mobile devices-->
         <div class="md-hidden">
            <button @click="toggleMenu" class="text-blue-900 font-bold py-1">
               <img src="../assets/hamburger-icon.png" class="text-white w-4 h-4" alt="">      
            </button>

            <ul v-if="showMenu" class="flex flex-col list-none">
             <li class="text-blue-900 font-bold" tabindex="1"><router-link to="/">Home</router-link></li>
             <li class="text-blue-900 font-bold" tabindex="2"><router-link to="/posts">Posts</router-link></li>
            </ul>
         </div>

         <nav class="hidden lg:block">
            <ul class="flex space-x-4 mt-5 py-2">
               <li class="text-blue-900 font-bold" tabindex="1"><router-link to="/">Home</router-link></li>
               <li class="text-blue-900 font-bold" tabindex="2"><router-link to="/posts">Posts</router-link></li>
            </ul>    
            
         </nav> 
    </div>
    
</template>


<script> 
export default {    
      data() {
         return {
            showMenu: false
         };
      },

   methods: {
      toggleMenu() {
      this.showMenu = !this.showMenu;
   },
   }
   };
</script>

<style scoped>
   @keyframes pulse {
      0%, 100% {
         opacity: 1;
      }
      50% {
         opacity: 0.5;
      }
   }

   @keyframes bounce {
      0%, 100% {
         transform: translateY(0);
      }
      50% {
         transform: translateY(-20px);
      }
   }

   .animate-pulse {
      animation: pulse 2s infinite;
   }

   .animate-bounce{
      animation: bounce 2s infinite;
   }

   .shadow-blue {
      box-shadow: 0 0 20px rgba(0, 0, 255, 0.5)
   }


</style>