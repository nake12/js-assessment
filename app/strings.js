exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
        var result = '';
       var char;
      var count ={}
      var input = str.split('')
      for (var i =0;i<input.length;i++){
          char = input[i]
          if(typeof(count[char])==='undefined'){
              count[char] =1;
          }
          else{
              count[char] = count[char]+1
          }
          if(count[char]<=amount){
              result+=char
          }
      }
      return result
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
        return str.split('').reverse().join('')
  }
};
