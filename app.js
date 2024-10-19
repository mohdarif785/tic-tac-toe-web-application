let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
var colourCode = document.getElementById("colour-code");

let player0 = true;

const winPatterns = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    getColor();

}


boxes.forEach((btn) => {

    btn.addEventListener("click", () => {

        if (player0) {
            
             btn.innerText = "0";
            colourCode.innerText = "X's Turn";
            player0 = false;
        }
        else {
        
            btn.innerText = "X";
            colourCode.innerText = "0's Turn";
            player0 = true;
        }
        btn.disabled = true;
        getColor();
        checkWinner();

    });


});


const disableBoxes = () => {
    for (let i of boxes) {
        i.disabled = true;
    }
}
const enableBoxes = () => {
    for (let i of boxes) {
        i.disabled = false;
        i.innerText = "";
    }
}

const showWinner = (winner) => {
   
    msg.innerText = `10 Karoor! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};




const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


const getColor = () => {

    const randomNumber = Math.floor(Math.random() * 16777215);
    const random = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = random;
    // navigator.clipboard.writeText("chance of");

    // document.getElementById("colour-code").innerText = "X's chance.";
}



    document.getElementById("btn").addEventListener(

        "click",
        getColor
    )