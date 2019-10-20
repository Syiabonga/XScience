new Vue({
  el: '#app',
  data:{
    gameIsRunning: false,
    number: 1,
    picked: "",
    points:0,
    attempts: 3,
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
    changeQuestion: function(event,answer){
      if (this.number == 4) {
        return alert('Congratulations');
      }
      if (this.picked == answer) {
        alert('Correct answer!');
        this.points += 1;
        return this.number += 1;
      }else {
        this.attempts -=1;
        alert(' Incorrect answer!');
        if (this.attempts <= 0) {
          alert('You lost!');
          this.points = 0;
          this.number = 1;
        }
      }
    }
  }
});
