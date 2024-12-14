
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
//change player
let player= "X"
let isgameover = false;
let changeplayer = () => {
    if (player == "X") {
        return "0";
    }
    else {
        return "X";
    }
}
//box click 
let boxes = document.getElementsByClassName("input");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.textContent == "") {
            boxtext.textContent = player;
            player= changeplayer();
            audioTurn.play();  
            changeinfo();
            checkwin();     
         }
    })
})
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
//change info
const changeinfo = ()=>{
  
  for(patterns of winpattern){
    document.querySelector(".info").textContent="Player:"+  player;
  } 
}
//check winner
let checkwin=()=>{
    Array.from(boxes).forEach(element=>{
        let ps0=document.querySelector(".ps0").textContent;
        let ps1=document.querySelector(".ps1").textContent;
        let ps2=document.querySelector(".ps2").textContent;
        let ps3=document.querySelector(".ps3").textContent;
        let ps4=document.querySelector(".ps4").textContent;
        let ps5=document.querySelector(".ps5").textContent;
        let ps6=document.querySelector(".ps6").textContent;
        let ps7=document.querySelector(".ps7").textContent;
        let ps8=document.querySelector(".ps8").textContent;
        if(ps0==ps1&&ps1==ps2&&ps0!==""&&ps1!==""&&ps2!==""){
            document.querySelector(".info").textContent= ps0+"Wins";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            isgameover=true;
        }
        else if(ps3==ps4&&ps4==ps5&&ps3!==""&&ps4!==""&&ps5!==""){
            document.querySelector(".info").textContent=ps3+"Wins";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            isgameover=true;
        }
        else if(ps6==ps7&&ps7==ps8&&ps6!==""&&ps7!==""&&ps8!==""){
            document.querySelector(".info").textContent=ps6+"Wins";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            isgameover=true;
        }
        else if(ps0==ps3&&ps3==ps6&&ps0!==""&&ps3!==""&&ps6!==""){
            document.querySelector(".info").textContent=ps0+"Wins";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            isgameover=true;
        }
        else if(ps1==ps4&&ps4==ps7&&ps1!==""&&ps4!==""&&ps7!==""){
            document.querySelector(".info").textContent=ps1+"Wins";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            isgameover=true;
        }
        else if(ps2==ps5&&ps5==ps8&&ps2!==""&&ps5!==""&&ps8!==""){
            document.querySelector(".info").textContent=ps2+"Wns";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            isgameover=true;
        }
        else if(ps0==ps4&&ps4==ps8&&ps0!==""&&ps4!==""&&ps8!==""){
            document.querySelector(".info").textContent=ps0+"Wins";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            isgameover=true;
        }
        else if(ps2==ps4&&ps4==ps6&&ps2!==""&&ps4!==""&&ps6!==""){
            document.querySelector(".info").textContent=ps2+"Wins";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            isgameover=true;
        } 
    }) 
}
//reset
let restart=()=>{
    let reset= document.querySelector(".reset");
    reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(e=>{
        e.textContent=" "
        window.location.reload();  
    });
})
}
restart();
