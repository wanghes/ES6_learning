(function () {
   'use strict';

   function hello() {
      return 'hello world';
   }

   var helloInfo = hello();

   var evens = [1, 2, 3];
   var odds = evens.map(function (v) {
     return v + 1;
   });
   var nums = evens.map(function (v, i) {
     return v + i;
   });

   var str = "<h1>" + helloInfo + "</h1><br>" + odds + "<br>" + nums;
   document.write(str);

}());
