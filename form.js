class Form{
    constructor(){}
    display(){
        var title =createElement("h2");//creating title
        title.html("Car racing");// text which should be displayed on the title
        title.position(130,0);//positioning

        var input=createInput("name");//creating a text box named name 
        var button=createButton("play");//creating button 
        var greeting=createElement("h3");//creating a greeting

        input.position(130,160);//positioning
        button.position(250,200);//positioning
        
        button.mousePressed(function(){//the mouse pressed()will take value as function
            input.hide();//hiding
            button.hide();//hiding
            
            var name=input.value()//inside the var name we are giving the names of the players
            playerCount+=1//we created a var playerCount in sketch.js and we are adding the player count by 1
            player.update(name);//see this () in player.js we are calling this () here because in forms only the name should be entered right.
            player.updateCount(playerCount);// see this in player.js there count we are creating inside the updateCount() only
            greeting.html("Hello"+name)//the text which should be displayed as greeting and along with the player names
            greeting.position(130,160);//positioning

        })
    }
}