class question {
    constructor(id, question, choice1, choice2, choice3, choice4) { // constuctor รับค่า parameter ของเลขข้อ คำถาม ตัวเลือก1,2,3,4 ตามลำดับ
        this._id = id;
        this._question = question;
        this._choice1 = choice1;
        this._choice2 = choice2;
        this._choice3 = choice3;
        this._choice4 = choice4;
        this._ans = [this._choice1, this._choice2, this._choice3, this._choice4]; // ans เป็น Array ที่ไว้ใช้เรียก index ของคำถาม
    }
    getQuestion() { // return โจทย์คำถาม
        return this._question;
    }
    getId() { // return เลขข้อ
        return this._id;
    }
    setCorrect(i) { // คำตอบว่าข้อที่ถูกต้องคือข้อไหน
        this._correct = this._ans[--i];
        return true;
    }
    getCorrect() { // return คำตอบที่ถูกต้อง
        return this._correct;
    }
    setAns(i, str) { // set ตัวเลือกเมื่อต้องการแก้ไขตัวเลือกของโจทย์คำถามและจะแก้ไขเป็นอะไร
        this._ans[--i] = str;
        return true;
    }
    getAns(i) { // คำตอบที่ Player ตอบ
        return this._ans[--i];
    }
    toString() { // แสดงคำถามและตัวเลือกตามลำดับผ่าน toString
        return `Questions ${this._question}
Choice 1 : ${this._ans[0]} 
Choice 2 : ${this._ans[1]} 
Choice 3 : ${this._ans[2]}
Choice 4 : ${this._ans[3]}`
    }
}

class player {
    score = 0;
    constructor(name) { //รับค่าชื่อของผู้เล่นใหม่
        this._name = name;
    }
    getName() {
        return this._name;
    }
    setName(newName) { //rename ใหม่
        this._name = newName;
    }
    getScore() {
        return this.score;
    }
    toString() { // แสดงชื่อ player และ คะแนนของผู้เล่น
        return `Player : ${this._name} | Score : ${this.score} point`;
    }
}

function check(question, ans) { // เช็คคำตอบของ Player ว่าตรงกับ getCorrect() ที่ set ไว้ไหม
    if (question.getCorrect() == question.getAns(ans)) {
        return true;
    } else
        return false;
}

function play(player, question, answer) { //รับค่าผู้เล่น คำถามที่ต้องการตอบ และคำตอบ
    console.log(`Player : ${player.getName()}`); //แสดงชื่อ Player
    console.log(`Question : ${question.getQuestion()}`); //แสดง โจทย์คำถาม
    console.log(`Answer ${answer} : ${question.getAns(answer)}`); //แสดง คำตอบ
    if (check(question, answer) == true) { //เช็คเงื่อนไขถ้า คำถามและคำตอบถูกต้องโดยผ่าน function check ถ้าเป็นจริงให้เพิ่ม scroe +1
        player.score += 1;
        console.log('Answer is Correct! \n');
    } else
        console.log('Answer is Incorrect! \n');
}

function total(p) { //รวมคะแนนของ Player โดยแสดงชื่อ Player และคะแนนรวม
    console.log('Player :' + ' ' + p.getName() + ' ->' + ` Total Score = ${p.getScore()} Point`);
}
//Player 
let p1 = new player('Tle');
let p2 = new player('Opal');
let p3 = new player('Game');
let p4 = new player('Bew');
let p5 = new player(`P ' Green`);
let p6 = new player('Fight');

//Question and SetCorrect
let q1 = new question(1, 'What is 50-5', '45', '100', '15', '25');
q1.setCorrect(1);
let q2 = new question(2, 'What is 5+5', '3', '5', '10', '15');
q2.setCorrect(3);
let q3 = new question(3, 'What is 10/2', '3', '5', '10', '15');
q3.setCorrect(2);
let q4 = new question(4, 'What is Pi on Math', '22/7', '2.5', '11', '4.845');
q4.setCorrect(1);
let q5 = new question(5, 'What is 10 x 2', '10', '20', '30', '999');
q5.setCorrect(2);


//Playing
play(p1, q1, 3); //false
play(p1, q2, 2); //false
play(p1, q3, 2); //True
total(p1); // Total score
console.log('------------------------')
play(p2, q2, 3);
play(p2, q5, 1);
play(p2, q4, 1);
total(p2);
console.log('------------------------')
play(p3, q1, 1);
play(p3, q4, 1);
play(p3, q3, 2);
total(p3);
console.log('------------------------')
play(p4, q3, 3);
play(p4, q2, 1);
play(p4, q5, 2);
total(p4);
console.log('------------------------')
play(p5, q2, 3);
play(p5, q4, 1);
play(p5, q1, 1);
total(p5);
console.log('------------------------')
play(p6, q1, 3);
play(p6, q5, 2);
play(p6, q3, 4);
total(p6);
