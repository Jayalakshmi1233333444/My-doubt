class Game{
    constructor(){}
    //reading gamestate from database
    getState(){
    var gamestateref=database.ref("gameState");//referring to gameState
    gamestateref.on("value",function(data){//listening to changes in gameState
        gameState=data.val();//can't understand
        
    })
    
    }
    //updating gamestate to database
    update(state){//can't understand
        database.ref("/").update({
            gameState:state
        })
    }
    start(){//can't understand
        if(gameState===0){
            player=new Player()
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}