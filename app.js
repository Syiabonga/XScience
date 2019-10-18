new Vue({
  el: '#app',
  data:{
    gameIsRunning: false,
    number: 1,
    picked: "",
    questions: [
      { number: 1,content: " for(i=0,i>=10;i++)",output1:"Output: {1,2,3,4,5,6,7,8,9,10}", output2:"Output: {10,9,8,7,6,5,4,3,2,1}", answer: "one"},
      { number: 2,content: " Question 2" },
      { number: 3,content: " Question 3" },
      { number: 4,content: " Question 4" }
    ]
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
    },
    changeQuestion: function(){
      if (this.number == 4) {
        return;
      }
      alert('Correct answer');
      return this.number += 1;
    }
  }
});
