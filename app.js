new Vue({
  el: '#app',
  data:{
    gameIsRunning: false,
    number: 1,
    picked: "",
    points:0,
    attempts: 3,
    questions: [
      { number: 1,content: " int d=5;printf(“%f ”,d);", output1:"5",output2:"Undefined", answer:"two" },
      { number: 2,content: " for(i=0,i>=10;i++)",output1:"Output: {1,2,3,4,5,6,7,8,9,10}", output2:"Output: {10,9,8,7,6,5,4,3,2,1}", answer: "one"},
      { number: 3,content: " MAX=5;for(i=0; i< MAX; i++)\n{for(j=0;j<=i;j++){printf(*);}printf(\n);}",output1: " A Triangle", output2:"A Pyramid", answer:"two"},
      { number: 4,content: " fact=1; n=10; for(i = 1; i <= n; i++){cal = calc*i;}",output1:"First n numbers of fibonacci's sequence",output2:"Fatorial of n", answer:"two" },
      { number: 5,content: " int x=20,y=35;x = y++ + x++;y = ++y + ++x;", output1:"x= 43, y= 63",output2:"x=57, y=94",answer:"two" },
      { number: 6,content: " struct  a{int x;struct a *b;}", output1: "Legal code", output2:"Illegal code",answer:"one" },
      { number: 7,content: "#define square(x) x*x i = 64/square(4);printf(“%d”,i);", output1:"32",output2:"64", answer:"two" },
      { number: 8,content: " char *p; p=“Hello”; printf(“%c\n”,*&*p);" ,output1:"H",output2:"O",answer:"one"},
      { number: 9,content: " nt x=5;printf(“%d %d %d\n”,x,x<<2,x>>2)", output1:" 5 15 2", output2:"5 20 1", answer:"two" },
      { number: 10,content: " If you see this message, it means that you do not need to be tested in this section because YOU ALREADY MADE IT FRIEND! ", output1: "I am incredible", output2: "I am super incredible", answer:"two" }
    ]
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
    },
    changeQuestion: function(event,answer,picked){
      if (this.number == 10) {
        return alert('Congratulations, keep working hard! This world needs more people like you');
        this.gameIsRunning = false;
      }
      if (this.picked == answer) {
        alert('You such an amazing dev, oh Lord!');
        this.points += 1;
        this.picked = "";
        return this.number += 1;
      }else if (this.picked != answer & this.picked != "") {
        this.attempts -=1;
        alert(' Try again, that is how programming works!');
        if (this.attempts <= 0) {
          alert('Just restart the game, you are still good!');
          this.points = 0;
          this.number = 1;
          this.picked = "";
          this.gameIsRunning = false;
        }
      }
      if(picked == " "){
        alert('Come on, you have to choose an answer!');
      }
    },
    giveUp: function(){
      this.gameIsRunning = false;
    }
  }
});
