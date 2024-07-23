let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGamebtn=document.querySelector("#new-btn");


let turnO=true;  //playerX,playerO



const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    // (extra it was for display on console)  console.log("box was clicked");
      if(turnO===true){
        box.innerText="O";
        turnO=false;
       
      }
      else{
        box.innerText="X";
        turnO=true;
       
      }
      box.disabled=true;


      checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
     //(extra  it was for display on console) == //console.log(pattern[0],pattern[1],pattern[2]);
      //(extra  it was for display on console)== //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

     let pos1val= boxes[pattern[0]].innerText;
     let pos2val= boxes[pattern[1]].innerText;
     let pos3val= boxes[pattern[2]].innerText;

     if(pos1val !="" && pos2val !="" && pos3val !=""){
       if(pos1val===pos2val && pos2val===pos3val){
           // (extra it was for display on console)  console.log("winner",pos1val); 

           showWinner(pos1val);
       }
     }
    }
};


const showWinner=(winner)=>{
    msg.innerText=`congratulation,winner is${winner}`;
    msgContainer.classList.remove("hide");

    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

