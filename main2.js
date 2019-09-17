let Rat = function (name, weight, speed, status, talk) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.talk = talk;
    this.getStatus = function () {
        return this.status;
    }

}
let Cat = function (name, weight, speed, status, talk) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.talk = talk;
    this.catchRat = function (namerat, namecat) {
        if (namerat.speed < namecat.speed) {
            return true;
        } else {
            return false;
        }
    };
    this.eatRat = function (namerat, namecat) {
        if (this.catchRat(namerat, namecat)) {
            this.weight += namerat.weight;
            namerat.status ='died';
            document.getElementById('result').innerHTML += 'finished eating the mouse <br>';
        } else {
            document.getElementById('result').innerHTML += 'Havent caught the mouse yet<br>';
        }
    }
}
let nameRat=' jerry';
let weightRat=5;
let speedRat=20;
let statusRat='living';
let talkRat='chit chit'
let jerry=new Rat(nameRat,weightRat,speedRat,statusRat,talkRat);
let nameCat=' tom';
let weightCat=5;
let speedCat=30;
let statusCat='living';
let talkCat='meo meo'
let tom=new Cat(nameCat,weightCat,speedCat,statusCat,talkCat);
function keu(name) {
    document.getElementById('result').innerHTML+=name.talk+'<br>';
}
function batChuot(namerat, namecat) {
    namerat.catchRat(namerat, namecat);
}
function anChuot(namerat, namecat) {
    namecat.eatRat(namerat, namecat);
}
function checkStatus(name) {
    if(name.status=='living') {
        document.getElementById('result').innerHTML+= name.status + name.weight+'<br>';
    }else {document.getElementById('result').innerHTML+= name.status+'<br>';}
}