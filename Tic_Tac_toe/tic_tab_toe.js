let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");




let turnO = true; //PlayerX ,PlayerO

let winPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("Click");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            change_color();
            
        }
        else {
            box.innerText = "X";
            turnO = true;
            change_color();
        }
        box.disabled = true;
        checkWinner();

    })
})
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);(confuse)
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);

            }
        }

    }

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);