class Form{

    constructor(){
        this.title = createElement('h1')
        this.title.html('WW3')
        this.title.position(displayWidth/2,displayHeight-100)

        this.Level1 = createButton('Level 1')
        this.Level1.position(displayWidth/2,displayHeight-400);
        this.Level1.style('background', 'lightgrey'); 

        this.Level2 = createButton('Level 2')
        this.Level2.position(displayWidth/2,displayHeight-420);
        this.Level2.style('background', 'lightgrey'); 

        this.Level3 = createButton('Level 3')
        this.Level3.position(displayWidth/2,displayHeight-440);
        this.Level3.style('background', 'lightgrey'); 
    }

    display(){

    }
}