
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((i) => {
    i.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            // console.log(e.target.innerHTML);
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})