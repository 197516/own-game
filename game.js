class game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
    
        this.playersTitle = createElement("h2");
    
        this.player1 = createElement("h2");
        this.player2 = createElement("h2");

        this.leftKeyActive = false;
    }
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

      start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
    
        player1 = createSprite(width / 2 - 50, height - 100);
        
    
    
       player2 = createSprite(width / 2 + 100, height - 100);
        
        
    
        players = [player1, player2];
      }
      handleElements() {
        form.hide();
        form.titleImg.position(40, 50);
        form.titleImg.class("gameTitleAfterEffect");
    
        //C39
        this.resetTitle.html("Reset Game");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width / 2 + 200, 40);
    
        this.resetButton.class("resetButton");
        this.resetButton.position(width / 2 + 230, 100);
    
        this.playersTitle.html("Leaderboard");
        this.playersTitle.class("resetText");
        this.playersTitle.position(width / 3 - 60, 40);
    
        this.player1.class("leadersText");
        this.player1.position(width / 3 - 50, 80);
    
        this.player2.class("leadersText");
        this.player2.position(width / 3 - 50, 130);
      }
      play() {
        this.handleElements();
        this.handleResetButton();
    
        Player.getPlayersInfo();

        if (allPlayers !== undefined) {
            image(footballfield_img, 0, 0, width, height);
            this.showplayers();
            var index = 0;
         if (index === player.index) {
                stroke(10);
                fill("red");
                ellipse(x, y, 60, 60);
           this.handleGoals(index)
           this.handlecollisionplayer1withplayer2(index)
         }        for (var plr in allPlayers) {
            index = index + 1;
            var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;
        }}
    drawSprites();
    text(90)
}
    
    
    handleResetButton() {
        this.resetButton.mousePressed(() => {
          database.ref("/").set({
            playerCount: 0,
            gameState: 0,
            players: {},
          });
          window.location.reload();
        });
      }

      HandlePlayersControl(){
        if (keyIsDown(UP_ARROW)) {
            this.playerMoving = true;
            player.positionY += 10;
            player.update();
          }
      
          if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
            this.leftKeyActive = true;
            player.positionX -= 5;
            player.update();
          }
      
          if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
            this.leftKeyActive = false;
            player.positionX += 5;
            player.update();
          }   
      }
      handleGoals(){
    if(ball_img.positionX=0){
            palyer2goal+= 1
        }
    if(ball_img.positionX=width){
    palyer1goal+= 1
        }
      }
      handlecollisionplayer1withplayer2(){
          player1.bounceOff(player2)
          player2.bounceOff(player1)   
      }
      handleWinner(){
          if(player1goal>player2goal){
              text("player1 has won",width/2,height/2,100,100)
              }
              if(player2goal>player1goal){
                text("player2 has won",width/2,height/2,100,100)
                 }
                 if(player1goal=player2goal){
                    text("This match was a tie",width/2,height/2,100,100)
                    
                } 
      }
    }
    