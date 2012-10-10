About
==

js-Queue is a simple Queue implementation for Javacsript.

jsFiddle: http://jsfiddle.net/n8E3p/

How
==

    // Set up your queue by pushing functions to a queue
    var list = [];
    
    // A simple function
    var ourFunction = function(args, callback){
      var num = 0;
      if (args && args.num) {
        num = args.num;
      }
      if (callback) {
        callback(num);
      }
    };
    
    // a loop to add them
    for (var i = 0, ii = 10; i<ii; i++) {
      list.push({
        fn: ourFunction,
        args: {
          num: i
        },
        callback: function(num){
          console.log(num + ', ');
        }
      });
    }

    // Init the queue
    var queue = new Queue(list, 1000, function(){
      // On completion
        document.write('Done');
    });

    queue.start();

    setTimeout(
        function(){
            queue.pause()
        },
        5000
    );

    setTimeout(
        function(){
            queue.resume()
        },
        10000
    );

    setTimeout(
        function(){
            queue.pause()
        },
        15000
    );

    setTimeout(
        function(){
            queue.flush()
        },
        20000
    );​


Licence (MIT)
==

Copyright (c) 2012 MetaBroadcast

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.