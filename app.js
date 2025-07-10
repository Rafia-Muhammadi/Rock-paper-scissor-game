let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const  userscorepara =document.querySelector("#user-score");
const  compscorepara =document.querySelector("#comp-score")

const genCompChoice =()=>{
  const options =["rock","paper","scissor"];
  const randidx= Math.floor(Math.random()*3);
  return options[randidx];
};
const drawGame =() =>{
  console.log("game was draw");
  msg.innerText="Game was Draw , Play again";
  msg.style.backgroundColor ="black";
}
const showWinner =(userWin ,userchoice,compchoice) =>{
  if(userWin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText =`YOU WIN! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor ="green";
  }
  else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText =`YOU LOSE! Comp ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor ="red";
  }
};
const playgame  =(userchoice) =>{
  console.log("user choice =",userchoice);
  //generate computer choice =>modular
  const compchoice=genCompChoice();
  console.log("comp choice =",compchoice);

  if(userchoice=== compchoice){
    //drawcode
    drawGame();

  }
  else{
    let userWin =true;
    if(userchoice === "rock"){
     userWin = compchoice ==="paper" ? false :true;
    }
    else if(userchoice ==="paper"){
      userWin =compchoice ==="scissor" ? false:true;
    }
    else{
      userWin=compchoice ==="rock" ?false :true;
    }
    showWinner(userWin ,userchoice,compchoice);
  }
  
};

choices.forEach((choice) =>{
    
    choice.addEventListener("click",() =>{
      const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
