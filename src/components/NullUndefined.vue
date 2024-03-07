<template>
    <div class="flex justify-center bg-black min-w-screen min-h-screen">
        <div class="min-w-0 mx-auto m-3">
            <h1 class="text-gray-200 text-2xl font-large">Null vs  Undefined</h1>
            <div class="flex flex-column absolute left-7 m-8">
            <p class="text-gray-200 text-lg font-sm">
              In Javascript, Null and Undefined are special values that indicates the absence of a value
              or object, So what do they do? Null is an assigned value which means nothing and Undefined means
              a variable declared but not defined yet.
              <br>
              For example,
              <br>
                <code class="text-white">
                    <br>
                    const myself = null;
                    <br>
                    console.log(myself);
                    <br>
                    // null
                </code>
                <br>
                The code above is a null, and it is assigned to a variable as a representation of no value.
                <br> Some developers use null for the business there are trying to solve. it is also Primitive value.
                <br> Null is not strictly equal to undefined, there are loosely equal.
                <br> Here is an example,

                <br>

                <code class="text-white">
                  null == undefined
                  // true 

                  null === undefined
                  // false 
                </code>

                <br> First off, the '==' operator performs type coercion before comparing values. That means javascript converts them to the 
                same type before making the comparison.

                <br> The '===' operator does not perform type coercion. It checks for both value equality and type equality.

                <br> Hence, when you use '==', null and undefined are considered equal because Javascript coerces them to the same type.
                <br> Null and Undefined are both false, so it evaluates them to 'true'.
                
                <br>However, when you use '===', null and undefined are not equal because there are different data types. 
                <br> null is an object type, while undefined is a primitive type, which evaluates to 'false'.

                <br>

                The undefined means a variable that has been declared, but the value of the variable has not been declared.
                <br> For example <br>
                
                <code class="text-white"> <br>
                   let undefined; <br>
                   console.log <br>
                   // undefined
                </code>

                <br>
                The Null and Undefined are falsy values, use them when necessary.
                <br>
                Thank you, for your time.I hope you enjoyed it.
        </p>
        </div>
        </div>
    </div>
</template>