var Queue = function(queue, interval, callback){
    this.queue = queue;
    this.queueLength = queue.length;
    this.interval = interval;
    this.callback = callback;
    this.paused = false;
};

Queue.prototype.start = function(){
    var q = this,
        currentItem = 0;
   
    if(q.paused === false){
        if(q.queueLength > 0 && q.queue[0]){
            if(q.queue[0].callback){
                q.queue[0].fn(q.queue[0].args, q.queue[0].callback);
            } else {
                q.queue[0].fn(q.queue[0].args);
            }
        
            q.queue.splice(0, 1);
            
            q.queueLength = q.queue.length;
            
            if(q.interval){
                setTimeout(function(){
                    q.start();
                }, q.interval);
            } else {
                q.start();
            }
        } else {
            if(q.callback){
                q.callback(true);
                return true;
            }
        }
    }
};

Queue.prototype.pause = function(){
    var q = this;
    
    q.paused = true;
};

Queue.prototype.resume = function(){
    var q = this;
    
    q.paused = false;
    
    q.start();
};

Queue.prototype.flush = function(){
    var q = this;
    
    q.paused = false;
    q.interval = 0;
    q.start();
};
