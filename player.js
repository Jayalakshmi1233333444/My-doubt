class Player{
    constructor(){}
    //reading playerCount value from database
    getCount(){//cant't understand
        var playerCountref=database.ref("playerCount");//referring to the playerCount
        playerCountref.on("value",function(data){//listening to the changes in playerCount
            playerCount=data.val();
        })
    }
    //updating playercount value in database
    updateCount(count){// can't understand 
        database.ref("/").update({
            playerCount:count
        })
    }
    //updating playername in database
    update(name){//can't understand
        var playerindex="player"+playerCount
        database.ref(playerindex).set({
            name:name
        })
    }
}