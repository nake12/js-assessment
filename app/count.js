exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
        var time;
      function counting(){
          start++;
          if(start<=end){
              time = setTimeout(counting,100);
          }
      }
      counting();
      return {
          cancel: function(){
              time && clearTimeout(time)
          }
      };
  }
};
