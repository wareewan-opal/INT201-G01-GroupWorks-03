class question{
    constructor(question,choice1,choice2,choice3,choice4){
        this.question = question;
        this._choice1 = choice1 ;
        this._choice2 = choice2 ;
        this._choice3 = choice3 ;
        this._choice4 = choice4 ;
        this._ans = [this._choice1,this._choice2,this._choice3,this._choice4];
    }
    setCorrect(i) {
        this._correct = this._ans[--i];
        return true;
    }
    getCorrect(){
        return this._correct;
    }
    setAns(i,str){
        this._ans[--i] = 'str';
        return true;
    }
    getAns(i){
        return this._ans[--i];
    }
    toString(){
        return `Questions ${this.question}
Choice 1 : ${this._ans[0]} 
Choice 2 : ${this._ans[1]} 
Choice 3 : ${this._ans[2]}
Choice 4 : ${this._ans[3]}
\n`
    }
}

class player{
    score = 0;
    constructor(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
    setName(newName){
        this._name = newName;
    }
    getScore(){
        return this.score;
    }
    toString(){
        return `Name player : ${this._name} | Score : ${this.score} point`;
    }
}

function check(question , ans){
    if(question.getCorrect() == question.getAns(ans)){
        return true;
    }else
        return false;
}

function plusScore(player){
    player.score += 1;
    return true;
}

function play(player,question,answer){
    if(check(question,answer) == true){
        plusScore(player);
        return true;
    }else
        return false;
}

//Player
let p1 = new player('Tle');
let p2 = new player('Opal');
let p3 = new player('Game');
let p4 = new player('Bew');
let p5 = new player(`P ' Green`);
let p6 = new player('Fight');

//Question and SetCorrect
let q1 = new question('What is 50-5','45','100','15','25');
q1.setCorrect(1);
let q2 = new question('What is 5+5','3','5','10','15');
q2.setCorrect(3);
let q3 = new question('What is 10/2','3','5','10','15');
q3.setCorrect(2);
let q4 = new question('What is Pi on Math','22/7','2.5','11','4.845');
q4.setCorrect(1);
let q5 = new question('What is 10 x 2','10','20','30','999');
q5.setCorrect(2);

//Testing
console.log(q1.toString());
console.log(q2.toString());
console.log(q3.toString());
console.log(q4.toString());
console.log(q5.toString());

//Playing
play(p1,q1,2); //false
console.log(p1.toString());
play(p2,q2,3); //true
console.log(p2.toString());



