new Vue({
  el: '#app',
  data:{
    gameIsRunning: false
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
    }
  }
});
