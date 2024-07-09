let boxes=document.querySelectorAll('.box');
let rstBtn=document.querySelector('#reset');
let show=document.querySelector('.showMsg');
let hide=document.querySelector('.hide');
let newBtn=document.querySelector('.restart');
let player1=document.querySelector('#player1');
let player2=document.querySelector('#player2');
// let turn =document.querySelector('.turn');
let form=document.querySelector('form');
// let hidep1=document.querySelector('.hidep1');
// let hidep2=document.querySelector('.hidep2');
let turnO=true;
let results=[[0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [1,4,8],
            [2,4,6],
            [0,4,8]
];
let playerO;
let playerX;
const task=(event)=>{
    event.preventDefault();
    playerO=player1.value;
    playerX=player2.value;
}
form.addEventListener('submit',task);
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText=playerO;           
            turnO=false;
        }else{
            box.innerText=playerX;
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner=()=>{
    for(let result of results){
        let position1=boxes[result[0]].innerText;
        let position2=boxes[result[1]].innerText;
        let position3=boxes[result[2]].innerText;
        if(position1!==""  && position2 !=="" && position3 !==""){
            if(position1===position2 && position2===position3){
                showWinner(position1);
            }
        }
    }
}
const showWinner=(winner)=>{
    show.innerText=`Congratulation! Winner is ${winner}`;
    hide.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetFun=()=>{
    hide.classList.add("hide");
    enableBoxes();
    for(let box of boxes){
        box.innerText="";
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}
rstBtn.addEventListener("click",resetFun);
newBtn.addEventListener("click",resetFun);