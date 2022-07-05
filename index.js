const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pswd1 = document.getElementById("password-1")
let pswd2 = document.getElementById("password-2")
let amount = document.getElementById("tentacles")


function randText(){
    let text = ""
    for (let i = 0; i < amount.value; i += 1){
        text += characters[Math.floor(Math.random() * characters.length)]
    }
    return text;
}

function generate(){
    if(amount.value < 0 || amount.value > 20){
        return
    }
    pswd1.textContent = randText()
    pswd2.textContent = randText()
}

function copy1(){
    copyText(pswd1)
}

function copy2(){
    copyText(pswd2)
}

function copyText(pas){
    var range = document.createRange();
    range.selectNode(pas);
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

