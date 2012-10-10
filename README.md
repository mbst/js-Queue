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


Licence