class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
        this.reset = createButton("reset")
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display() {
        this.title.html("hurdles");
        this.title.position(displayWidth/2,0);

        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+80);
        this.reset.position(displayWidth/2,displayHeight/4+40);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount+=1;
            player.index = playercount;
            player.update();
            player.updatecount(playercount);
            this.greeting.html("hello " + player.name)
            this.greeting.position(displayWidth/2,displayHeight/2);
        });
        this.reset.mousePressed(()=>{
            player.updatecount(0);
            game.update(0);
            Player.updatecarsatend(0)
        })
    }
}