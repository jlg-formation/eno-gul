export const enoOldStar = function() {
    return {
        compile: function() {
            console.log('compile', arguments);
            
            
            return {
                pre: function() {
                    console.log('pre link', arguments);
                },
                post: function() {
                    console.log('post link', arguments);
                }
            };
        }
         
    };
   
};