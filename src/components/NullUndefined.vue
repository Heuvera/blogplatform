<template>
    <div class="flex justify-center items-center relative bg-black min-h-screen min-w-screen">
        <div class="max-w-xl mx-auto p-8">
            <h1 class="text-white text-3xl font-bold mb-8 text-center">Null vs  Undefined</h1>
            <div class="text-gray-200 text-lg font-sm">
            <p>
              In Javascript, Null and Undefined are special values that indicates the absence of a value
              or object, So what do they do? Null is an assigned value which means nothing and Undefined means
              a variable declared but not defined yet.
              </p>
              <p>
              For example,
              </p>
              <pre class="bg-gray-900 text-white p-1 rounded-lg">
                <code>
                  <p> const myself = null; </p>
                   <p> console.log(myself); </p>
                   <p> // null </p>
                </code> </pre>
                
                <p>
                The code above is a null, and it is assigned to a variable as a representation of no value.
                 Some developers use null for the business there are trying to solve. it is also Primitive value.
                 Null is not strictly equal to undefined, there are loosely equal.
                </p>

                <p> Here is an example:</p>

                <pre class="bg-gray-900 text-white p-1 rounded-lg"><code>
                 <p> null == undefined </p>
                  <p>// true </p>

                 <p>null === undefined </p>
                  <p>// false </p>
                 
                </code></pre>

                <p> First off, the '==' operator performs type coercion before comparing values. That means javascript converts them to the 
                same type before making the comparison.
                </p>

                <p> The '===' operator does not perform type coercion. It checks for both value equality and type equality.
                 </p>

                <p> Hence, when you use '==', null and undefined are considered equal because Javascript coerces them to the same type.
                 Null and Undefined are both false, so it evaluates them to 'true'.
                </p>

                <p>However, when you use '===', null and undefined are not equal because there are different data types. 
                 null is an object type, while undefined is a primitive type, which evaluates to 'false'.

                </p>

                <p>
                The undefined means a variable that has been declared, but the value of the variable has not been declared.
                </p>
                <p> For example </p>
                
                <pre class="bg-gray-900 text-white p-1 rounded-lg"> <code>
                  <p> let undefined; </p>
                  <p> console.log(undefined);</p>
                  <p> // undefined </p>
                </code></pre>

                <p>
                The Null and Undefined are falsy values, use them when necessary.
                </p>

                <p>
                Thank you, for your time.I hope you enjoyed it.
                </p>

        </div>
        </div>
    </div>
</template>