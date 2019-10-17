new Vue({
  el: '#app',
  data:{
    gameIsRunning: false,
    number: 1,
    questions: [
      { number: 1,content: " Question 1" },
      { number: 2,content: " Question 2" },
      { number: 3,content: " Question 3" },
      { number: 4,content: " Question 4" }
    ]
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
    },
    changeQuestion: function(number){
      if (this.number == 4) {
        return;
      }
      return this.number += 1;
    }
  }
});
