class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.player2goal =0; 
        this.player1goal =0;     
    }
  addPlayer(){
      var playerIndex = 'players/player'+this.index;
      if(this.index === 1){
          this.positionX = width / 2 + 200
      } else{
        this.positionx = width/2 - 200
      }

      database.ref(playerIndex).set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY,
        goal: this.goal
      })
  }
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
}

    updateCount(count) {
        database.ref("/").update({
          playerCount: count
        });
}
update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      player1goal: this.player1goal,
      player2goal: this.player2goal
      
    })
}
static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

}