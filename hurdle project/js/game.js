class Game {
    constructor() {}
    getstate() {
        var gamestateref = database.ref("gamestate");
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        });
    }
    async start(){
        if(gamestate===0) {
            player = new Player(); 
            var playercountref = await database.ref("playercount").once("value");
            if(playercountref.exists()) {
                playercount = playercountref.val();
                player.getcount();
            }
            form = new Form();
            form.display();
        }
        runner1 = createSprite(100,200);
        runner2 = createSprite(300,200);
        runner3 = createSprite(500,200);
        runner4 = createSprite(700,200);
        runners = [runner1,runner2,runner3,runner4];
    }
    play() {
        form.hide();
        //textSize(18);
        //text("Game Start!",120,100);
        Player.getplayerinfo();
        player.getcarsatend();
        if(allplayers!==undefined) {
           // var displayposition = 130;
            var index = 0;
            var x = 100;
            var y;

            for(var i in allplayers){
                index = index+1;
                x = x+200;
                y = displayHeight - allplayers[i].distance;
                runners[index-1].x = x;
                runners[index-1].y = y;
                if(index===player.index) {
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
            
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null) {
            player.update();
        }
        if(player.distance>3700) {
            gamestate = 2;
        }
        drawSprites();
    }
    end() {
        console.log("game ended")
    }
}