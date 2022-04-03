class Form{
    constructor(){
      this.titleimg = createImg("./assets/title.jpeg","gameTitle")
        this.playButton = createButton("play");
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.greeting = createElement("h2");
       
    }
    setElementsPosition() {
      this.titleimg.position(120, 50);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
       
        this.input.position(width / 2 - 110, height / 2 - 120);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
    setElementsStyle() {
      this.titleimg.class("gameTitle");
      this.playButton.class("customButton");
     this.input.class("customInput");
      this.greeting.class("greeting");
      }
    MousePressed(){
  this.playButton.MousePressed(()=>{
   this.input.hide();
   this.playButton.hide();
  
   var message = `
   Hello ${this.input.value()}
   </br>wait for another player to join...`; 
   this.greeting.html(message);
   playerCount+= 1;
   player.index = playerCount;
   player.name = this.input.value;
   player.addPlayer();
   player.updateCount(playerCount);
   player.getDistance();



  }
  )
  }
  display(){
    this.setElementsPosition() 
    this.setElementsStyle()
    this.MousePressed()
  }
    }